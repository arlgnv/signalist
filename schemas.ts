import * as z from 'zod';

export const MarketNewsSchema = z.object({
  category: z.string(),
  datetime: z.int().positive(),
  headline: z.string(),
  id: z.int().positive(),
  image: z.url(),
  related: z.string(),
  source: z.string(),
  summary: z.string(),
  url: z.url(),
});
