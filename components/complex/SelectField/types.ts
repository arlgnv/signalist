import type {
  FieldValues as ReactHookFormFieldValues,
  Controller,
} from 'react-hook-form';

import type { Field } from '@/components/ui/field';
import type { SelectValue } from '@/components/ui/select';

export interface Props<FieldValues extends ReactHookFormFieldValues>
  extends
    Pick<
      React.ComponentProps<typeof Controller<FieldValues>>,
      'name' | 'control' | 'rules' | 'disabled'
    >,
    Pick<React.ComponentProps<typeof Field>, 'className'>,
    Pick<React.ComponentProps<typeof SelectValue>, 'placeholder'> {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
}
