export declare function run(command: string, args: string[], input?: string | Buffer, env?: NodeJS.ProcessEnv): Promise<Buffer>;
export declare const git: (repo: string, args: string[], input?: string | Buffer, env?: NodeJS.ProcessEnv) => Promise<Buffer<ArrayBufferLike>>;
export declare function gitText(repo: string, args: string[], input?: string | Buffer, env?: NodeJS.ProcessEnv): Promise<string>;
export declare function exists(p: string): Promise<boolean>;
export declare function atomicJson(p: string, value: unknown): Promise<void>;
export declare function readJson<T>(p: string): Promise<T>;
export declare function fileAt(repo: string, commit: string, p: string): Promise<Buffer>;
export declare function hasFile(repo: string, commit: string, p: string): Promise<boolean>;
export declare function commitFiles(repo: string, parent: string | null, files: Map<string, string | null>, message: string, modes?: Map<string, string>): Promise<string>;
