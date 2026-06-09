import { useTranslations } from 'next-intl';

function useInvestmentGoals() {
  const t = useTranslations('pages.signUp.form.investmentGoal.options');

  return [
    { label: t('growth.label'), value: 'growth' },
    { label: t('income.label'), value: 'income' },
    { label: t('balanced.label'), value: 'balanced' },
    { label: t('conservative.label'), value: 'conservative' },
  ];
}

export default useInvestmentGoals;
