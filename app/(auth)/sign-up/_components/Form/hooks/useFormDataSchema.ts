import { useTranslations } from 'next-intl';
import * as z from 'zod';

import type { InvestmentGoal, PreferredIndustry, RiskTolerance } from '@/types';

function useFormDataSchema() {
  const t = useTranslations('pages.signUp.form');

  return z.object({
    fullName: z
      .string()
      .min(1, t('fullName.errors.required'))
      .min(2, t('fullName.errors.tooShort'))
      .max(100, t('fullName.errors.tooLong')),
    email: z.email({
      error({ input }) {
        return input === ''
          ? t('email.errors.required')
          : t('email.errors.invalid');
      },
    }),
    password: z
      .string()
      .min(1, t('password.errors.required'))
      .min(8, t('password.errors.tooShort'))
      .max(128, t('password.errors.tooLong')),
    country: z.string().min(1, t('country.errors.required')),
    investmentGoal: z
      .string()
      .min(1, t('investmentGoal.errors.required'))
      .refine(
        (val): val is InvestmentGoal =>
          ['growth', 'income', 'balanced', 'conservative'].includes(val),
        {
          error: t('investmentGoal.errors.invalid'),
        },
      ),
    riskTolerance: z
      .string()
      .min(1, t('riskTolerance.errors.required'))
      .refine(
        (val): val is RiskTolerance => ['low', 'medium', 'high'].includes(val),
        {
          error: t('riskTolerance.errors.invalid'),
        },
      ),
    preferredIndustry: z
      .string()
      .min(1, t('preferredIndustry.errors.required'))
      .refine(
        (val): val is PreferredIndustry =>
          [
            'technology',
            'healthcare',
            'finance',
            'energy',
            'consumerGoods',
          ].includes(val),
        {
          error: t('preferredIndustry.errors.invalid'),
        },
      ),
    receiveDailyMarketNews: z.boolean(),
  });
}

export default useFormDataSchema;
