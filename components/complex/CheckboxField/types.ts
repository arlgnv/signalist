import type {
  FieldError,
  FieldValues as ReactHookFormFieldValues,
  Controller,
} from 'react-hook-form';

import type { Field } from '@/components/ui/field';

export interface Props<FieldValues extends ReactHookFormFieldValues>
  extends
    Pick<React.ComponentProps<typeof Field>, 'className'>,
    Pick<
      React.ComponentProps<typeof Controller<FieldValues>>,
      'name' | 'control' | 'rules' | 'disabled'
    > {
  label: string;
  error: FieldError | undefined;
}
