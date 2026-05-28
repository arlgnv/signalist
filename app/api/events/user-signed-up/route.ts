import { headers } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';
import * as z from 'zod';

import auth from '@/auth';
import inngest, { userSignedUp } from '@/inngest';

const requestBodySchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.email(),
  investmentGoal: z.enum(['growth', 'income', 'balanced', 'conservative']),
  riskTolerance: z.enum(['low', 'medium', 'high']),
  preferredIndustry: z.enum([
    'technology',
    'healthcare',
    'finance',
    'energy',
    'consumer goods',
  ]),
});

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return new NextResponse(null, {
      status: 401,
    });
  }

  let requestBody: unknown;

  try {
    requestBody = await request.json();
  } catch {
    return NextResponse.json(
      {
        error_code: 'INVALID_REQUEST_BODY_FORMAT',
      },
      {
        status: 400,
      },
    );
  }

  const safeParseResult = requestBodySchema.safeParse(requestBody);

  if (!safeParseResult.success) {
    return NextResponse.json(
      {
        error_code: 'INVALID_DATA',
        details: z.prettifyError(safeParseResult.error),
      },
      {
        status: 400,
      },
    );
  }

  if (session.user.email !== safeParseResult.data.email) {
    return NextResponse.json(null, {
      status: 403,
    });
  }

  try {
    await inngest.send(userSignedUp.create(safeParseResult.data));
  } catch {
    console.error('Failed to send inngest\'s "app/user.signed_up" event');

    return new NextResponse(null, {
      status: 502,
    });
  }

  return new NextResponse(null, {
    status: 204,
  });
}
