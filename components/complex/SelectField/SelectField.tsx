'use client';

import { useId } from 'react';
import {
  Controller,
  type FieldValues as ReactHookFormFieldValues,
} from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import type { Props } from './types';

function SelectField<FieldValues extends ReactHookFormFieldValues>({
  className,
  label,
  name,
  control,
  rules,
  modal,
  disabled,
  placeholder,
  options,
}: Props<FieldValues>) {
  const id = useId();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <Field className={className} data-invalid={!!fieldState.error}>
          <FieldLabel htmlFor={id}>{label}</FieldLabel>
          <Select
            name={field.name}
            value={field.value}
            inputRef={field.ref}
            items={options}
            modal={modal}
            disabled={field.disabled}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              id={id}
              aria-invalid={!!fieldState.error}
              onBlur={field.onBlur}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError>{fieldState.error?.message}</FieldError>
        </Field>
      )}
    />
  );
}

export default SelectField;
