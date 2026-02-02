import { cn } from '@/lib/utils';

function TypographyH1({ className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn('text-4xl font-extrabold tracking-tight', className)}
      {...props}
    />
  );
}

function TypographyH2({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn('text-3xl font-semibold tracking-tight', className)}
      {...props}
    />
  );
}

export { TypographyH1, TypographyH2 };
