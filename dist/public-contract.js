import { z } from 'zod';
import { prepareSchema, operation, nodeSchema } from './schema.js';
// Legacy relations remain readable internally for v0.1 history, not in new write schemas.
const publicOps = operation.options.map(o => {
    const action = o.shape.action.value;
    if (action === 'metadata')
        return o.omit({ relations: true });
    if (action === 'create')
        return o.extend({ node: nodeSchema.omit({ relations: true }) });
    return o;
});
export const publicPrepareSchema = prepareSchema.extend({ operations: z.array(z.discriminatedUnion('action', publicOps)).min(1).max(100) });
export function publicNode(n) {
    if (!n || !n.relations)
        return n;
    const { relations, ...rest } = n;
    return { ...rest, dependencies: relations.filter((r) => ['depends_on', 'implements'].includes(r.type)).map((r) => ({ dependent: n.id, dependency: r.target, relation: r.type, ...(r.target_hash ? { dependency_hash: r.target_hash } : {}), ...(r.section ? { dependency_section: r.section } : {}) })),
        documentation: relations.filter((r) => r.type === 'documents').map((r) => ({ document: n.id, subject: r.target })),
        references: relations.filter((r) => ['references', 'related_to'].includes(r.type)).map((r) => ({ document: n.id, related: r.target, relation: r.type })) };
}
