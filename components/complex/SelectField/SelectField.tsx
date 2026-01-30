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
  disabled,
  placeholder,
  options,
  error,
}: Props<FieldValues>) {
  const id = useId();

  return (
    <Field className={className} data-invalid={!!error}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        disabled={disabled}
        render={({ field }) => (
          <Select
            name={field.name}
            value={field.value}
            disabled={field.disabled}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              id={id}
              ref={field.ref}
              aria-invalid={!!error}
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
        )}
      />
      <FieldError>{error?.message}</FieldError>
    </Field>
  );
}

export default SelectField;
