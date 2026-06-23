import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import { z } from "zod";
import { remarkCodeMeta } from "./src/lib/remark-code-meta";

const projects = defineCollection({
  name: "projects",
  // specify where all the MDX files are
  directory: "src/content/projects",
  include: "**/*.mdx",
  schema: z.object({
    active: z.boolean(),
    title: z.string(),
    slug: z.string(),
    index: z.number(),
    projectType: z.string().optional(),
    role: z.string().optional(),
    company: z.string().optional(),
    projectHighlight: z.array(z.string()),
    images: z.array(z.string()).optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, remarkCodeMeta],
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [projects],
});
