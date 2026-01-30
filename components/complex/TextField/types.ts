import type {
  UseFormRegister,
  RegisterOptions,
  FieldError,
  FieldValues as ReactHookFormFieldValues,
  Path,
} from 'react-hook-form';

import type { Field } from '../../ui/field';

export interface Props<FieldValues extends ReactHookFormFieldValues>
  extends
    Pick<React.ComponentProps<typeof Field>, 'className'>,
    Pick<React.ComponentProps<'input'>, 'type' | 'placeholder'> {
  label: string;
  name: Path<FieldValues>;
  register: UseFormRegister<FieldValues>;
  registerOptions?: RegisterOptions<FieldValues>;
  error: FieldError | undefined;
}
