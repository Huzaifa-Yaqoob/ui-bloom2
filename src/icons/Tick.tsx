import React from 'react';
import type { SVGProps } from 'react';

export function Tick(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <polyline
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        points="2.75 8.75 6.25 12.25 13.25 4.75"
      ></polyline>
    </svg>
  );
}
