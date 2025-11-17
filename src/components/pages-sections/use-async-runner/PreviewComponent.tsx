'use client';

import { useAsyncRunner } from '@/registry/hooks/useAsyncRunner';
import { useEffect } from 'react';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (res.ok) return await res.json();
  throw new Error('Failed to fetch data');
};

function PreviewComponent() {
  const { run, isSuccess, isFailure, error, data, isPending } = useAsyncRunner({
    action: getData,
  });

  useEffect(() => {
    (async () => await run())();
  }, []);

  console.log(data, 'data');

  if (isPending) return <p>Loading...</p>;
  if (isFailure && error)
    return <p>Error: {error?.message || 'unknown error'}</p>;
  if (isSuccess && data)
    return (
      <pre>
        Success! Data: <pre>{JSON.stringify(data, null, 2)}</pre>
      </pre>
    );

  return <pre>{JSON.stringify(data)}</pre>;
}

const tsxCode = `'use client';

import { useAsyncRunner } from '@/registry/hooks/useAsyncRunner';
import { useEffect } from 'react';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (res.ok) return await res.json();
  throw new Error('Failed to fetch data');
};

function PreviewComponent() {
  const { run, isSuccess, isFailure, error, data, isPending } = useAsyncRunner({
    action: getData,
  });

  useEffect(() => {
    (async () => await run())();
  }, []);

  console.log(data, 'data');

  if (isPending) return <p>Loading...</p>;
  if (isFailure && error)
    return <p>Error: {error?.message || 'unknown error'}</p>;
  if (isSuccess && data)
    return (
      <pre>
        Success! Data: <pre>{JSON.stringify(data, null, 2)}</pre>
      </pre>
    );

  return <pre>{JSON.stringify(data)}</pre>;
}

export default PreviewComponent;`;

const jsxCode = `'use client';

import { useAsyncRunner } from '@/registry/hooks/useAsyncRunner';
import { useEffect } from 'react';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (res.ok) return await res.json();
  throw new Error('Failed to fetch data');
};

function PreviewComponent() {
  const { run, isSuccess, isFailure, error, data, isPending } = useAsyncRunner({
    action: getData,
  });

  useEffect(() => {
    (async () => {
      await run();
    })();
  }, []);

  console.log(data, 'data');

  if (isPending) return <p>Loading...</p>;

  if (isFailure && error) {
    const message = error instanceof Error ? error.message : 'unknown error';
    return <p>Error: {message}</p>;
  }

  if (isSuccess && data) {
    return (
      <div>
        <p>Success! Data:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default PreviewComponent;`;

export { jsxCode, tsxCode };

export default PreviewComponent;
