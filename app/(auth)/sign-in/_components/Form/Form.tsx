'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import authClient from '@/auth-client';
import { TextField } from '@/components/complex';
import { Button } from '@/components/ui/button';

import type { FieldValues } from './types';
import validationSchema from './validationSchema';

function Form() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit: rhfHandleSubmit,
  } = useForm<FieldValues>({
    resolver: zodResolver(validationSchema),
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
    <form onSubmit={handleSubmit}>
      <TextField
        className="mb-4"
        label="Email"
        name="email"
        placeholder="john@outlook.com"
        register={register}
        error={errors.email}
      />
      <TextField
        className="mb-8"
        label="Password"
        description="Must be between 8-128 characters"
        name="password"
        type="password"
        placeholder="********"
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
