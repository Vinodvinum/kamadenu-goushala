import { defineCollection, z } from "astro:content";

const imageListSchema = z.array(z.union([z.string(), z.object({ image: z.string() })]));
const featuredBreedsSchema = z.array(z.union([z.string(), z.object({ breed: z.string() })]));
const featuredEventsSchema = z.array(z.union([z.string(), z.object({ event: z.string() })]));

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    cover_image: z.string(),
    description: z.string(),
  }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    cover_image: z.string(),
  }),
});

const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    cover_image: z.string(),
  }),
});

const gallery = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    images: imageListSchema.default([]),
  }),
});

const cows = defineCollection({
  type: "content",
  schema: z.object({
    breed_name: z.string(),
    origin: z.string(),
    characteristics: z.string(),
    milk_quality: z.string(),
    agricultural_use: z.string(),
    hero_image: z.string(),
    gallery_images: imageListSchema.default([]),
  }),
});

const homepage = defineCollection({
  type: "content",
  schema: z.object({
    hero_title: z.string(),
    hero_description: z.string(),
    hero_image: z.string(),
    featured_breeds: featuredBreedsSchema.default([]),
    featured_events: featuredEventsSchema.default([]),
  }),
});

export const collections = {
  events,
  news,
  blogs,
  gallery,
  cows,
  homepage,
};
