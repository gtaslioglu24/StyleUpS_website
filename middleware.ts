import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/* ─────────────────────────────────────────────
   Simple in-memory rate limiter
   - 60 requests per 60 seconds per IP
   - Returns 429 when exceeded
   ───────────────────────────────────────────── */

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 60;

const ipHits = new Map<string, { count: number; resetAt: number }>();

// Cleanup stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of ipHits) {
    if (now > data.resetAt) ipHits.delete(ip);
  }
}, 300_000);

function getRateLimitResponse(): NextResponse {
  return new NextResponse(
    JSON.stringify({ error: 'Too many requests. Please try again later.' }),
    {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': '60',
      },
    }
  );
}

export function middleware(request: NextRequest) {
  /* ── Rate limiting ── */
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  const now = Date.now();
  const entry = ipHits.get(ip);

  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else {
    entry.count++;
    if (entry.count > MAX_REQUESTS) {
      return getRateLimitResponse();
    }
  }

  /* ── Additional security on response ── */
  const response = NextResponse.next();

  // Prevent caching of HTML pages (static assets are cached by Next.js automatically)
  if (!request.nextUrl.pathname.match(/\._next|\.(.+)$/)) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
