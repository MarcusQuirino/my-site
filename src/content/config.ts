import { defineCollection, z } from 'astro:content';

const values = ["typescript", "javascript", "react", "next", "astro", "node", "rust","python", "docker", "aws"] as const;

export const tags = z.enum(values);

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		author: z.string().default('Marcus FIlipus'),
		title: z.string(),
		description: z.string(),
		highligth: z.boolean().default(false),
		tags: z.array(tags).optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});

const assets = defineCollection({
	schema: z.object({
		title: z.string(),
		text: z.string(),
	}),
});

export const collections = { blog, assets };
