'use client';

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
  // ComboboxItem,
} from '@/components/ui/combobox';

import type { Props } from './types';

const countriesData = countryList().getData();

// function transformCountryCodeToFlagEmoji(countryCode: string) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split('')
//     .map((char) => 127397 + char.charCodeAt(0));

//   return String.fromCodePoint(...codePoints);
// }

function Country({ control, disabled }: Props) {
  // const [open, setOpen] = useState(false);

  return (
    <Controller
      name="country"
      control={control}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <Combobox
          items={countriesData}
          value={field.value}
          onValueChange={field.onChange}
        >
          <ComboboxTrigger
            className="mb-4"
            render={
              <Button
                className="w-64 justify-between font-normal"
                variant="outline"
              >
                <ComboboxValue />
              </Button>
            }
          />
          <ComboboxContent>
            <ComboboxInput
              ref={field.ref}
              name={field.name}
              showTrigger={false}
              placeholder="Select country"
              disabled={field.disabled}
              aria-invalid={!!fieldState.error}
              onBlur={field.onBlur}
            />
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {/* {(item) => (
                <ComboboxItem key={item.value} value={item.value}>
                  {item.label}
                </ComboboxItem>
              )} */}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      )}
    />
  );

  // return (
  //   <div className="space-y-2">
  //     <Label className="form-label" htmlFor={name}>
  //       {label}
  //     </Label>
  //     <Controller
  //       name={name}
  //       control={control}
  //       rules={{
  //         required: required
  //           ? `Please select ${label.toLocaleLowerCase()}`
  //           : false,
  //       }}
  //       render={({ field }) => (
  //         <Popover open={open} onOpenChange={setOpen}>
  //           <PopoverTrigger asChild>
  //             <Button
  //               className="country-select-trigger"
  //               variant="outline"
  //               role="combobox"
  //               aria-expanded={open}
  //             >
  //               {field.value ? (
  //                 <span className="flex items-center gap-2">
  //                   <span>{transformCountryCodeToFlagEmoji(field.value)}</span>
  //                   <span>
  //                     {
  //                       countriesData.find(
  //                         (countryData) => countryData.value === field.value,
  //                       )?.label
  //                     }
  //                   </span>
  //                 </span>
  //               ) : (
  //                 'Select your country...'
  //               )}
  //               <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
  //             </Button>
  //           </PopoverTrigger>
  //           <PopoverContent
  //             className="w-full border-gray-600 bg-gray-800 p-0"
  //             align="start"
  //           >
  //             <Command className="border-gray-600 bg-gray-800">
  //               <CommandInput
  //                 className="country-select-input"
  //                 placeholder="Search countries..."
  //               />
  //               <CommandEmpty className="country-select-empty">
  //                 No countries found.
  //               </CommandEmpty>
  //               <CommandList className="scrollbar-hide-default max-h-60 bg-gray-800">
  //                 {countriesData.map(({ label, value }) => (
  //                   <CommandItem
  //                     className="country-select-item"
  //                     key={value}
  //                     onSelect={() => {
  //                       field.onChange(value);
  //                       setOpen(false);
  //                     }}
  //                   >
  //                     <Check
  //                       className={twJoin(
  //                         'mr-2 h-4 w-4 text-yellow-500',
  //                         field.value === value ? 'opacity-100' : 'opacity-0',
  //                       )}
  //                     />
  //                     <span className="flex items-center gap-2">
  //                       <span>{transformCountryCodeToFlagEmoji(value)}</span>
  //                       <span>{label}</span>
  //                     </span>
  //                   </CommandItem>
  //                 ))}
  //               </CommandList>
  //             </Command>
  //           </PopoverContent>
  //         </Popover>
  //       )}
  //     />
  //     {error && <p className="text-sm text-red-500">{error.message}</p>}
  //     <p className="text-xs text-gray-500">
  //       Helps us show market data and news relevant to you.
  //     </p>
  //   </div>
  // );
}

export default Country;
