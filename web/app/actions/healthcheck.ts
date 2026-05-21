'use server';

import { cacheLife } from 'next/cache';

export type HealthStatus = 'Healthy' | 'Degraded' | 'Offline';

async function check(url: string, validate?: (d: unknown) => boolean): Promise<HealthStatus> {
  try {
    const start = Date.now();
    const res = await fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(10_000) });
    const elapsed = Date.now() - start;
    if (!res.ok) return 'Offline';
    if (validate) {
      const data = await res.json();
      if (!validate(data)) return 'Offline';
    }
    return elapsed > 2000 ? 'Degraded' : 'Healthy';
  } catch {
    return 'Offline';
  }
}

export async function checkAllHealth(): Promise<{
  planlaFrontend: HealthStatus;
  planlaBackend: HealthStatus;
  typeStreak: HealthStatus;
}> {
  'use cache';
  cacheLife({ revalidate: 60, expire: 60 });
  const [planlaFrontend, planlaBackend, typeStreak] = await Promise.all([
    check('https://planla.io'),
    check('https://api.planla.io/settings', (d) => (d as { success?: boolean }).success === true),
    check('https://type-streak.emirguvenni.com/'),
  ]);
  return { planlaFrontend, planlaBackend, typeStreak };
}
