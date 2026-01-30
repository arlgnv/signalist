'use client';

import { useId } from 'react';
import { Controller } from 'react-hook-form';
import countryList from 'react-select-country-list';

import { Button } from '@/components/ui/button';
import {
  ComboboxContent,
  Combobox,
  ComboboxTrigger,
  ComboboxValue,
  ComboboxInput,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from '@/components/ui/combobox';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field';

import type { Props } from './types';

function Country({ control, disabled }: Props) {
  const id = useId();
  const countries = countryList().getLabels();

  return (
    <Controller
      name="country"
      control={control}
      rules={{
        required: 'Country is required',
      }}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <Field className="mb-4" data-invalid={!!fieldState.error}>
          <FieldLabel htmlFor={id}>Country</FieldLabel>
          <Combobox
            id={id}
            items={countries}
            name={field.name}
            value={field.value}
            disabled={field.disabled}
            onValueChange={(value) => {
              if (value) {
                field.onChange(value);
              }
            }}
          >
            <ComboboxTrigger
              className="justify-start"
              aria-invalid={!!fieldState.error}
              render={
                <Button variant="outline">
                  <ComboboxValue>
                    {(selectedValue: string) =>
                      selectedValue || (
                        <span className="text-muted-foreground">
                          Select country
                        </span>
                      )
                    }
                  </ComboboxValue>
                </Button>
              }
            />
            <ComboboxContent>
              <ComboboxInput
                ref={field.ref}
                showTrigger={false}
                placeholder="Search countries"
                onBlur={field.onBlur}
              />
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList className="scrollbar-thin sm:scrollbar">
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          <FieldDescription>
            Helps us show market data and news relevant to you
          </FieldDescription>
          <FieldError>{fieldState.error?.message}</FieldError>
        </Field>
      )}
    />
  );
}

export default Country;
