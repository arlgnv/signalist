'use client';

import { ChevronDownIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Controller } from 'react-hook-form';
import countryList from 'react-select-country-list';

import { Button } from '@/components/ui/button';
import {
  ComboboxContent,
  Combobox,
  ComboboxLabel,
  ComboboxTrigger,
  ComboboxValue,
  ComboboxInput,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from '@/components/ui/combobox';
import { Field, FieldDescription, FieldError } from '@/components/ui/field';
import { cn } from '@/lib/utils';

import type { Props } from './types';

function Country({ control, disabled }: Props) {
  const t = useTranslations('pages.signUp.form.country');
  const countries = countryList().getLabels();

  return (
    <Controller
      name="country"
      control={control}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <Field className="mb-4" data-invalid={!!fieldState.error}>
          <Combobox
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
            <ComboboxLabel>{t('label')}</ComboboxLabel>
            <ComboboxTrigger
              render={
                <Button
                  ref={field.ref}
                  className={cn(
                    'justify-between font-normal',
                    !field.value &&
                      'text-muted-foreground hover:bg-transparent hover:text-muted-foreground disabled:pointer-events-auto disabled:cursor-not-allowed',
                  )}
                  variant="outline"
                >
                  <ComboboxValue>
                    {(selectedValue: string) => (
                      <>
                        {selectedValue || t('placeholder')}
                        <ChevronDownIcon
                          className="pointer-events-none size-4"
                          data-icon="inline-end"
                        />
                      </>
                    )}
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
              <ComboboxList>
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
