import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function SocialNetwork(
  props: PropsWithChildren<SVGProps<SVGSVGElement>>,
) {
  return (
    <SVGIcon {...props}>
      <path
        d="M12.14 5.625a2.816 2.816 0 0 1-2.812-2.813A2.816 2.816 0 0 1 12.141 0a2.816 2.816 0 0 1 2.812 2.813 2.816 2.816 0 0 1-2.812 2.812Zm0-3.75a.939.939 0 0 0 0 1.875.939.939 0 0 0 0-1.875Zm4.172 8.625c0-2.12-1.748-3.844-3.897-3.844h-.548c-2.15 0-3.898 1.725-3.898 3.844a.937.937 0 1 0 1.875 0c0-1.086.907-1.969 2.023-1.969h.548c1.115 0 2.023.883 2.023 1.969a.937.937 0 1 0 1.874 0Zm-12.14 7.688a2.816 2.816 0 0 1-2.813-2.813 2.816 2.816 0 0 1 2.813-2.813 2.816 2.816 0 0 1 2.812 2.813 2.816 2.816 0 0 1-2.812 2.813Zm0-3.75a.939.939 0 0 0 0 1.874.939.939 0 0 0 0-1.875Zm4.172 8.624c0-2.119-1.749-3.843-3.898-3.843h-.548C1.748 19.219 0 20.943 0 23.062a.937.937 0 1 0 1.875 0c0-1.085.907-1.968 2.023-1.968h.548c1.115 0 2.023.883 2.023 1.968a.937.937 0 1 0 1.875 0Zm11.484-4.875a2.816 2.816 0 0 1-2.812-2.812 2.816 2.816 0 0 1 2.812-2.813 2.816 2.816 0 0 1 2.813 2.813 2.816 2.816 0 0 1-2.813 2.813Zm0-3.75a.939.939 0 0 0 0 1.876.939.939 0 0 0 0-1.875ZM24 23.063c0-2.12-1.748-3.844-3.898-3.844h-.548c-2.15 0-3.898 1.724-3.898 3.843a.938.938 0 0 0 1.875 0c0-1.085.908-1.968 2.023-1.968h.548c1.116 0 2.023.883 2.023 1.968a.937.937 0 1 0 1.875 0Zm-3.384-12.094a.938.938 0 0 1-.911-.719 7.808 7.808 0 0 0-3.048-4.516.937.937 0 1 1 1.092-1.524 9.684 9.684 0 0 1 3.779 5.602.937.937 0 0 1-.912 1.157ZM4.529 10.25a7.813 7.813 0 0 1 3.007-4.486.937.937 0 1 0-1.103-1.517 9.69 9.69 0 0 0-3.727 5.565.938.938 0 0 0 1.823.438Zm10.469 10.097a.938.938 0 0 0-.558-1.79c-.824.256-1.583.38-2.323.38-.777 0-1.601-.141-2.448-.421a.937.937 0 1 0-.588 1.78c1.037.343 2.059.517 3.036.517.931 0 1.874-.153 2.88-.466Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}