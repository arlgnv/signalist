'use client';

import { useId } from 'react';
import type { FieldValues as ReactHookFormFieldValues } from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import type { Props } from './types';

function TextField<FieldValues extends ReactHookFormFieldValues>({
  className,
  label,
  name,
  type = 'text',
  inputMode,
  placeholder,
  register,
  registerOptions,
  error,
}: Props<FieldValues>) {
  const id = useId();

  return (
    <Field className={className} data-invalid={!!error}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        id={id}
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        aria-invalid={!!error}
        {...register(name, registerOptions)}
      />
      <FieldError>{error?.message}</FieldError>
    </Field>
  );
}

export default TextField;
