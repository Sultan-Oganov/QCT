import type { PropsWithChildren, SVGProps } from 'react';

export function SVGIcon({
  children,
  ...props
}: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="transparent">
      {children}
    </svg>
  );
}
