import type { ControllerProps } from 'react-hook-form';

import type { FieldValues } from '../../types';

export type Props = Pick<ControllerProps<FieldValues>, 'control' | 'disabled'>;
