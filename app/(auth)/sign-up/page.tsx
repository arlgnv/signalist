import type { Metadata } from 'next';

import { TypographyH1 } from '@/components/ui/typography';

import { FormFooter } from '../_components';
import { Form } from './_components';

const metadata: Metadata = {
  title: 'Sign up',
};

function Page() {
  return (
    <>
      <TypographyH1 className="mb-10">Sign up for Signalist</TypographyH1>
      <Form />
      <FormFooter
        text="Already have an account?"
        linkText="Sign in"
        href="/sign-in"
      />
    </>
  );
}

export { Page as default, metadata };
