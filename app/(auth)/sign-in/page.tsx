import type { Metadata } from 'next';

import { FormFooter } from '../_components';
import { Form } from './_components';

const metadata: Metadata = {
  title: 'Sign in',
};

function Page() {
  return (
    <>
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight">
        Sign in to Signalist
      </h1>
      <Form />
      <FormFooter text="New to Signalist?" linkText="Sign up" href="/sign-up" />
    </>
  );
}

export { Page as default, metadata };
