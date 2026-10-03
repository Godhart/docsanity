import { z } from 'zod';
export declare const publicPrepareSchema: z.ZodObject<{
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
export declare function publicNode(n: any): any;
