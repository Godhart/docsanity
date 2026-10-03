import { z } from 'zod';
export declare const manifestSchema: z.ZodObject<{
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
export type Manifest = z.infer<typeof manifestSchema>;
export declare function validateManifest(value: unknown): Manifest;
