import type {
  UseFormRegister,
  RegisterOptions,
  FieldError,
  FieldValues as ReactHookFormFieldValues,
  Path,
} from 'react-hook-form';

import type { Field } from '@/components/ui/field';
import type { Input } from '@/components/ui/input';

export interface Props<FieldValues extends ReactHookFormFieldValues>
  extends
    Pick<React.ComponentProps<typeof Field>, 'className'>,
    Pick<
      React.ComponentProps<typeof Input>,
      'type' | 'placeholder' | 'inputMode'
    > {
  label: string;
  name: Path<FieldValues>;
  register: UseFormRegister<FieldValues>;
  registerOptions?: RegisterOptions<FieldValues>;
  error: FieldError | undefined;
}
