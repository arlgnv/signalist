import * as z from 'zod';

const validationSchema = z.object({
  email: z.email({
    error({ input }) {
      return `Email is ${input === '' ? 'required' : 'invalid'}`;
    },
  }),
  password: z.string().min(1, 'Password is required'),
});

export default validationSchema;
