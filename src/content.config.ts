import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog collection (Astro 5 glob loader). Posts live in src/content/blog/*.md.
// Frontmatter is validated against this schema at build time.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Short label shown on cards, e.g. "Privacy", "Guides", "Comparisons".
    category: z.string().default('Guides'),
    // Optional author name; defaults to the studio.
    author: z.string().default('Wallco Digital Labs'),
    // Set true to keep a post out of the listing/sitemap while drafting.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
