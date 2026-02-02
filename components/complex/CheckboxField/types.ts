import type {
  FieldValues as ReactHookFormFieldValues,
  ControllerProps,
} from 'react-hook-form';

import type { Field } from '@/components/ui/field';

export interface Props<FieldValues extends ReactHookFormFieldValues>
  extends
    Pick<
      ControllerProps<FieldValues>,
      'name' | 'control' | 'rules' | 'disabled'
    >,
    Pick<React.ComponentProps<typeof Field>, 'className'> {
  label: string;
}
