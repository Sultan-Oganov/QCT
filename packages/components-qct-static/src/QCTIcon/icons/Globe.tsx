import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Globe(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fill="currentColor"
        d="M12 23.625A11.612 11.612 0 0 1 .375 12C.375 5.57 5.569.375 12 .375 18.43.375 23.625 5.569 23.625 12c0 6.43-5.194 11.625-11.625 11.625Zm0-21.32c-5.343 0-9.696 4.352-9.696 9.695S6.657 21.696 12 21.696s9.696-4.353 9.696-9.696S17.343 2.304 12 2.304Z"
      />
      <path
        fill="currentColor"
        d="M12 23.625c-3.435 0-5.25-5.986-5.25-11.625C6.75 6.36 8.565.375 12 .375S17.25 6.361 17.25 12c0 5.64-1.815 11.625-5.25 11.625Zm0-21.32c-1.374 0-3.336 3.759-3.336 9.695s1.962 9.696 3.336 9.696c1.374 0 3.336-3.76 3.336-9.696S13.374 2.304 12 2.304Z"
      />
      <path
        fill="currentColor"
        d="M22.588 12.75H1.362c-.543 0-.987-.422-.987-.938 0-.515.444-.937.987-.937h21.276c.543 0 .987.422.987.938-.05.515-.494.937-1.037.937Z"
      />
    </SVGIcon>
  );
}
