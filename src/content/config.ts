import { defineCollection, z } from 'astro:content';

const tagValues = ["typescript", "javascript", "react", "next", "astro", "node", "rust","python", "docker", "aws", "html", "css", "dev", "life", "misc"] as const;
const categoryTypes = ["hardware", "software"] as const;

const tags = z.enum(tagValues);
const category = z.enum(categoryTypes);

export type Tags = z.infer<typeof tags>
export type Category = z.infer<typeof category>

const blog = defineCollection({
	schema: z.object({
		author: z.string().default('Marcus Filipus'),
		title: z.string(),
		description: z.string(),
		highligth: z.boolean().default(false),
		tags: z.array(tags).nonempty({
			message: "Can't be empty!: Needs tags for blog post",
		  }),
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

const reviews = defineCollection({
	schema: z.object({
		name: z.string(),
		image: z.string(),
		afiliateLink: z.string(),
		using: z.boolean().default(true),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		category: category,
	}),
});

export const collections = { blog, reviews };
