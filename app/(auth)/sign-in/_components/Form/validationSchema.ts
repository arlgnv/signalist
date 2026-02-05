import * as z from 'zod';

const validationSchema = z.object({
  email: z.email({
    error({ input }) {
      return `Field is ${input === '' ? 'required' : 'invalid'}`;
    },
  }),
  password: z
    .string()
    .min(8, {
      error({ input }) {
        return `Field is ${input === '' ? 'required' : 'invalid'}`;
      },
    })
    .max(128, 'Field is invalid'),
});

export default validationSchema;
