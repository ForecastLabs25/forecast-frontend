'use client';
import { useEffect, useState } from 'react';

export default function HealthPage() {
  const base = process.env.NEXT_PUBLIC_API_BASE; // kan være undefined nå
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function run() {
      if (!base) { setData({ note: 'NEXT_PUBLIC_API_BASE is not set yet' }); return; }
      try {
        const r = await fetch(`${base}/health`);
        setData(await r.json());
      } catch (e: any) {
        setData({ error: String(e) });
      }
    }
    run();
  }, [base]);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Frontend health</h1>
      <p><b>NEXT_PUBLIC_API_BASE:</b> {base ?? '(not set)'}</p>
      <pre style={{ background:'#f5f5f5', padding:'1rem', borderRadius:8 }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
