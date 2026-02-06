'use client';

import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type * as z from 'zod';

import authClient from '@/auth-client';
import { TextField, SelectField, CheckboxField } from '@/components/complex';
import { Button } from '@/components/ui/button';
import { convertSecondsToMilliseconds } from '@/utilities';

import { Country } from './components';
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCES,
} from './data';
import validationSchema from './validationSchema';

function Form() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    control,
    handleSubmit: rhfHandleSubmit,
  } = useForm({
    resolver: zodResolver(validationSchema),
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
    }: z.output<typeof validationSchema>) {
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
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          className="mb-4"
          label="Full name"
          description="Must be between 2-100 characters"
          name="fullName"
          placeholder="John Smith"
          register={register}
          error={errors.fullName}
        />
        <TextField
          className="mb-4"
          label="Email"
          name="email"
          inputMode="email"
          placeholder="john@outlook.com"
          register={register}
          error={errors.email}
        />
        <Country control={control} />
        <TextField
          className="mb-4"
          label="Password"
          description="Must be between 8-128 characters"
          name="password"
          type="password"
          placeholder="········"
          register={register}
          error={errors.password}
        />
        <SelectField
          className="mb-4"
          label="Investment goal"
          name="investmentGoal"
          control={control}
          placeholder="Select investment goal"
          modal={false}
          options={INVESTMENT_GOALS}
        />
        <SelectField
          className="mb-4"
          label="Risk tolerance"
          name="riskTolerance"
          control={control}
          placeholder="Select risk tolerance"
          modal={false}
          options={RISK_TOLERANCES}
        />
        <SelectField
          className="mb-4"
          label="Preferred industry"
          name="preferredIndustry"
          control={control}
          placeholder="Select preferred industry"
          modal={false}
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
      <DevTool control={control} />
    </>
  );
}

export default Form;
