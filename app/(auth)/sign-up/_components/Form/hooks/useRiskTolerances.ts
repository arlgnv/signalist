import { useTranslations } from 'next-intl';

function useRiskTolerances() {
  const t = useTranslations('pages.signUp.form.riskTolerance.options');

  return [
    { label: t('low.label'), value: 'low' },
    { label: t('medium.label'), value: 'medium' },
    { label: t('high.label'), value: 'high' },
  ];
}

export default useRiskTolerances;
