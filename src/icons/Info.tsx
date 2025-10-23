import React from 'react';
import type { SVGProps } from 'react';

export function Info(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18m.05-13v.1h-.1V8z"
      ></path>
    </svg>
  );
}
