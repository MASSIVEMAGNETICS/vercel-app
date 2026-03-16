import Fastify from 'fastify';
import cors from '@fastify/cors';

import { buildHello, getConfig, getHealthStatus, mockUserFromToken } from '@nexusynth/core';

const config = getConfig();

export const buildServer = () => {
  const server = Fastify({ logger: true });

  server.register(cors, { origin: true });

  server.get('/health', async () => {
    return getHealthStatus();
  });

  server.get('/api/hello', async (request) => {
    const query = request.query as { name?: string; token?: string };
    const user = mockUserFromToken(query.token);
    const name = query.name || user?.userId || 'NexusSynth';
    return buildHello(name);
  });

  server.get('/', async () => ({
    message: 'NexusSynth API is online',
  }));

  return server;
};

const start = async () => {
  const server = buildServer();
  await server.listen({ port: config.apiPort, host: '0.0.0.0' });
};

if (require.main === module) {
  start().catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  });
}
