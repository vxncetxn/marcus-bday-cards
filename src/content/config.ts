import { z, defineCollection } from "astro:content";

const messages = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    title: z.string(),
    image: z.object({
      path: z.string(),
      properties: z.object({
        focalLength: z.number(),
        aperture: z.number(),
        shutterSpeed: z.string(),
      }),
    }),
  }),
});

export const collections = {
  messages,
};
