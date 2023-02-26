import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Close(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        d="M16.32 6.264c.348-.347.946-.312 1.336.079.39.39.426.988.079 1.335L7.678 17.736c-.347.347-.945.312-1.335-.078-.39-.391-.426-.989-.079-1.336L16.321 6.264Z"
        fill="currentColor"
      />
      <path
        d="M6.264 7.678c-.347-.347-.312-.945.079-1.335.39-.39.988-.426 1.335-.079l10.057 10.057c.347.347.312.945-.078 1.335-.391.39-.989.426-1.336.079L6.264 7.678Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
