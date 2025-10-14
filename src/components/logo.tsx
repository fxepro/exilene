import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="200"
      height="50"
      className={cn("fill-current text-foreground", props.className)}
      {...props}
    >
      <title>Exilene Logo</title>
      <text
        x="10"
        y="35"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="32"
        fontWeight="bold"
        letterSpacing="1"
      >
        EXILENE
      </text>
    </svg>
  );
}
