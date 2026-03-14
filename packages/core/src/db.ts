export type DbClient = {
  ping: () => Promise<boolean>;
  url: string;
};

export const createDbClient = (url: string): DbClient => {
  return {
    url,
    ping: async () => {
      // Stubbed connectivity check; replace with real driver (e.g., Postgres/Prisma) later.
      await new Promise((resolve) => setTimeout(resolve, 10));
      return true;
    },
  };
};
