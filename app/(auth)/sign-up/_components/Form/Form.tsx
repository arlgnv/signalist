'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import authClient from '@/auth-client';
import { TextField, SelectField, CheckboxField } from '@/components/complex';
import { Button } from '@/components/ui/button';
import { EMAIL_REGULAR_EXPRESSION } from '@/constants';
import { convertSecondsToMilliseconds } from '@/utilities';

import { Country } from './components';
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCES,
} from './data';
import type { FieldValues } from './types';

function Form() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    control,
    handleSubmit: rhfHandleSubmit,
  } = useForm<FieldValues>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: '',
      investmentGoal: '',
      riskTolerance: '',
      preferredIndustry: '',
      receiveDailyMarketNews: false,
    },
  });

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    async function handleSignUp({
      fullName,
      email,
      password,
      country,
      investmentGoal,
      riskTolerance,
      preferredIndustry,
      receiveDailyMarketNews,
    }: FieldValues) {
      await authClient.signUp.email(
        {
          name: fullName,
          email,
          password,
          country,
          investmentGoal,
          riskTolerance,
          preferredIndustry,
          receivesDailyMarketNews: receiveDailyMarketNews,
        },
        {
          async onSuccess() {
            try {
              await axios.post(
                '/api/events/user-signed-up',
                {
                  fullName,
                  email,
                  investmentGoal,
                  riskTolerance,
                  preferredIndustry,
                },
                {
                  timeout: convertSecondsToMilliseconds(10),
                },
              );
            } catch {
              toast.info(
                'Account created successfully but welcome email is not delivered',
              );
            } finally {
              router.push('/');
            }
          },
          onError({ error: { message } }) {
            toast.error(message);
          },
        },
      );
    }

    void rhfHandleSubmit(handleSignUp)(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className="mb-4"
        label="Full name"
        name="fullName"
        placeholder="John Smith"
        register={register}
        registerOptions={{
          required: 'Full name is required',
          minLength: {
            value: 2,
            message: 'Full name must be at least 2 characters',
          },
          maxLength: {
            value: 100,
            message: 'Full name must be at most 100 characters',
          },
        }}
        error={errors.fullName}
      />
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
      <Country control={control} />
      <TextField
        className="mb-4"
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
      <SelectField
        className="mb-4"
        label="Investment goal"
        name="investmentGoal"
        control={control}
        rules={{
          required: 'Investment goal is required',
        }}
        placeholder="Select investment goal"
        options={INVESTMENT_GOALS}
      />
      <SelectField
        className="mb-4"
        label="Risk tolerance"
        name="riskTolerance"
        control={control}
        rules={{
          required: 'Risk tolerance is required',
        }}
        placeholder="Select risk tolerance"
        options={RISK_TOLERANCES}
      />
      <SelectField
        className="mb-4"
        label="Preferred industry"
        name="preferredIndustry"
        control={control}
        rules={{
          required: 'Preferred industry is required',
        }}
        placeholder="Select preferred industry"
        options={PREFERRED_INDUSTRIES}
      />
      <CheckboxField
        className="mb-8"
        label="Receive daily market news via email"
        name="receiveDailyMarketNews"
        control={control}
      />
      <Button
        className="w-full"
        size="lg"
        type="submit"
        focusableWhenDisabled
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Creating account' : 'Start your investing journey'}
      </Button>
    </form>
  );
}

export default Form;
