import { Workspace } from './workspace.js';
import type { Snapshot, Config, Node } from './schema.js';
import { type Manifest } from './manifest.js';
import type { Catalog, Mapping, Analysis, Task } from './catalog-model.js';
export declare class CatalogWorkspace extends Workspace {
    makeCatalog(s: Snapshot, cfg?: Config): Catalog;
    initializeCatalog(s: Snapshot, cfg: Config): Promise<void>;
    requireV2(s: Snapshot): Catalog;
    subject(s: Snapshot, doc: Node): {
        path: string;
        repository: string;
        artifact_id?: string | undefined;
    } | undefined;
    extension(base: string, key: string, request: unknown, mutate: (s: Snapshot, previous: Snapshot) => Promise<unknown>): Promise<any>;
    migrate(a: {
        base_snapshot: string;
        idempotency_key: string;
    }): Promise<any>;
    mappedFile(m: Manifest, mapping: Mapping, nodeId: string): {
        repository: string;
        path: string;
    } | undefined;
    projected(s: Snapshot, analysisIds?: string[]): {
        dependent: string;
        dependency: string;
        relation: string;
        origin: string;
        section?: string;
    }[];
    impact(base: Snapshot, next: Snapshot, seeds: string[], origin: string, original?: Map<string, string>, content?: Map<string, string>): void;
    freshness(s: Snapshot, a: Analysis): Promise<void>;
    enrich(base: Snapshot, next: Snapshot, changed: string[], original?: Map<string, string>, content?: Map<string, string>): Promise<void>;
    importDependencies(a: {
        base_snapshot: string;
        idempotency_key: string;
        manifest: unknown;
        mapping: Mapping;
    }): Promise<any>;
    analyses(snapshot?: string): Promise<{
        snapshot: string;
        analyses: {
            id: string;
            producer: {
                name: string;
                version: string;
                analyzer: string;
            };
            scope: {
                project: string;
                profile: string;
                area: string;
                configuration: Record<string, unknown>;
            };
            coverage: {
                status: "complete" | "partial";
                files: string[];
                relation_types: string[];
                limitations: string[];
            };
            fresh: boolean;
            mismatch: string[];
            report_hash: string;
        }[];
    }>;
    dependencyGraph(snapshot?: string, analysisIds?: string[]): Promise<{
        snapshot: string;
        dependencies: {
            dependent: string;
            dependency: string;
            relation: string;
            origin: string;
            section?: string;
        }[];
        observations: {
            analysis_id: string;
            nodes: ({
                id: string;
                kind: "file";
                path: string;
                source: string;
                content_hash: string;
            } | {
                id: string;
                kind: "symbol";
                file: string;
                name: string;
                attributes: Record<string, unknown>;
                line?: number | undefined;
            } | {
                id: string;
                kind: "external";
                name: string;
                uri?: string | undefined;
            })[];
            dependencies: {
                dependent: string;
                dependency: string;
                relation: string;
                evidence?: {
                    file: string;
                    precision: "symbol" | "file" | "line";
                    line?: number | undefined;
                } | undefined;
                note?: string | undefined;
            }[];
        }[];
        documentation: {
            document: string;
            subject: string;
        }[];
        topology: string;
    }>;
    setRelations(a: {
        base_snapshot: string;
        idempotency_key: string;
        dependent: string;
        dependencies: {
            dependency: string;
            relation: string;
        }[];
    }): Promise<any>;
    afterReviews(s: Snapshot, ids: string[]): Promise<void>;
    documentationLinks(a: {
        base_snapshot: string;
        idempotency_key: string;
        document: string;
        subjects: string[];
    }): Promise<any>;
    registerNode(a: {
        base_snapshot: string;
        idempotency_key: string;
        node: Node;
        expected_hash: string;
    }): Promise<any>;
    coveragePrepare(a: {
        base_snapshot: string;
        idempotency_key: string;
        coverage: NonNullable<Config['coverage']>;
    }): Promise<any>;
    issuePrepare(a: {
        base_snapshot: string;
        idempotency_key: string;
        document: string;
        reason: string;
    }): Promise<any>;
    documentationPlan(options?: {
        snapshot?: string;
        since_snapshot?: string;
        domain?: string;
        action?: string;
        offset?: number;
        limit?: number;
    }): Promise<{
        snapshot: string;
        total: number;
        offset: number;
        items: Task[];
        coverage: {
            files: number;
            covered: number;
            missing: number;
            excluded: any[];
        };
        analysis_mode: string;
    }>;
}
