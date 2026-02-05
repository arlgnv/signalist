import Link from 'next/link';

import { Button } from '@/components/ui/button';

import type { Props } from './types';

function FormFooter({ text, linkText, href }: Props) {
  return (
    <p className="mt-5 text-center text-sm text-muted-foreground">
      {text}{' '}
      <Button
        className="h-auto p-0"
        variant="link"
        nativeButton={false}
        render={<Link href={href}>{linkText}</Link>}
      />
    </p>
  );
}

export default FormFooter;
