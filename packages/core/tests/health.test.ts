import { describe, expect, it } from 'vitest';
import { getHealthStatus } from '../src/health';

describe('health status', () => {
  it('returns ok status with services flags', async () => {
    const result = await getHealthStatus();
    expect(result.status).toBe('ok');
    expect(result.services.api).toBe(true);
    expect(result.services.db).toBe(true);
  });
});
