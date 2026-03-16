import React, { useEffect, useState } from 'react';
import { HealthResponse } from '@nexusynth/types';
import { Button } from '@nexusynth/ui';

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:4000';

type HelloState = {
  message: string;
  capabilityHint?: string;
};

const App: React.FC = () => {
  const [hello, setHello] = useState<HelloState | null>(null);
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${apiBase}/health`)
      .then((res) => res.json())
      .then(setHealth)
      .catch(() => setHealth(null));
  }, []);

  const loadHello = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiBase}/api/hello?name=Explorer`);
      setHello(await res.json());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <header>
        <p className="eyebrow">NexusSynth</p>
        <h1>Unified monorepo foundation</h1>
        <p className="lede">
          Web + API + shared packages + infra. Predictive platform groundwork is ready.
        </p>
        <div className="actions">
          <Button onClick={loadHello} disabled={loading}>
            {loading ? 'Contacting API…' : 'Call API hello'}
          </Button>
          <Button variant="ghost" onClick={() => window.open('https://github.com', '_blank')}>
            View roadmap
          </Button>
        </div>
      </header>

      <section className="card">
        <h2>Health</h2>
        {health ? (
          <ul>
            <li>Status: {health.status}</li>
            <li>API: {health.services.api ? 'online' : 'down'}</li>
            <li>DB: {health.services.db ? 'connected' : 'offline'}</li>
            <li>Timestamp: {health.timestamp}</li>
          </ul>
        ) : (
          <p>Loading health…</p>
        )}
      </section>

      <section className="card">
        <h2>Hello</h2>
        {hello ? (
          <div>
            <p>{hello.message}</p>
            {hello.capabilityHint && <p className="hint">{hello.capabilityHint}</p>}
          </div>
        ) : (
          <p>Invoke the API to see the greeting and capability hint.</p>
        )}
      </section>
    </div>
  );
};

export default App;
