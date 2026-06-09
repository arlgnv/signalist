import { useTranslations } from 'next-intl';
import * as z from 'zod';

function useLoginDataSchema() {
  const t = useTranslations('pages.signIn.form');

  return z.object({
    email: z.email({
      error({ input }) {
        return input === ''
          ? t('email.errors.required')
          : t('email.errors.invalid');
      },
    }),
    password: z.string().min(1, t('password.errors.required')),
  });
}

export default useLoginDataSchema;
