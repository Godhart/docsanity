import { z } from 'zod';
export declare const id: z.ZodEffects<z.ZodString, string, string>;
export declare const revision: z.ZodString;
export declare const hash: z.ZodString;
export declare const relativePath: z.ZodEffects<z.ZodString, string, string>;
export declare const relation: z.ZodObject<{
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
}>;
export declare const cardSchema: z.ZodObject<{
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
}>;
export declare const coverageSchema: z.ZodArray<z.ZodObject<{
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
export declare const nodeSchema: z.ZodObject<{
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
}, "strict", z.ZodTypeAny, {
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
    relations?: {
        type: "references" | "depends_on" | "documents" | "implements" | "related_to";
        target: string;
        section?: string | undefined;
        target_hash?: string | undefined;
        source_section?: string | undefined;
    }[] | undefined;
}>;
export declare const configSchema: z.ZodObject<{
    schema_version: z.ZodLiteral<1>;
    repositories: z.ZodRecord<z.ZodEffects<z.ZodString, string, string>, z.ZodObject<{
        path: z.ZodString;
        ref: z.ZodDefault<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        path: string;
        ref: string;
    }, {
        path: string;
        ref?: string | undefined;
    }>>;
    domains: z.ZodArray<z.ZodObject<{
        id: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodString;
        description: z.ZodString;
        rules: z.ZodDefault<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        title: string;
        description: string;
        rules: string;
    }, {
        id: string;
        title: string;
        description: string;
        rules?: string | undefined;
    }>, "many">;
    nodes: z.ZodArray<z.ZodObject<{
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
    }, "strict", z.ZodTypeAny, {
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
        relations?: {
            type: "references" | "depends_on" | "documents" | "implements" | "related_to";
            target: string;
            section?: string | undefined;
            target_hash?: string | undefined;
            source_section?: string | undefined;
        }[] | undefined;
    }>, "many">;
    coverage: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    nodes: {
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
    schema_version: 1;
    repositories: Record<string, {
        path: string;
        ref: string;
    }>;
    domains: {
        id: string;
        title: string;
        description: string;
        rules: string;
    }[];
    coverage?: {
        domain: string;
        repository: string;
        prefix: string;
        exclusions: {
            reason: string;
            prefix: string;
        }[];
    }[] | undefined;
}, {
    nodes: {
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
        relations?: {
            type: "references" | "depends_on" | "documents" | "implements" | "related_to";
            target: string;
            section?: string | undefined;
            target_hash?: string | undefined;
            source_section?: string | undefined;
        }[] | undefined;
    }[];
    schema_version: 1;
    repositories: Record<string, {
        path: string;
        ref?: string | undefined;
    }>;
    domains: {
        id: string;
        title: string;
        description: string;
        rules?: string | undefined;
    }[];
    coverage?: {
        domain: string;
        repository: string;
        prefix?: string | undefined;
        exclusions?: {
            reason: string;
            prefix: string;
        }[] | undefined;
    }[] | undefined;
}>;
export declare const operation: z.ZodDiscriminatedUnion<"action", [z.ZodObject<{
    action: z.ZodLiteral<"replace">;
    id: z.ZodEffects<z.ZodString, string, string>;
    expected_hash: z.ZodString;
    content: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    action: "replace";
    expected_hash: string;
    content: string;
}, {
    id: string;
    action: "replace";
    expected_hash: string;
    content: string;
}>, z.ZodObject<{
    action: z.ZodLiteral<"patch">;
    id: z.ZodEffects<z.ZodString, string, string>;
    expected_hash: z.ZodString;
    patch: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    action: "patch";
    expected_hash: string;
    patch: string;
}, {
    id: string;
    action: "patch";
    expected_hash: string;
    patch: string;
}>, z.ZodObject<{
    action: z.ZodLiteral<"replace_section">;
    id: z.ZodEffects<z.ZodString, string, string>;
    expected_hash: z.ZodString;
    section_id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    action: "replace_section";
    expected_hash: string;
    content: string;
    section_id: string;
}, {
    id: string;
    action: "replace_section";
    expected_hash: string;
    content: string;
    section_id: string;
}>, z.ZodObject<{
    action: z.ZodLiteral<"create">;
    node: z.ZodObject<{
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
    }, "strict", z.ZodTypeAny, {
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
        relations?: {
            type: "references" | "depends_on" | "documents" | "implements" | "related_to";
            target: string;
            section?: string | undefined;
            target_hash?: string | undefined;
            source_section?: string | undefined;
        }[] | undefined;
    }>;
    content: z.ZodString;
}, "strict", z.ZodTypeAny, {
    action: "create";
    content: string;
    node: {
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
    };
}, {
    action: "create";
    content: string;
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
        relations?: {
            type: "references" | "depends_on" | "documents" | "implements" | "related_to";
            target: string;
            section?: string | undefined;
            target_hash?: string | undefined;
            source_section?: string | undefined;
        }[] | undefined;
    };
}>, z.ZodObject<{
    action: z.ZodLiteral<"move">;
    id: z.ZodEffects<z.ZodString, string, string>;
    expected_hash: z.ZodString;
    path: z.ZodEffects<z.ZodString, string, string>;
}, "strict", z.ZodTypeAny, {
    id: string;
    path: string;
    action: "move";
    expected_hash: string;
}, {
    id: string;
    path: string;
    action: "move";
    expected_hash: string;
}>, z.ZodObject<{
    action: z.ZodLiteral<"delete">;
    id: z.ZodEffects<z.ZodString, string, string>;
    expected_hash: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    action: "delete";
    expected_hash: string;
}, {
    id: string;
    action: "delete";
    expected_hash: string;
}>, z.ZodObject<{
    action: z.ZodLiteral<"metadata">;
    id: z.ZodEffects<z.ZodString, string, string>;
    expected_hash: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
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
    relations: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
}, "strict", z.ZodTypeAny, {
    id: string;
    action: "metadata";
    expected_hash: string;
    version?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
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
    relations?: {
        type: "references" | "depends_on" | "documents" | "implements" | "related_to";
        target: string;
        section?: string | undefined;
        target_hash?: string | undefined;
        source_section?: string | undefined;
    }[] | undefined;
}, {
    id: string;
    action: "metadata";
    expected_hash: string;
    version?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
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
    relations?: {
        type: "references" | "depends_on" | "documents" | "implements" | "related_to";
        target: string;
        section?: string | undefined;
        target_hash?: string | undefined;
        source_section?: string | undefined;
    }[] | undefined;
}>, z.ZodObject<{
    action: z.ZodLiteral<"review">;
    id: z.ZodEffects<z.ZodString, string, string>;
    expected_hash: z.ZodString;
    reason_ids: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    evidence: z.ZodString;
    actor: z.ZodString;
}, "strict", z.ZodTypeAny, {
    id: string;
    evidence: string;
    action: "review";
    expected_hash: string;
    reason_ids: string[];
    actor: string;
}, {
    id: string;
    evidence: string;
    action: "review";
    expected_hash: string;
    reason_ids: string[];
    actor: string;
}>]>;
export declare const prepareSchema: z.ZodObject<{
    base_snapshot: z.ZodString;
    idempotency_key: z.ZodEffects<z.ZodString, string, string>;
    message: z.ZodString;
    operations: z.ZodArray<z.ZodDiscriminatedUnion<"action", [z.ZodObject<{
        action: z.ZodLiteral<"replace">;
        id: z.ZodEffects<z.ZodString, string, string>;
        expected_hash: z.ZodString;
        content: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
        action: "replace";
        expected_hash: string;
        content: string;
    }, {
        id: string;
        action: "replace";
        expected_hash: string;
        content: string;
    }>, z.ZodObject<{
        action: z.ZodLiteral<"patch">;
        id: z.ZodEffects<z.ZodString, string, string>;
        expected_hash: z.ZodString;
        patch: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
        action: "patch";
        expected_hash: string;
        patch: string;
    }, {
        id: string;
        action: "patch";
        expected_hash: string;
        patch: string;
    }>, z.ZodObject<{
        action: z.ZodLiteral<"replace_section">;
        id: z.ZodEffects<z.ZodString, string, string>;
        expected_hash: z.ZodString;
        section_id: z.ZodEffects<z.ZodString, string, string>;
        content: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
        action: "replace_section";
        expected_hash: string;
        content: string;
        section_id: string;
    }, {
        id: string;
        action: "replace_section";
        expected_hash: string;
        content: string;
        section_id: string;
    }>, z.ZodObject<{
        action: z.ZodLiteral<"create">;
        node: z.ZodObject<{
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
        }, "strict", z.ZodTypeAny, {
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
            relations?: {
                type: "references" | "depends_on" | "documents" | "implements" | "related_to";
                target: string;
                section?: string | undefined;
                target_hash?: string | undefined;
                source_section?: string | undefined;
            }[] | undefined;
        }>;
        content: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        action: "create";
        content: string;
        node: {
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
        };
    }, {
        action: "create";
        content: string;
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
            relations?: {
                type: "references" | "depends_on" | "documents" | "implements" | "related_to";
                target: string;
                section?: string | undefined;
                target_hash?: string | undefined;
                source_section?: string | undefined;
            }[] | undefined;
        };
    }>, z.ZodObject<{
        action: z.ZodLiteral<"move">;
        id: z.ZodEffects<z.ZodString, string, string>;
        expected_hash: z.ZodString;
        path: z.ZodEffects<z.ZodString, string, string>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        path: string;
        action: "move";
        expected_hash: string;
    }, {
        id: string;
        path: string;
        action: "move";
        expected_hash: string;
    }>, z.ZodObject<{
        action: z.ZodLiteral<"delete">;
        id: z.ZodEffects<z.ZodString, string, string>;
        expected_hash: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
        action: "delete";
        expected_hash: string;
    }, {
        id: string;
        action: "delete";
        expected_hash: string;
    }>, z.ZodObject<{
        action: z.ZodLiteral<"metadata">;
        id: z.ZodEffects<z.ZodString, string, string>;
        expected_hash: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
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
        relations: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }, "strict", z.ZodTypeAny, {
        id: string;
        action: "metadata";
        expected_hash: string;
        version?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
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
        relations?: {
            type: "references" | "depends_on" | "documents" | "implements" | "related_to";
            target: string;
            section?: string | undefined;
            target_hash?: string | undefined;
            source_section?: string | undefined;
        }[] | undefined;
    }, {
        id: string;
        action: "metadata";
        expected_hash: string;
        version?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
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
        relations?: {
            type: "references" | "depends_on" | "documents" | "implements" | "related_to";
            target: string;
            section?: string | undefined;
            target_hash?: string | undefined;
            source_section?: string | undefined;
        }[] | undefined;
    }>, z.ZodObject<{
        action: z.ZodLiteral<"review">;
        id: z.ZodEffects<z.ZodString, string, string>;
        expected_hash: z.ZodString;
        reason_ids: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        evidence: z.ZodString;
        actor: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
        evidence: string;
        action: "review";
        expected_hash: string;
        reason_ids: string[];
        actor: string;
    }, {
        id: string;
        evidence: string;
        action: "review";
        expected_hash: string;
        reason_ids: string[];
        actor: string;
    }>]>, "many">;
}, "strict", z.ZodTypeAny, {
    message: string;
    base_snapshot: string;
    idempotency_key: string;
    operations: ({
        id: string;
        action: "replace";
        expected_hash: string;
        content: string;
    } | {
        id: string;
        action: "patch";
        expected_hash: string;
        patch: string;
    } | {
        id: string;
        action: "replace_section";
        expected_hash: string;
        content: string;
        section_id: string;
    } | {
        action: "create";
        content: string;
        node: {
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
        };
    } | {
        id: string;
        path: string;
        action: "move";
        expected_hash: string;
    } | {
        id: string;
        action: "delete";
        expected_hash: string;
    } | {
        id: string;
        action: "metadata";
        expected_hash: string;
        version?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
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
        relations?: {
            type: "references" | "depends_on" | "documents" | "implements" | "related_to";
            target: string;
            section?: string | undefined;
            target_hash?: string | undefined;
            source_section?: string | undefined;
        }[] | undefined;
    } | {
        id: string;
        evidence: string;
        action: "review";
        expected_hash: string;
        reason_ids: string[];
        actor: string;
    })[];
}, {
    message: string;
    base_snapshot: string;
    idempotency_key: string;
    operations: ({
        id: string;
        action: "replace";
        expected_hash: string;
        content: string;
    } | {
        id: string;
        action: "patch";
        expected_hash: string;
        patch: string;
    } | {
        id: string;
        action: "replace_section";
        expected_hash: string;
        content: string;
        section_id: string;
    } | {
        action: "create";
        content: string;
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
            relations?: {
                type: "references" | "depends_on" | "documents" | "implements" | "related_to";
                target: string;
                section?: string | undefined;
                target_hash?: string | undefined;
                source_section?: string | undefined;
            }[] | undefined;
        };
    } | {
        id: string;
        path: string;
        action: "move";
        expected_hash: string;
    } | {
        id: string;
        action: "delete";
        expected_hash: string;
    } | {
        id: string;
        action: "metadata";
        expected_hash: string;
        version?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
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
        relations?: {
            type: "references" | "depends_on" | "documents" | "implements" | "related_to";
            target: string;
            section?: string | undefined;
            target_hash?: string | undefined;
            source_section?: string | undefined;
        }[] | undefined;
    } | {
        id: string;
        evidence: string;
        action: "review";
        expected_hash: string;
        reason_ids: string[];
        actor: string;
    })[];
}>;
export type Node = z.infer<typeof nodeSchema>;
export type Config = z.infer<typeof configSchema>;
export type Prepare = z.infer<typeof prepareSchema>;
export type Reason = {
    id: string;
    source: string;
    before: string | null;
    after: string | null;
    via: string[];
    change: string;
};
export type Review = {
    target: string;
    reason_ids: string[];
    evidence: string;
    actor: string;
    at: string;
    change: string;
};
export type Snapshot = {
    catalog?: import("./catalog-model.js").Catalog;
    schema_version: 1;
    parent: string | null;
    change_id: string;
    created_at: string;
    repositories: Record<string, string>;
    domains: Config['domains'];
    nodes: Node[];
    hashes: Record<string, string>;
    reviews: Record<string, Reason[]>;
    review_history: Review[];
    based_on: Record<string, Record<string, string>>;
};
