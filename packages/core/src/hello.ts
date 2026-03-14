import { HelloResponse } from '@nexusynth/types';

export const buildHello = (name?: string): HelloResponse => {
  const target = name?.trim() || 'NexusSynth';
  return {
    message: `Hello, ${target}!`,
    capabilityHint: 'Unified monorepo foundation is ready.',
  };
};
