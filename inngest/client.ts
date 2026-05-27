import { Inngest } from 'inngest';

const client = new Inngest({
  id: 'signalist',
  checkpointing: {
    maxRuntime: '210s',
  },
});

export default client;
