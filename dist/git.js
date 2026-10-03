import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
export async function run(command, args, input, env = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, { env: { ...process.env, ...env }, stdio: ['pipe', 'pipe', 'pipe'] });
        const out = [], err = [];
        let size = 0;
        child.on('error', reject);
        child.stdout.on('data', b => { size += b.length; if (size > 32 * 1024 * 1024)
            child.kill();
        else
            out.push(b); });
        child.stderr.on('data', b => err.push(b));
        child.stdin.on('error', () => { });
        child.on('close', code => code === 0 ? resolve(Buffer.concat(out)) : reject(new Error(`${command} failed (${code}): ${Buffer.concat(err).toString().slice(0, 3000)}`)));
        child.stdin.end(input);
    });
}
export const git = (repo, args, input, env) => run('git', ['-c', 'core.hooksPath=/dev/null', '-C', repo, ...args], input, env);
export async function gitText(repo, args, input, env) {
    return (await git(repo, args, input, env)).toString().trim();
}
export async function exists(p) { return fs.stat(p).then(() => true, () => false); }
export async function atomicJson(p, value) {
    await fs.mkdir(path.dirname(p), { recursive: true });
    const tmp = `${p}.${randomUUID()}.tmp`;
    const f = await fs.open(tmp, 'wx', 0o600);
    try {
        await f.writeFile(JSON.stringify(value, null, 2) + '\n');
        await f.sync();
    }
    finally {
        await f.close();
    }
    await fs.rename(tmp, p);
}
export async function readJson(p) { return JSON.parse(await fs.readFile(p, 'utf8')); }
export async function fileAt(repo, commit, p) {
    const item = (await git(repo, ['ls-tree', '-z', commit, '--', p])).toString();
    if (!item.startsWith('100644 blob ') && !item.startsWith('100755 blob '))
        throw new Error(`Not a regular tracked file: ${p}`);
    return git(repo, ['show', `${commit}:${p}`]);
}
export async function hasFile(repo, commit, p) {
    return (await git(repo, ['ls-tree', '-z', commit, '--', p])).length > 0;
}
export async function commitFiles(repo, parent, files, message, modes = new Map()) {
    const index = path.join(repo, `index-${randomUUID()}`);
    const env = { GIT_INDEX_FILE: index, GIT_AUTHOR_NAME: 'OKF Workspace', GIT_AUTHOR_EMAIL: 'okf-workspace@localhost', GIT_COMMITTER_NAME: 'OKF Workspace', GIT_COMMITTER_EMAIL: 'okf-workspace@localhost' };
    try {
        await git(repo, parent ? ['read-tree', parent] : ['read-tree', '--empty'], undefined, env);
        for (const [p, content] of files) {
            if (content === null) {
                await git(repo, ['update-index', '-z', '--index-info'], `0 ${'0'.repeat(40)}\t${p}\0`, env);
                continue;
            }
            const blob = await gitText(repo, ['hash-object', '-w', '--stdin'], content);
            let mode = '100644';
            if (parent) {
                const entry = (await git(repo, ['ls-tree', '-z', parent, '--', p])).toString();
                if (entry.startsWith('100755'))
                    mode = '100755';
            }
            await git(repo, ['update-index', '--add', '--cacheinfo', modes.get(p) ?? mode, blob, p], undefined, env);
        }
        const tree = await gitText(repo, ['write-tree'], undefined, env);
        return gitText(repo, ['commit-tree', tree, ...(parent ? ['-p', parent] : []), '-F', '-'], message + '\n', env);
    }
    finally {
        await fs.rm(index, { force: true });
    }
}
