import { ObsidianMdLoader, type ObsidianMdLoaderOptions } from "astro-loader-obsidian";
import { defineCollection } from "astro:content";
import type { Loader } from "astro/loaders";
import { z, type ZodType } from "astro/zod";

const loadObsidianMarkdown = (opts: ObsidianMdLoaderOptions): Loader => {
  const { schema, ...loader } = ObsidianMdLoader(opts) as Loader & {
    schema: () => Promise<ZodType>;
  };
  return {
    ...loader,
    createSchema: async () => ({
      schema: await schema(),
      types: "export type Entry = any;",
    }),
  };
};

const wikipages = defineCollection({
  loader: loadObsidianMarkdown({
    base: "src/content",
    url: "",
    pattern: ["**/*.{md,mdx}", "!**/_templates/**"],
    brokenLinksStrategy: "label",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()).optional().default([]),
      cover: image().optional().nullable(),
    }),
});

export const collections = { wikipages };
