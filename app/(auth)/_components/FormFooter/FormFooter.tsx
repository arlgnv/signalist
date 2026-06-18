import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import type { Props } from './types';

function FormFooter({ text, linkText, href }: Props) {
  return (
    <p className="mt-5 text-center text-sm text-muted-foreground">
      {text}{' '}
      <Link
        className={cn(
          buttonVariants({
            className: 'h-auto p-0',
            variant: 'link',
          }),
        )}
        href={href}
      >
        {linkText}
      </Link>
    </p>
  );
}

export default FormFooter;
