import { type Config, type Prepare, type Snapshot, type Reason } from './schema.js';
export declare const digest: (s: string | Buffer) => string;
type Journal = {
    id: string;
    request_hash: string;
    base: string;
    status: 'preparing' | 'prepared' | 'applied' | 'discarded' | 'failed';
    request: Prepare;
    candidate?: string;
    result?: string;
    diffs?: unknown[];
    error?: string;
};
export declare class Workspace {
    readonly root: string;
    readonly control: string;
    constructor(root: string);
    repo(name: string): string;
    journal(name: string): string;
    locked<T>(fn: () => Promise<T>): Promise<T>;
    initializeCatalog(s: Snapshot, cfg: Config): Promise<void>;
    enrich(base: Snapshot, next: Snapshot, changed: string[], original?: Map<string, string>, content?: Map<string, string>): Promise<void>;
    afterReviews(s: Snapshot, ids: string[]): Promise<void>;
    current(): Promise<string>;
    snapshot(ref?: string): Promise<{
        id: string;
        data: Snapshot;
    }>;
    saveSnapshot(s: Snapshot): Promise<string>;
    init(input: unknown, baseDir?: string): Promise<{
        snapshot: string;
        nodes: number;
        repositories: Record<string, string>;
    }>;
    retain(s: Snapshot, candidate: string): Promise<void>;
    contents(s: Snapshot): Promise<Map<string, string>>;
    validateState(s: Snapshot, content: Map<string, string>): Promise<void>;
    prepare(input: unknown): Promise<Journal | {
        review_required: Record<string, Reason[]>;
        id: string;
        request_hash: string;
        base: string;
        status: "preparing" | "prepared" | "applied" | "discarded" | "failed";
        request: Prepare;
        candidate?: string;
        result?: string;
        diffs?: unknown[];
        error?: string;
    }>;
    markDependents(base: Snapshot, next: Snapshot, changed: string[], oldContent: Map<string, string>, newContent: Map<string, string>): void;
    apply(changeId: string): Promise<{
        change_id: string;
        snapshot: string;
        status: "applied";
    }>;
    isPublished(candidate: string, current: string): Promise<boolean>;
    changeGet(changeId: string): Promise<Journal>;
    discard(changeId: string): Promise<{
        change_id: string;
        status: "discarded";
    }>;
    get(nodeId: string, view?: 'brief' | 'summary' | 'outline' | 'full' | 'sections', sectionIds?: string[], snapshot?: string, atHash?: string): Promise<Record<string, unknown>>;
    list(options?: {
        domain?: string;
        kind?: string;
        needs_review?: boolean;
        offset?: number;
        limit?: number;
        snapshot?: string;
    }): Promise<{
        snapshot: string;
        total: number;
        offset: number;
        items: {
            content_hash: string;
            needs_review: boolean;
            id: string;
            kind: "document" | "artifact";
            path: string;
            title: string;
            description: string;
            domain: string;
            repository: string;
            relations: {
                type: "references" | "depends_on" | "documents" | "implements" | "related_to";
                target: string;
                section?: string | undefined;
                target_hash?: string | undefined;
                source_section?: string | undefined;
            }[];
            version?: string | undefined;
            card?: {
                subject: {
                    path: string;
                    repository: string;
                    artifact_id?: string | undefined;
                };
                mode: "full" | "delegated" | "minimal";
                references: {
                    document: string;
                    section?: string | undefined;
                }[];
                reason?: string | undefined;
            } | null | undefined;
        }[];
    }>;
    search(query: string, domain?: string, limit?: number, snapshot?: string, offset?: number): Promise<{
        hits: {
            content_hash: string;
            needs_review: boolean;
            bundle: string;
            id: string;
            type: string;
            title: string;
            titleDerived?: boolean;
            description?: string;
            resource?: string;
            tags?: string[];
            score: number;
            matchedIn?: import("@copperbox/okf-mcp/dist/search.js").MatchField[];
            snippet?: string;
            section?: string;
            matchedSections?: string[];
            matchedSectionCount?: number;
            sectionCount?: number;
            matchedCharacters?: number;
            documentCharacters?: number;
            recommendedRead?: import("@copperbox/okf-mcp/dist/search.js").RecommendedRead;
            status: import("@copperbox/okf-mcp").ConceptStatus;
            trust: import("@copperbox/okf-mcp").TrustTier;
            stale?: boolean;
        }[];
        total: number;
        omitted?: number;
        termMatching?: "any";
        tagHints?: import("@copperbox/okf-mcp/dist/search.js").TagHint[];
        snapshot: string;
    }>;
    graph(nodeId: string, direction?: 'dependencies' | 'dependents', depth?: number, snapshot?: string): Promise<{
        snapshot: string;
        domains: string[];
        edges: unknown[];
        truncated: boolean;
    }>;
    inventory(repository: string, offset?: number, limit?: number, snapshot?: string): Promise<{
        snapshot: string;
        repository: string;
        total: number;
        offset: number;
        items: {
            path: string;
            mode: string;
            type: string;
            git_oid: string;
            registered_id: string | null;
            kind: "document" | "artifact" | null;
        }[];
    }>;
    related(nodeId: string, limit?: number, snapshot?: string): Promise<{
        snapshot: string;
        method: string;
        total: number;
        items: {
            id: string;
            title: string;
            domain: string;
            reasons: string[];
        }[];
    }>;
    validate(snapshot?: string): Promise<{
        snapshot: string;
        valid: boolean;
        nodes: number;
        review_required: string[];
    }>;
    sourceStatus(): Promise<{
        snapshot: string;
        repositories: {
            repository: string;
            source_commit: string;
            snapshot_commit: string;
            differs: boolean;
            changed_since_import: boolean;
        }[];
    }>;
    exportSnapshot(destination: string, snapshot?: string): Promise<{
        snapshot: string;
        destination: string;
    }>;
}
export {};
