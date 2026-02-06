import * as z from 'zod';

import type { InvestmentGoal, PreferredIndustry, RiskTolerance } from '@/types';

const validationSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .min(2, 'Full name is too short')
    .max(100, 'Full name is too long'),
  email: z.email({
    error({ input }) {
      return `Email is ${input === '' ? 'required' : 'invalid'}`;
    },
  }),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password is too short')
    .max(128, 'Password is too long'),
  country: z.string().min(1, 'Country is required'),
  investmentGoal: z
    .string()
    .min(1, 'Investment goal is required')
    .refine(
      (val): val is InvestmentGoal =>
        ['growth', 'income', 'balanced', 'aggressive', 'conservative'].includes(
          val,
        ),
      {
        error: 'Invalid investment goal',
      },
    ),
  riskTolerance: z
    .string()
    .min(1, 'Risk tolerance is required')
    .refine(
      (val): val is RiskTolerance => ['low', 'medium', 'high'].includes(val),
      {
        error: 'Invalid risk tolerance',
      },
    ),
  preferredIndustry: z
    .string()
    .min(1, 'Preferred industry is required')
    .refine(
      (val): val is PreferredIndustry =>
        [
          'technology',
          'healthcare',
          'finance',
          'energy',
          'consumer goods',
        ].includes(val),
      {
        error: 'Invalid preferred industry',
      },
    ),
  receiveDailyMarketNews: z.boolean(),
});

export default validationSchema;
