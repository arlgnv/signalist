'use client';

import {
  Controller,
  type FieldValues as ReactHookFormFieldValues,
} from 'react-hook-form';

import { Field, FieldError } from '@/components/ui/field';
import {
  Select,
  SelectLabel,
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
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <Field className={className} data-invalid={!!fieldState.error}>
          <Select
            name={field.name}
            value={field.value}
            items={options}
            modal={modal}
            disabled={field.disabled}
            onValueChange={field.onChange}
          >
            <SelectLabel>{label}</SelectLabel>
            <SelectTrigger
              ref={field.ref}
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
