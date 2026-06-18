# Signalist

Signalist is a real‑time stock tracking platform that delivers personalized alerts and detailed company insights.

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/arlgnv/signalist?utm_source=oss&utm_medium=github&utm_campaign=arlgnv%2Fsignalist&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

## Tech stack

- **[Next.js](https://nextjs.org)**. The React Framework for the Web.
- **[TypeScript](https://www.typescriptlang.org)**. JavaScript with syntax for types.
- **[TailwindCSS](https://tailwindcss.com)**. Rapidly build modern websites without ever leaving your HTML.
- **[Shadcn](https://ui.shadcn.com)**. The Foundation for your Design System.
- **[Better Auth](https://www.better-auth.com)**. The most comprehensive authentication framework.
- **[React Hook Form](https://react-hook-form.com)**. Performant, flexible and extensible forms with easy-to-use validation.
- **[Zod](https://zod.dev)**. TypeScript-first schema validation with static type inference.
- **[@teispace/next-themes](https://www.npmjs.com/package/@teispace/next-themes)**. Feature-rich, lightweight, production-grade theme management for Next.js and React..
- **[next-intl](https://next-intl.dev)**. Internationalization for Next.js.
- **[Inngest](https://www.inngest.com)**. Run fast, reliable code on any platform, without managing queues, infra, or state.
- **[Finnhub](https://finnhub.io)**. Democratize Financial Data with the most powerful stock API on the market.
- **[Supabase](https://supabase.com)**. Build in a weekend, scale to millions.
- **[Nodemailer](https://nodemailer.com)**. Send emails from Node.js - easy as cake!
- **[CodeRabbit](https://www.coderabbit.ai)**. Reviews for AI-powered teams who move fast (but don’t break things).

## Development

Follow these steps to set up the project locally on your machine.

### Prerequisites

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org)

### Recommendations

- Enable [custom TypeScript plugin](https://nextjs.org/docs/app/api-reference/config/typescript#ide-plugin) for Next.js

### Setting up

1. Clone repository

```bash
git clone git@github.com:arlgnv/signalist.git
```

2. Navigate to cloned folder

```bash
cd signalist
```

3. Install dependencies

```bash
npm install
```

4. Set up environment variables

   Create a new file named `.env` in the project's root and fill it out with required variables (reference `.env.example` for available variables)

### Starting development server

1. Start the server

```bash
npm run dev
```

2. Start inngest dev server

```bash
npm run inngest:dev
```

3. Open the server

   Visit [http://localhost:3000](http://localhost:3000) in your browser to view the project

### Viewing app on other devices

If you need to view/test/debug the app on other devices on the same network you need to do two things.

1. Add `allowedDevOrigins` to Next.js's config to allow requests from origins other than the hostname the dev server was initialized with.

```typescript
import type { NextConfig } from 'next';

const config: NextConfig = {
  allowedDevOrigins: ['YOUR_HOSTNAME'],
};

export default config;
```

2. Update `allowedHosts` in Better Auth's config to allow requests from other hosts.

```typescript
import { betterAuth } from 'better-auth';

const auth = betterAuth({
  baseURL: {
    allowedHosts: ['localhost:3000', '*.vercel.app', 'YOUR_HOSTNAME'],
  },
});

export default auth;
```
