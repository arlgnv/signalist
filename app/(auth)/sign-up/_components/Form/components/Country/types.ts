import type {
  FieldError,
  FieldValues as ReactHookFormFieldValues,
  Path,
  Control,
} from 'react-hook-form';

export interface Props<FieldValues extends ReactHookFormFieldValues> {
  label: string;
  name: Path<FieldValues>;
  control: Control<FieldValues>;
  error: FieldError | undefined;
  required?: boolean;
}
