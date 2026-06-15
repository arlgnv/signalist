'use client';

import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type * as z from 'zod';

import authClient from '@/auth-client';
import { TextField } from '@/components/complex';
import { Button } from '@/components/ui/button';

import { useFormDataSchema } from './hooks';

function Form() {
  const router = useRouter();
  const t = useTranslations('pages.signIn.form');
  const formDataScheme = useFormDataSchema();
  const {
    control,
    register,
    formState: { errors, isSubmitting },
    handleSubmit: rhfHandleSubmit,
  } = useForm({
    resolver: zodResolver(formDataScheme),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    async function handleSignIn({
      email,
      password,
    }: z.output<typeof formDataScheme>) {
      await authClient.signIn.email(
        {
          email,
          password,
        },
        {
          onSuccess() {
            router.push('/');
          },
          onError({ error: { message } }) {
            toast.error(message);
          },
        },
      );
    }

    void rhfHandleSubmit(handleSignIn)(event);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          className="mb-4"
          label={t('email.label')}
          name="email"
          inputMode="email"
          placeholder="john.smith@outlook.com"
          register={register}
          error={errors.email}
        />
        <TextField
          className="mb-8"
          label={t('password.label')}
          name="password"
          type="password"
          placeholder="········"
          register={register}
          error={errors.password}
        />
        <Button
          className="w-full"
          size="lg"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('button.pendingText') : t('button.text')}
        </Button>
      </form>
      <DevTool control={control} />
    </>
  );
}

export default Form;
