'use server';

export type HealthStatus = 'Healthy' | 'Degraded' | 'Offline';

async function check(url: string, validate?: (d: unknown) => boolean): Promise<HealthStatus> {
  try {
    const start = Date.now();
    const res = await fetch(url, { next: { revalidate: 60 }, signal: AbortSignal.timeout(5000) });
    const elapsed = Date.now() - start;
    if (!res.ok) return 'Offline';
    if (validate) {
      const data = await res.json();
      if (!validate(data)) return 'Offline';
    }
    return elapsed > 1000 ? 'Degraded' : 'Healthy';
  } catch {
    return 'Offline';
  }
}

export async function checkAllHealth(): Promise<{
  planlaFrontend: HealthStatus;
  planlaBackend: HealthStatus;
  typeStreak: HealthStatus;
}> {
  const [planlaFrontend, planlaBackend, typeStreak] = await Promise.all([
    check('https://planla.io'),
    check('https://api.planla.io/settings', (d) => (d as { success?: boolean }).success === true),
    check('https://type-streak.emirguvenni.com/'),
  ]);
  return { planlaFrontend, planlaBackend, typeStreak };
}
