import { z, defineCollection } from "astro:content";

const messages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.object({
      focalLength: z.number(),
      aperture: z.number(),
      shutterSpeed: z.string(),
      type: z.enum(["portrait", "landscape", "large"]),
    }),
    order: z.number(),
  }),
});

export const collections = {
  messages,
};
