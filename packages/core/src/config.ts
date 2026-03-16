import dotenv from 'dotenv';

dotenv.config();

export type AppConfig = {
  apiPort: number;
  webPort: number;
  databaseUrl: string;
  authSecret: string;
};

export const getConfig = (): AppConfig => ({
  apiPort: Number(process.env.API_PORT) || 4000,
  webPort: Number(process.env.WEB_PORT) || 5173,
  databaseUrl: process.env.DATABASE_URL || 'file:memory:?cache=shared',
  authSecret: process.env.AUTH_SECRET || 'dev-secret',
});
