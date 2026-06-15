'use client';

import { useTranslations } from 'next-intl';
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
import { cn } from '@/lib/utils';

import type { Props } from './types';

function Country({ control, disabled }: Props) {
  const id = useId();
  const t = useTranslations('pages.signUp.form.country');
  const countries = countryList().getLabels();

  return (
    <Controller
      name="country"
      control={control}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <Field className="mb-4" data-invalid={!!fieldState.error}>
          <FieldLabel htmlFor={id}>{t('label')}</FieldLabel>
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
              className={cn(
                'justify-start',
                !field.value && 'text-muted-foreground!',
              )}
              ref={field.ref}
              render={
                <Button variant="outline">
                  <ComboboxValue>
                    {(selectedValue: string) =>
                      selectedValue || t('placeholder')
                    }
                  </ComboboxValue>
                </Button>
              }
              aria-invalid={!!fieldState.error}
              onBlur={field.onBlur}
            />
            <ComboboxContent>
              <ComboboxInput
                showTrigger={false}
                placeholder={t('input.placeholder')}
              />
              <ComboboxEmpty>{t('input.notFoundMessage')}</ComboboxEmpty>
              <ComboboxList className="scrollbar-thin sm:scrollbar">
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          <FieldDescription>{t('description')}</FieldDescription>
          <FieldError>{fieldState.error?.message}</FieldError>
        </Field>
      )}
    />
  );
}

export default Country;
