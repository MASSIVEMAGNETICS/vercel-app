import { UserSession } from '@nexusynth/types';
import { getConfig } from './config';

export const mockUserFromToken = (token?: string): UserSession | null => {
  const { authSecret } = getConfig();
  if (!token) return null;
  if (token !== authSecret) return null;
  return {
    userId: 'demo-user',
    roles: ['viewer'],
  };
};
