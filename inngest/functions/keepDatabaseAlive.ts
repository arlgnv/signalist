import { cron } from 'inngest';

import supabase from '@/supabase/client';

import inngest from '..';

// The function is triggered every hour to keep the Supabase database alive and prevent it from being deleted due to inactivity.
const keepDatabaseAlive = inngest.createFunction(
  {
    id: 'keep-database-alive',
    triggers: [cron('0 * * * *')],
  },
  async () => {
    const fetchUsersResponse = await supabase
      .from('users')
      .select('id')
      .limit(1);

    if (fetchUsersResponse.error) {
      throw fetchUsersResponse.error;
    }
  },
);

export default keepDatabaseAlive;
