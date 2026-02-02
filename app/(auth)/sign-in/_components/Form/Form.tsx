'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import authClient from '@/auth-client';
import { TextField } from '@/components/complex';
import { Button } from '@/components/ui/button';
import { EMAIL_REGULAR_EXPRESSION } from '@/constants';

import type { FieldValues } from './types';

function Form() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit: rhfHandleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    async function handleSignIn({ email, password }: FieldValues) {
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
    <form className="mb-3" onSubmit={handleSubmit}>
      <TextField
        className="mb-4"
        label="Email"
        name="email"
        placeholder="john@outlook.com"
        register={register}
        registerOptions={{
          required: 'Email is required',
          pattern: {
            value: EMAIL_REGULAR_EXPRESSION,
            message: 'Email is invalid',
          },
        }}
        error={errors.email}
      />
      <TextField
        className="mb-8"
        label="Password"
        name="password"
        type="password"
        placeholder="********"
        register={register}
        registerOptions={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        }}
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
