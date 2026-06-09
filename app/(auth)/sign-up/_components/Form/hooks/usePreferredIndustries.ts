import { useTranslations } from 'next-intl';

function usePreferredIndustries() {
  const t = useTranslations('pages.signUp.form.preferredIndustry.options');

  return [
    { label: t('technology.label'), value: 'technology' },
    { label: t('healthcare.label'), value: 'healthcare' },
    { label: t('finance.label'), value: 'finance' },
    { label: t('energy.label'), value: 'energy' },
    { label: t('consumerGoods.label'), value: 'consumerGoods' },
  ];
}

export default usePreferredIndustries;
