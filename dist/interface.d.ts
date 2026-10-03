import { z } from 'zod';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { Workspace } from './workspace.js';
export declare const VERSION = "0.2.0";
export declare function definitions(w: Workspace): {
    snapshot_get: {
        description: string;
        schema: z.ZodObject<{
            snapshot: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            snapshot?: string | undefined;
        }, {
            snapshot?: string | undefined;
        }>;
        run: (a: any) => Promise<{
            snapshot: string;
            parent: string | null;
            repositories: Record<string, string>;
            domains: string[];
            nodes: number;
        }>;
    };
    domains_list: {
        description: string;
        schema: z.ZodObject<{
            snapshot: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            snapshot?: string | undefined;
        }, {
            snapshot?: string | undefined;
        }>;
        run: (a: any) => Promise<{
            snapshot: string;
            domains: {
                id: string;
                title: string;
                description: string;
                rules: string;
            }[];
        }>;
    };
    catalog_list: {
        description: string;
        schema: z.ZodObject<{
            snapshot: z.ZodOptional<z.ZodString>;
            domain: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            kind: z.ZodOptional<z.ZodEnum<["artifact", "document"]>>;
            needs_review: z.ZodOptional<z.ZodBoolean>;
            offset: z.ZodDefault<z.ZodNumber>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            limit: number;
            offset: number;
            kind?: "document" | "artifact" | undefined;
            domain?: string | undefined;
            snapshot?: string | undefined;
            needs_review?: boolean | undefined;
        }, {
            kind?: "document" | "artifact" | undefined;
            domain?: string | undefined;
            snapshot?: string | undefined;
            limit?: number | undefined;
            offset?: number | undefined;
            needs_review?: boolean | undefined;
        }>;
        run: (a: any) => Promise<{
            items: any[];
            snapshot: string;
            total: number;
            offset: number;
        }>;
    };
    docs_search: {
        description: string;
        schema: z.ZodObject<{
            snapshot: z.ZodOptional<z.ZodString>;
            offset: z.ZodDefault<z.ZodNumber>;
            limit: z.ZodDefault<z.ZodNumber>;
            query: z.ZodString;
            domain: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strict", z.ZodTypeAny, {
            query: string;
            limit: number;
            offset: number;
            domain?: string | undefined;
            snapshot?: string | undefined;
        }, {
            query: string;
            domain?: string | undefined;
            snapshot?: string | undefined;
            limit?: number | undefined;
            offset?: number | undefined;
        }>;
        run: (a: any) => Promise<{
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
    };
    nodes_get: {
        description: string;
        schema: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, string, string>;
            view: z.ZodDefault<z.ZodEnum<["brief", "summary", "outline", "sections", "full"]>>;
            section_ids: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
            snapshot: z.ZodOptional<z.ZodString>;
            at_hash: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            view: "full" | "brief" | "summary" | "outline" | "sections";
            section_ids: string[];
            snapshot?: string | undefined;
            at_hash?: string | undefined;
        }, {
            id: string;
            snapshot?: string | undefined;
            view?: "full" | "brief" | "summary" | "outline" | "sections" | undefined;
            section_ids?: string[] | undefined;
            at_hash?: string | undefined;
        }>;
        run: (a: any) => Promise<any>;
    };
    graph_query: {
        description: string;
        schema: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, string, string>;
            direction: z.ZodDefault<z.ZodEnum<["dependencies", "dependents"]>>;
            depth: z.ZodDefault<z.ZodNumber>;
            snapshot: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            direction: "dependencies" | "dependents";
            depth: number;
            snapshot?: string | undefined;
        }, {
            id: string;
            snapshot?: string | undefined;
            direction?: "dependencies" | "dependents" | undefined;
            depth?: number | undefined;
        }>;
        run: (a: any) => Promise<{
            snapshot: string;
            domains: string[];
            edges: unknown[];
            truncated: boolean;
        }>;
    };
    nodes_related: {
        description: string;
        schema: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, string, string>;
            limit: z.ZodDefault<z.ZodNumber>;
            snapshot: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            limit: number;
            snapshot?: string | undefined;
        }, {
            id: string;
            snapshot?: string | undefined;
            limit?: number | undefined;
        }>;
        run: (a: any) => Promise<{
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
    };
    files_list: {
        description: string;
        schema: z.ZodObject<{
            snapshot: z.ZodOptional<z.ZodString>;
            offset: z.ZodDefault<z.ZodNumber>;
            limit: z.ZodDefault<z.ZodNumber>;
            repository: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            repository: string;
            limit: number;
            offset: number;
            snapshot?: string | undefined;
        }, {
            repository: string;
            snapshot?: string | undefined;
            limit?: number | undefined;
            offset?: number | undefined;
        }>;
        run: (a: any) => Promise<{
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
    };
    changes_prepare: {
        description: string;
        schema: z.ZodObject<{
            base_snapshot: z.ZodString;
            idempotency_key: z.ZodEffects<z.ZodString, string, string>;
            message: z.ZodString;
        } & {
            operations: z.ZodArray<z.ZodDiscriminatedUnion<"action", any>, "many">;
        }, "strict", z.ZodTypeAny, {
            message: string;
            base_snapshot: string;
            idempotency_key: string;
            operations: any[];
        }, {
            message: string;
            base_snapshot: string;
            idempotency_key: string;
            operations: any[];
        }>;
        run: (a: any) => Promise<{
            id: string;
            request_hash: string;
            base: string;
            status: "preparing" | "prepared" | "applied" | "discarded" | "failed";
            request: import("./schema.js").Prepare;
            candidate?: string;
            result?: string;
            diffs?: unknown[];
            error?: string;
        } | {
            review_required: Record<string, import("./schema.js").Reason[]>;
            id: string;
            request_hash: string;
            base: string;
            status: "preparing" | "prepared" | "applied" | "discarded" | "failed";
            request: import("./schema.js").Prepare;
            candidate?: string;
            result?: string;
            diffs?: unknown[];
            error?: string;
        }>;
    };
    changes_apply: {
        description: string;
        schema: z.ZodObject<{
            change_id: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            change_id: string;
        }, {
            change_id: string;
        }>;
        run: (a: any) => Promise<{
            change_id: string;
            snapshot: string;
            status: "applied";
        }>;
    };
    changes_get: {
        description: string;
        schema: z.ZodObject<{
            change_id: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            change_id: string;
        }, {
            change_id: string;
        }>;
        run: (a: any) => Promise<{
            id: string;
            request_hash: string;
            base: string;
            status: "preparing" | "prepared" | "applied" | "discarded" | "failed";
            request: import("./schema.js").Prepare;
            candidate?: string;
            result?: string;
            diffs?: unknown[];
            error?: string;
        }>;
    };
    changes_discard: {
        description: string;
        schema: z.ZodObject<{
            change_id: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            change_id: string;
        }, {
            change_id: string;
        }>;
        run: (a: any) => Promise<{
            change_id: string;
            status: "discarded";
        }>;
    };
    catalog_validate: {
        description: string;
        schema: z.ZodObject<{
            snapshot: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            snapshot?: string | undefined;
        }, {
            snapshot?: string | undefined;
        }>;
        run: (a: any) => Promise<{
            snapshot: string;
            valid: boolean;
            nodes: number;
            review_required: string[];
        }>;
    };
    sources_status: {
        description: string;
        schema: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
        run: () => Promise<{
            snapshot: string;
            repositories: {
                repository: string;
                source_commit: string;
                snapshot_commit: string;
                differs: boolean;
                changed_since_import: boolean;
            }[];
        }>;
    };
    migration_prepare?: {
        description: string;
        schema: z.ZodObject<{
            base_snapshot: z.ZodString;
            idempotency_key: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            base_snapshot: string;
            idempotency_key: string;
        }, {
            base_snapshot: string;
            idempotency_key: string;
        }>;
        run: (a: any) => Promise<any>;
    } | undefined;
    dependencies_import_prepare?: {
        description: string;
        schema: z.ZodObject<{
            manifest: z.ZodObject<{
                format: z.ZodLiteral<"dependency-manifest">;
                version: z.ZodLiteral<"1.0">;
                producer: z.ZodObject<{
                    name: z.ZodString;
                    version: z.ZodString;
                    analyzer: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    name: string;
                    version: string;
                    analyzer: string;
                }, {
                    name: string;
                    version: string;
                    analyzer: string;
                }>;
                scope: z.ZodObject<{
                    project: z.ZodString;
                    profile: z.ZodString;
                    area: z.ZodString;
                    configuration: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                }, "strict", z.ZodTypeAny, {
                    project: string;
                    profile: string;
                    area: string;
                    configuration: Record<string, unknown>;
                }, {
                    project: string;
                    profile: string;
                    area: string;
                    configuration?: Record<string, unknown> | undefined;
                }>;
                sources: z.ZodArray<z.ZodObject<{
                    id: z.ZodEffects<z.ZodString, string, string>;
                    revision: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    id: string;
                    revision?: string | undefined;
                }, {
                    id: string;
                    revision?: string | undefined;
                }>, "many">;
                nodes: z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                    id: z.ZodString;
                    kind: z.ZodLiteral<"file">;
                    source: z.ZodEffects<z.ZodString, string, string>;
                    path: z.ZodEffects<z.ZodString, string, string>;
                    content_hash: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    id: string;
                    kind: "file";
                    path: string;
                    source: string;
                    content_hash: string;
                }, {
                    id: string;
                    kind: "file";
                    path: string;
                    source: string;
                    content_hash: string;
                }>, z.ZodObject<{
                    id: z.ZodString;
                    kind: z.ZodLiteral<"symbol">;
                    name: z.ZodString;
                    file: z.ZodString;
                    attributes: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    line: z.ZodOptional<z.ZodNumber>;
                }, "strict", z.ZodTypeAny, {
                    id: string;
                    kind: "symbol";
                    file: string;
                    name: string;
                    attributes: Record<string, unknown>;
                    line?: number | undefined;
                }, {
                    id: string;
                    kind: "symbol";
                    file: string;
                    name: string;
                    attributes?: Record<string, unknown> | undefined;
                    line?: number | undefined;
                }>, z.ZodObject<{
                    id: z.ZodString;
                    kind: z.ZodLiteral<"external">;
                    name: z.ZodString;
                    uri: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    id: string;
                    kind: "external";
                    name: string;
                    uri?: string | undefined;
                }, {
                    id: string;
                    kind: "external";
                    name: string;
                    uri?: string | undefined;
                }>]>, "many">;
                edges: z.ZodArray<z.ZodObject<{
                    dependent: z.ZodString;
                    dependency: z.ZodString;
                    relation: z.ZodString;
                    evidence: z.ZodOptional<z.ZodObject<{
                        file: z.ZodString;
                        line: z.ZodOptional<z.ZodNumber>;
                        precision: z.ZodEnum<["file", "symbol", "line"]>;
                    }, "strict", z.ZodTypeAny, {
                        file: string;
                        precision: "symbol" | "file" | "line";
                        line?: number | undefined;
                    }, {
                        file: string;
                        precision: "symbol" | "file" | "line";
                        line?: number | undefined;
                    }>>;
                    note: z.ZodOptional<z.ZodString>;
                }, "strict", z.ZodTypeAny, {
                    dependent: string;
                    dependency: string;
                    relation: string;
                    evidence?: {
                        file: string;
                        precision: "symbol" | "file" | "line";
                        line?: number | undefined;
                    } | undefined;
                    note?: string | undefined;
                }, {
                    dependent: string;
                    dependency: string;
                    relation: string;
                    evidence?: {
                        file: string;
                        precision: "symbol" | "file" | "line";
                        line?: number | undefined;
                    } | undefined;
                    note?: string | undefined;
                }>, "many">;
                coverage: z.ZodObject<{
                    status: z.ZodEnum<["complete", "partial"]>;
                    files: z.ZodArray<z.ZodString, "many">;
                    relation_types: z.ZodArray<z.ZodString, "many">;
                    limitations: z.ZodArray<z.ZodString, "many">;
                }, "strict", z.ZodTypeAny, {
                    status: "complete" | "partial";
                    files: string[];
                    relation_types: string[];
                    limitations: string[];
                }, {
                    status: "complete" | "partial";
                    files: string[];
                    relation_types: string[];
                    limitations: string[];
                }>;
                diagnostics: z.ZodArray<z.ZodObject<{
                    severity: z.ZodEnum<["info", "warning", "error"]>;
                    code: z.ZodString;
                    message: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    severity: "info" | "warning" | "error";
                }, {
                    code: string;
                    message: string;
                    severity: "info" | "warning" | "error";
                }>, "many">;
            }, "strict", z.ZodTypeAny, {
                format: "dependency-manifest";
                version: "1.0";
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
                sources: {
                    id: string;
                    revision?: string | undefined;
                }[];
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
                edges: {
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
                coverage: {
                    status: "complete" | "partial";
                    files: string[];
                    relation_types: string[];
                    limitations: string[];
                };
                diagnostics: {
                    code: string;
                    message: string;
                    severity: "info" | "warning" | "error";
                }[];
            }, {
                format: "dependency-manifest";
                version: "1.0";
                producer: {
                    name: string;
                    version: string;
                    analyzer: string;
                };
                scope: {
                    project: string;
                    profile: string;
                    area: string;
                    configuration?: Record<string, unknown> | undefined;
                };
                sources: {
                    id: string;
                    revision?: string | undefined;
                }[];
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
                    attributes?: Record<string, unknown> | undefined;
                    line?: number | undefined;
                } | {
                    id: string;
                    kind: "external";
                    name: string;
                    uri?: string | undefined;
                })[];
                edges: {
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
                coverage: {
                    status: "complete" | "partial";
                    files: string[];
                    relation_types: string[];
                    limitations: string[];
                };
                diagnostics: {
                    code: string;
                    message: string;
                    severity: "info" | "warning" | "error";
                }[];
            }>;
            mapping: z.ZodRecord<z.ZodEffects<z.ZodString, string, string>, z.ZodObject<{
                repository: z.ZodEffects<z.ZodString, string, string>;
                prefix: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodLiteral<"">]>>;
            }, "strict", z.ZodTypeAny, {
                repository: string;
                prefix: string;
            }, {
                repository: string;
                prefix?: string | undefined;
            }>>;
            base_snapshot: z.ZodString;
            idempotency_key: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            base_snapshot: string;
            idempotency_key: string;
            manifest: {
                format: "dependency-manifest";
                version: "1.0";
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
                sources: {
                    id: string;
                    revision?: string | undefined;
                }[];
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
                edges: {
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
                coverage: {
                    status: "complete" | "partial";
                    files: string[];
                    relation_types: string[];
                    limitations: string[];
                };
                diagnostics: {
                    code: string;
                    message: string;
                    severity: "info" | "warning" | "error";
                }[];
            };
            mapping: Record<string, {
                repository: string;
                prefix: string;
            }>;
        }, {
            base_snapshot: string;
            idempotency_key: string;
            manifest: {
                format: "dependency-manifest";
                version: "1.0";
                producer: {
                    name: string;
                    version: string;
                    analyzer: string;
                };
                scope: {
                    project: string;
                    profile: string;
                    area: string;
                    configuration?: Record<string, unknown> | undefined;
                };
                sources: {
                    id: string;
                    revision?: string | undefined;
                }[];
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
                    attributes?: Record<string, unknown> | undefined;
                    line?: number | undefined;
                } | {
                    id: string;
                    kind: "external";
                    name: string;
                    uri?: string | undefined;
                })[];
                edges: {
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
                coverage: {
                    status: "complete" | "partial";
                    files: string[];
                    relation_types: string[];
                    limitations: string[];
                };
                diagnostics: {
                    code: string;
                    message: string;
                    severity: "info" | "warning" | "error";
                }[];
            };
            mapping: Record<string, {
                repository: string;
                prefix?: string | undefined;
            }>;
        }>;
        run: (a: any) => Promise<any>;
    } | undefined;
    dependencies_sources?: {
        description: string;
        schema: z.ZodObject<{
            snapshot: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            snapshot?: string | undefined;
        }, {
            snapshot?: string | undefined;
        }>;
        run: (a: any) => Promise<{
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
    } | undefined;
    dependencies_graph?: {
        description: string;
        schema: z.ZodObject<{
            snapshot: z.ZodOptional<z.ZodString>;
            analysis_ids: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
        }, "strict", z.ZodTypeAny, {
            snapshot?: string | undefined;
            analysis_ids?: string[] | undefined;
        }, {
            snapshot?: string | undefined;
            analysis_ids?: string[] | undefined;
        }>;
        run: (a: any) => Promise<{
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
    } | undefined;
    dependencies_set_prepare?: {
        description: string;
        schema: z.ZodObject<{
            dependent: z.ZodEffects<z.ZodString, string, string>;
            dependencies: z.ZodArray<z.ZodObject<{
                dependency: z.ZodEffects<z.ZodString, string, string>;
                relation: z.ZodDefault<z.ZodLiteral<"depends_on">>;
            }, "strict", z.ZodTypeAny, {
                dependency: string;
                relation: "depends_on";
            }, {
                dependency: string;
                relation?: "depends_on" | undefined;
            }>, "many">;
            base_snapshot: z.ZodString;
            idempotency_key: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            dependent: string;
            base_snapshot: string;
            idempotency_key: string;
            dependencies: {
                dependency: string;
                relation: "depends_on";
            }[];
        }, {
            dependent: string;
            base_snapshot: string;
            idempotency_key: string;
            dependencies: {
                dependency: string;
                relation?: "depends_on" | undefined;
            }[];
        }>;
        run: (a: any) => Promise<any>;
    } | undefined;
    documentation_links_set_prepare?: {
        description: string;
        schema: z.ZodObject<{
            document: z.ZodEffects<z.ZodString, string, string>;
            subjects: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
            base_snapshot: z.ZodString;
            idempotency_key: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            document: string;
            base_snapshot: string;
            idempotency_key: string;
            subjects: string[];
        }, {
            document: string;
            base_snapshot: string;
            idempotency_key: string;
            subjects: string[];
        }>;
        run: (a: any) => Promise<any>;
    } | undefined;
    nodes_register_prepare?: {
        description: string;
        schema: z.ZodObject<{
            node: z.ZodObject<Omit<{
                id: z.ZodEffects<z.ZodString, string, string>;
                kind: z.ZodEnum<["document", "artifact"]>;
                domain: z.ZodEffects<z.ZodString, string, string>;
                repository: z.ZodEffects<z.ZodString, string, string>;
                path: z.ZodEffects<z.ZodString, string, string>;
                title: z.ZodString;
                description: z.ZodString;
                card: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    subject: z.ZodObject<{
                        repository: z.ZodEffects<z.ZodString, string, string>;
                        path: z.ZodEffects<z.ZodString, string, string>;
                        artifact_id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                    }, "strict", z.ZodTypeAny, {
                        path: string;
                        repository: string;
                        artifact_id?: string | undefined;
                    }, {
                        path: string;
                        repository: string;
                        artifact_id?: string | undefined;
                    }>;
                    mode: z.ZodEnum<["full", "delegated", "minimal"]>;
                    reason: z.ZodOptional<z.ZodString>;
                    references: z.ZodDefault<z.ZodArray<z.ZodObject<{
                        document: z.ZodEffects<z.ZodString, string, string>;
                        section: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                    }, "strict", z.ZodTypeAny, {
                        document: string;
                        section?: string | undefined;
                    }, {
                        document: string;
                        section?: string | undefined;
                    }>, "many">>;
                }, "strict", z.ZodTypeAny, {
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
                }, {
                    subject: {
                        path: string;
                        repository: string;
                        artifact_id?: string | undefined;
                    };
                    mode: "full" | "delegated" | "minimal";
                    reason?: string | undefined;
                    references?: {
                        document: string;
                        section?: string | undefined;
                    }[] | undefined;
                }>>>;
                version: z.ZodOptional<z.ZodString>;
                relations: z.ZodDefault<z.ZodArray<z.ZodObject<{
                    type: z.ZodEnum<["depends_on", "documents", "implements", "references", "related_to"]>;
                    target: z.ZodEffects<z.ZodString, string, string>;
                    target_hash: z.ZodOptional<z.ZodString>;
                    section: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                    source_section: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
                }, "strict", z.ZodTypeAny, {
                    type: "references" | "depends_on" | "documents" | "implements" | "related_to";
                    target: string;
                    section?: string | undefined;
                    target_hash?: string | undefined;
                    source_section?: string | undefined;
                }, {
                    type: "references" | "depends_on" | "documents" | "implements" | "related_to";
                    target: string;
                    section?: string | undefined;
                    target_hash?: string | undefined;
                    source_section?: string | undefined;
                }>, "many">>;
            }, "relations">, "strict", z.ZodTypeAny, {
                id: string;
                kind: "document" | "artifact";
                path: string;
                title: string;
                description: string;
                domain: string;
                repository: string;
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
            }, {
                id: string;
                kind: "document" | "artifact";
                path: string;
                title: string;
                description: string;
                domain: string;
                repository: string;
                version?: string | undefined;
                card?: {
                    subject: {
                        path: string;
                        repository: string;
                        artifact_id?: string | undefined;
                    };
                    mode: "full" | "delegated" | "minimal";
                    reason?: string | undefined;
                    references?: {
                        document: string;
                        section?: string | undefined;
                    }[] | undefined;
                } | null | undefined;
            }>;
            expected_hash: z.ZodString;
            base_snapshot: z.ZodString;
            idempotency_key: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            expected_hash: string;
            node: {
                id: string;
                kind: "document" | "artifact";
                path: string;
                title: string;
                description: string;
                domain: string;
                repository: string;
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
            };
            base_snapshot: string;
            idempotency_key: string;
        }, {
            expected_hash: string;
            node: {
                id: string;
                kind: "document" | "artifact";
                path: string;
                title: string;
                description: string;
                domain: string;
                repository: string;
                version?: string | undefined;
                card?: {
                    subject: {
                        path: string;
                        repository: string;
                        artifact_id?: string | undefined;
                    };
                    mode: "full" | "delegated" | "minimal";
                    reason?: string | undefined;
                    references?: {
                        document: string;
                        section?: string | undefined;
                    }[] | undefined;
                } | null | undefined;
            };
            base_snapshot: string;
            idempotency_key: string;
        }>;
        run: (a: any) => Promise<any>;
    } | undefined;
    coverage_set_prepare?: {
        description: string;
        schema: z.ZodObject<{
            coverage: z.ZodArray<z.ZodObject<{
                repository: z.ZodEffects<z.ZodString, string, string>;
                prefix: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodLiteral<"">]>>;
                domain: z.ZodEffects<z.ZodString, string, string>;
                exclusions: z.ZodDefault<z.ZodArray<z.ZodObject<{
                    prefix: z.ZodEffects<z.ZodString, string, string>;
                    reason: z.ZodString;
                }, "strict", z.ZodTypeAny, {
                    reason: string;
                    prefix: string;
                }, {
                    reason: string;
                    prefix: string;
                }>, "many">>;
            }, "strict", z.ZodTypeAny, {
                domain: string;
                repository: string;
                prefix: string;
                exclusions: {
                    reason: string;
                    prefix: string;
                }[];
            }, {
                domain: string;
                repository: string;
                prefix?: string | undefined;
                exclusions?: {
                    reason: string;
                    prefix: string;
                }[] | undefined;
            }>, "many">;
            base_snapshot: z.ZodString;
            idempotency_key: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            coverage: {
                domain: string;
                repository: string;
                prefix: string;
                exclusions: {
                    reason: string;
                    prefix: string;
                }[];
            }[];
            base_snapshot: string;
            idempotency_key: string;
        }, {
            coverage: {
                domain: string;
                repository: string;
                prefix?: string | undefined;
                exclusions?: {
                    reason: string;
                    prefix: string;
                }[] | undefined;
            }[];
            base_snapshot: string;
            idempotency_key: string;
        }>;
        run: (a: any) => Promise<any>;
    } | undefined;
    documentation_issue_prepare?: {
        description: string;
        schema: z.ZodObject<{
            document: z.ZodEffects<z.ZodString, string, string>;
            reason: z.ZodString;
            base_snapshot: z.ZodString;
            idempotency_key: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            document: string;
            reason: string;
            base_snapshot: string;
            idempotency_key: string;
        }, {
            document: string;
            reason: string;
            base_snapshot: string;
            idempotency_key: string;
        }>;
        run: (a: any) => Promise<any>;
    } | undefined;
    documentation_plan?: {
        description: string;
        schema: z.ZodObject<{
            snapshot: z.ZodOptional<z.ZodString>;
            since_snapshot: z.ZodOptional<z.ZodString>;
            domain: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            action: z.ZodOptional<z.ZodEnum<["create_card", "complete_card", "review", "update", "repair_reference", "retire", "refresh_analysis", "resolve_mapping"]>>;
            offset: z.ZodDefault<z.ZodNumber>;
            limit: z.ZodDefault<z.ZodNumber>;
        }, "strict", z.ZodTypeAny, {
            limit: number;
            offset: number;
            domain?: string | undefined;
            action?: "review" | "repair_reference" | "retire" | "update" | "resolve_mapping" | "create_card" | "complete_card" | "refresh_analysis" | undefined;
            snapshot?: string | undefined;
            since_snapshot?: string | undefined;
        }, {
            domain?: string | undefined;
            action?: "review" | "repair_reference" | "retire" | "update" | "resolve_mapping" | "create_card" | "complete_card" | "refresh_analysis" | undefined;
            snapshot?: string | undefined;
            limit?: number | undefined;
            since_snapshot?: string | undefined;
            offset?: number | undefined;
        }>;
        run: (a: any) => Promise<{
            snapshot: string;
            total: number;
            offset: number;
            items: import("./catalog-model.js").Task[];
            coverage: {
                files: number;
                covered: number;
                missing: number;
                excluded: any[];
            };
            analysis_mode: string;
        }>;
    } | undefined;
    documentation_coverage?: {
        description: string;
        schema: z.ZodObject<{
            snapshot: z.ZodOptional<z.ZodString>;
            domain: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strict", z.ZodTypeAny, {
            domain?: string | undefined;
            snapshot?: string | undefined;
        }, {
            domain?: string | undefined;
            snapshot?: string | undefined;
        }>;
        run: (a: any) => Promise<{
            files: number;
            covered: number;
            missing: number;
            excluded: any[];
            snapshot: string;
        }>;
    } | undefined;
};
export declare function invoke(w: Workspace, name: string, args: unknown): Promise<any>;
export declare function server(w: Workspace): McpServer;
