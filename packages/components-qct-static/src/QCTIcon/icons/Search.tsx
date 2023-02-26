import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Search(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.81818C5.48079 1.81818 1.81818 5.48079 1.81818 10C1.81818 14.5192 5.48079 18.1818 10 18.1818C14.5183 18.1818 18.1818 14.5191 18.1818 10C18.1818 5.48085 14.5183 1.81818 10 1.81818ZM0 10C0 4.47663 4.47663 0 10 0C15.5223 0 20 4.47657 20 10C20 15.5234 15.5223 20 10 20C4.47663 20 0 15.5234 0 10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5006 20.5385C20.9694 20.5385 20.5385 20.9701 20.5385 21.4994C20.5385 22.031 20.9694 22.4615 21.5006 22.4615C22.031 22.4615 22.4615 22.0317 22.4615 21.4994C22.4615 20.9694 22.031 20.5385 21.5006 20.5385ZM19 21.4994C19 20.1198 20.1205 19 21.5006 19C22.8814 19 24 20.1205 24 21.4994C24 22.8807 22.8814 24 21.5006 24C20.1205 24 19 22.8814 19 21.4994Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
