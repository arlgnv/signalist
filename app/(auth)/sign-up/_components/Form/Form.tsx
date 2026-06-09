'use client';

import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useTranslations } from 'next-intl';
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
import { useFormDataSchema } from './hooks';

function Form() {
  const router = useRouter();
  const t = useTranslations('pages.signUp.form');
  const formDataScheme = useFormDataSchema();
  const {
    register,
    formState: { errors, isSubmitting },
    control,
    handleSubmit: rhfHandleSubmit,
  } = useForm({
    resolver: zodResolver(formDataScheme),
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
    }: z.output<typeof formDataScheme>) {
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
          label={t('fullName.label')}
          description={t('fullName.description')}
          name="fullName"
          placeholder={t('fullName.placeholder')}
          register={register}
          error={errors.fullName}
        />
        <TextField
          className="mb-4"
          label={t('email.label')}
          name="email"
          inputMode="email"
          placeholder="john.smith@outlook.com"
          register={register}
          error={errors.email}
        />
        <Country control={control} />
        <TextField
          className="mb-4"
          label={t('password.label')}
          description={t('password.description')}
          name="password"
          type="password"
          placeholder="········"
          register={register}
          error={errors.password}
        />
        <SelectField
          className="mb-4"
          label={t('investmentGoal.label')}
          name="investmentGoal"
          control={control}
          placeholder={t('investmentGoal.placeholder')}
          modal={false}
          options={INVESTMENT_GOALS}
        />
        <SelectField
          className="mb-4"
          label={t('riskTolerance.label')}
          name="riskTolerance"
          control={control}
          placeholder={t('riskTolerance.placeholder')}
          modal={false}
          options={RISK_TOLERANCES}
        />
        <SelectField
          className="mb-4"
          label={t('preferredIndustry.label')}
          name="preferredIndustry"
          control={control}
          placeholder={t('preferredIndustry.placeholder')}
          modal={false}
          options={PREFERRED_INDUSTRIES}
        />
        <CheckboxField
          className="mb-8"
          label={t('receiveDailyMarketNews.label')}
          name="receiveDailyMarketNews"
          control={control}
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
