import { useId } from 'react';
import { Controller } from 'react-hook-form';
import type { FieldValues as ReactHookFormFieldValues } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from '@/components/ui/field';

import type { Props } from './types';

function CheckboxField<FieldValues extends ReactHookFormFieldValues>({
  className,
  label,
  name,
  control,
  rules,
  disabled,
  error,
}: Props<FieldValues>) {
  const id = useId();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field }) => (
        <Field
          className={className}
          orientation="horizontal"
          data-invalid={!!error}
          data-disabled={field.disabled}
        >
          <Checkbox
            id={id}
            name={field.name}
            ref={field.ref}
            checked={field.value}
            disabled={field.disabled}
            aria-invalid={!!error}
            onCheckedChange={field.onChange}
            onBlur={field.onBlur}
          />
          <FieldContent>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <FieldError>{error?.message}</FieldError>
          </FieldContent>
        </Field>
      )}
    />
  );
}

export default CheckboxField;
