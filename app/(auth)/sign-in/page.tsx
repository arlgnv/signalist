import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { TypographyH1 } from '@/components/ui/typography';

import { FormFooter } from '../_components';
import { Form } from './_components';

export const metadata: Metadata = {
  title: 'Sign in',
};

async function Page() {
  const t = await getTranslations('pages.signIn');

  return (
    <>
      <TypographyH1 className="mb-10">{t('title')}</TypographyH1>
      <Form />
      <FormFooter
        text={t('formFooter.text')}
        linkText={t('formFooter.linkText')}
        href="/sign-up"
      />
    </>
  );
}

export default Page;
