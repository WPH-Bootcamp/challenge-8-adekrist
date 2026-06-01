import type { ReactElement } from 'react';
import type { IconName } from '../types/content';

type IconProps = {
  name: IconName;
  className?: string;
};

const iconPaths: Record<IconName, ReactElement> = {
  bolt: (
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  ),
  code: (
    <>
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  cloud: (
    <path d="M6 18h11a4 4 0 0 0 .5-7.97A6.5 6.5 0 0 0 5.1 8.2 4.8 4.8 0 0 0 6 18Z" />
  ),
  shield: (
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  ),
  cart: (
    <>
      <path d="M6 6h15l-2 8H8L6 3H3" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </>
  ),
  palette: (
    <>
      <path d="M12 22a10 10 0 1 1 10-10 3 3 0 0 1-3 3h-2.2a1.8 1.8 0 0 0-1.27 3.07l.37.37A2.1 2.1 0 0 1 14.4 22H12Z" />
      <circle cx="7.5" cy="10" r=".8" />
      <circle cx="10.5" cy="7" r=".8" />
      <circle cx="14.5" cy="7.5" r=".8" />
    </>
  ),
  growth: (
    <>
      <path d="M3 19h18" />
      <path d="M6 16V9" />
      <path d="M12 16V5" />
      <path d="M18 16v-4" />
      <path d="m7 9 5-4 5 7" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1 1-2 4-2 4s3-1 4-2" />
      <path d="M7 13 4 10s5-7 13-7l4 4c0 8-7 13-7 13l-3-3" />
      <circle cx="15" cy="9" r="2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
      <path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7.7-2.3Z" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  check: (
    <path d="m4 12 5 5L20 6" />
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 4-4 3 3 5-7" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20" />
      <path d="M12 2a15.3 15.3 0 0 0 0 20" />
    </>
  ),
};

export function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}
