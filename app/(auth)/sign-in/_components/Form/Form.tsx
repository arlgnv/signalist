'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type * as z from 'zod';

import authClient from '@/auth-client';
import { TextField } from '@/components/complex';
import { Button } from '@/components/ui/button';

import validationSchema from './validationSchema';

function Form() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit: rhfHandleSubmit,
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    async function handleSignIn({
      email,
      password,
    }: z.output<typeof validationSchema>) {
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
    <form onSubmit={handleSubmit}>
      <TextField
        className="mb-4"
        label="Email"
        name="email"
        inputMode="email"
        placeholder="john@outlook.com"
        register={register}
        error={errors.email}
      />
      <TextField
        className="mb-8"
        label="Password"
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
        focusableWhenDisabled
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Signing in' : 'Sign in'}
      </Button>
    </form>
  );
}

export default Form;
