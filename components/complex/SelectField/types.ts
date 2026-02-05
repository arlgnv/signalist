import type {
  FieldValues as ReactHookFormFieldValues,
  ControllerProps,
} from 'react-hook-form';

import type { Field } from '@/components/ui/field';
import type { Select, SelectValue } from '@/components/ui/select';

export interface Props<FieldValues extends ReactHookFormFieldValues>
  extends
    Pick<
      ControllerProps<FieldValues>,
      'name' | 'control' | 'rules' | 'disabled'
    >,
    Pick<React.ComponentProps<typeof Field>, 'className'>,
    Pick<React.ComponentProps<typeof Select>, 'modal'>,
    Pick<React.ComponentProps<typeof SelectValue>, 'placeholder'> {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
}
