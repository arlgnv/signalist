import type { ControllerProps } from 'react-hook-form';
import type * as z from 'zod';

import type validationSchema from '../../validationSchema';

export type Props = Pick<
  ControllerProps<
    z.input<typeof validationSchema>,
    'country',
    z.output<typeof validationSchema>
  >,
  'control' | 'disabled'
>;
