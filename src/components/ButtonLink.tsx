import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'dark';
};

const variants = {
  primary:
    'bg-lava text-white shadow-glow hover:-translate-y-0.5 hover:bg-[#ff735d] focus-visible:ring-lava',
  ghost:
    'border border-white/10 bg-white/[0.03] text-white hover:border-lava/50 hover:bg-lava/10 focus-visible:ring-lava',
  dark:
    'bg-ink text-white hover:-translate-y-0.5 hover:bg-panel focus-visible:ring-white',
};

export function ButtonLink({ children, className = '', variant = 'primary', ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
