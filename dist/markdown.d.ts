export type Section = {
    id: string | null;
    title: string;
    level: number;
    start: number;
    body_start: number;
    end: number;
};
export declare function sections(text: string): Section[];
export declare function frontmatter(text: string): {
    metadata: Record<string, unknown>;
    body: string;
    prefix: string;
};
export declare function replaceSection(text: string, sectionId: string, content: string): string;
export declare function validateDocument(text: string): void;
