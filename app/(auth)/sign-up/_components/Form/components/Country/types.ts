import type { ControllerProps } from 'react-hook-form';
import type * as z from 'zod';

import type { useFormDataSchema } from '../../hooks';

export type Props = Pick<
  ControllerProps<
    z.input<ReturnType<typeof useFormDataSchema>>,
    'country',
    z.output<ReturnType<typeof useFormDataSchema>>
  >,
  'control' | 'disabled'
>;
