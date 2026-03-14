export type HealthResponse = {
  status: 'ok' | 'degraded';
  timestamp: string;
  version: string;
  services: {
    api: boolean;
    db: boolean;
  };
};

export type HelloResponse = {
  message: string;
  capabilityHint?: string;
};

export type UserSession = {
  userId: string;
  roles: string[];
};
