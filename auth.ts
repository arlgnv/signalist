import { betterAuth } from 'better-auth';
import { Pool } from 'pg';

import environment from './environment';

const auth = betterAuth({
  appName: 'Signalist',
  baseURL: environment.BETTER_AUTH_URL,
  database: new Pool({
    connectionString: environment.SUPABASE_CONNECTION_STRING,
  }),
  user: {
    modelName: 'users',
    fields: {
      name: 'full_name',
      emailVerified: 'email_verified',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    additionalFields: {
      country: {
        type: 'string',
      },
      investment_goal: {
        type: 'string',
      },
      risk_tolerance: {
        type: 'string',
      },
      preferred_industry: {
        type: 'string',
      },
      receives_daily_market_news: {
        type: 'boolean',
      },
    },
    deleteUser: {
      enabled: true,
    },
  },
  session: {
    modelName: 'sessions',
    fields: {
      userId: 'user_id',
      expiresAt: 'expires_at',
      ipAddress: 'ip_address',
      userAgent: 'user_agent',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
  account: {
    modelName: 'accounts',
    fields: {
      userId: 'user_id',
      accountId: 'account_id',
      providerId: 'provider_id',
      accessToken: 'access_token',
      refreshToken: 'refresh_token',
      accessTokenExpiresAt: 'access_token_expires_at',
      refreshTokenExpiresAt: 'refresh_token_expires_at',
      idToken: 'id_token',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
  verification: {
    modelName: 'verifications',
    fields: {
      expiresAt: 'expires_at',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});

export default auth;
