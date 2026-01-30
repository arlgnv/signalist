import type {
  FieldValues as ReactHookFormFieldValues,
  Controller,
} from 'react-hook-form';

import type { Field } from '@/components/ui/field';

export interface Props<FieldValues extends ReactHookFormFieldValues>
  extends
    Pick<
      React.ComponentProps<typeof Controller<FieldValues>>,
      'name' | 'control' | 'rules' | 'disabled'
    >,
    Pick<React.ComponentProps<typeof Field>, 'className'> {
  label: string;
}
