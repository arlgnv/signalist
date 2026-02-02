import type { Metadata } from 'next';

import { FormFooter } from '../_components';
import { Form } from './_components';

const metadata: Metadata = {
  title: 'Sign up',
};

function Page() {
  return (
    <>
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight">
        Sign up for Signalist
      </h1>
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
