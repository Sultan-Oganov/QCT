import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Like(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.468 11.438a1.017 1.017 0 0 0-.62-.356 9.596 9.596 0 0 1-5.17-2.685 9.703 9.703 0 0 1-1.767-2.423 9.524 9.524 0 0 1-.93-2.85 1.042 1.042 0 0 0-2.055 0 9.589 9.589 0 0 1-2.715 5.288 9.607 9.607 0 0 1-5.137 2.681 1.039 1.039 0 0 0 0 2.033c.975.167 1.919.485 2.797.94a9.709 9.709 0 0 1 2.378 1.76 9.679 9.679 0 0 1 1.721 2.332 9.59 9.59 0 0 1 .949 2.741c.048.242.181.459.375.611a1.043 1.043 0 0 0 1.331 0c.195-.151.328-.368.375-.61a9.66 9.66 0 0 1 7.845-7.774 1.043 1.043 0 0 0 .866-1.02c0-.245-.086-.481-.243-.668Zm-7.306 2.91a11.738 11.738 0 0 0-2.223 3.094 11.602 11.602 0 0 0-2.228-3.087 11.678 11.678 0 0 0-3.131-2.25 11.625 11.625 0 0 0 3.131-2.223 11.714 11.714 0 0 0 2.25-3.169 11.772 11.772 0 0 0 5.355 5.385c-1.169.57-2.235 1.33-3.153 2.25Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
