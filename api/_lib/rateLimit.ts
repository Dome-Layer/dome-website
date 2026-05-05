/**
 * Contact-form rate limiting via Upstash Redis.
 *
 * Sliding window: 3 submissions per hour per IP. Failure modes:
 *
 *   * Missing UPSTASH_* env vars in production → fail closed (return
 *     `success: false`). The deploy is broken on purpose so the operator
 *     fixes the configuration rather than silently shipping without a
 *     rate limit.
 *   * Missing UPSTASH_* env vars in non-production → fail open with a
 *     warn so local `vercel dev` works without provisioning Upstash.
 *   * Upstash transient I/O error at request time → fail open with a
 *     console.error. A third-party blip must not 500 the contact form.
 */
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import type { VercelRequest } from '@vercel/node';

let _ratelimit: Ratelimit | null = null;

function getRatelimiter(): Ratelimit | null {
  if (_ratelimit) return _ratelimit;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  _ratelimit = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(3, '1 h'),
    analytics: true,
    prefix: 'contact_form',
  });
  return _ratelimit;
}

export function getClientIp(req: VercelRequest): string {
  // Vercel populates `x-real-ip` after its edge layer strips earlier hops;
  // prefer it so we don't accidentally bucket on a transient proxy IP.
  const realIp = req.headers['x-real-ip'];
  if (typeof realIp === 'string' && realIp) return realIp;

  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string' && xff) return xff.split(',')[0]!.trim();

  return req.socket?.remoteAddress ?? 'unknown';
}

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};

export async function checkContactRateLimit(ip: string): Promise<RateLimitResult> {
  const ratelimit = getRatelimiter();

  if (!ratelimit) {
    if (process.env.NODE_ENV === 'production') {
      console.error('[rate_limit] Upstash env vars missing in production — failing closed');
      return { success: false, limit: 3, remaining: 0, reset: 0 };
    }
    console.warn('[rate_limit] Upstash env vars missing — fail-open in non-production');
    return { success: true, limit: 3, remaining: 3, reset: 0 };
  }

  try {
    const { success, limit, remaining, reset } = await ratelimit.limit(ip);
    return { success, limit, remaining, reset };
  } catch (err) {
    console.error('[rate_limit] Upstash check failed', err);
    return { success: true, limit: 3, remaining: 3, reset: 0 };
  }
}
