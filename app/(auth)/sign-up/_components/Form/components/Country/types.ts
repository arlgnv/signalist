import type { Controller } from 'react-hook-form';

import type { FieldValues } from '../../types';

export type Props = Pick<
  React.ComponentProps<typeof Controller<FieldValues>>,
  'control' | 'disabled'
>;
