import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Use the file path (without .md) as the id, e.g. "about" or "projects/index".
const idFromPath = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

// Home, About, AI, and the Projects intro page.
const pages = defineCollection({
  loader: glob({ pattern: ['*.md', 'projects/index.md'], base: './src/content', generateId: idFromPath }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

// One file per project write-up.
const projects = defineCollection({
  loader: glob({ pattern: ['*.md', '!index.md'], base: './src/content/projects', generateId: idFromPath }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    result: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { pages, projects };
