import { HealthResponse } from '@nexusynth/types';
import { createDbClient } from './db';
import { getConfig } from './config';

export const getHealthStatus = async (): Promise<HealthResponse> => {
  const { databaseUrl } = getConfig();
  const db = createDbClient(databaseUrl);
  const dbOk = await db.ping();

  return {
    status: dbOk ? 'ok' : 'degraded',
    timestamp: new Date().toISOString(),
    version: '0.1.0',
    services: {
      api: true,
      db: dbOk,
    },
  };
};
