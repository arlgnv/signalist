import type { Metadata } from 'next';

import { TypographyH1 } from '@/components/ui/typography';

import { FormFooter } from '../_components';
import { Form } from './_components';

export const metadata: Metadata = {
  title: 'Sign in',
};

function Page() {
  return (
    <>
      <TypographyH1 className="mb-10">Sign in to Signalist</TypographyH1>
      <Form />
      <FormFooter text="New to Signalist?" linkText="Sign up" href="/sign-up" />
    </>
  );
}

export default Page;
