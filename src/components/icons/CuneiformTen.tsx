import type { SVGProps } from 'react';

export default function CuneiformTen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 4 L7 12 L15 20" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}
