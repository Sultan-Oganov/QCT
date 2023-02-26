import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function JobApply(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        d="M22.118 11.34v1.921a.937.937 0 1 0 1.874 0V7.546a3.753 3.753 0 0 0-3.748-3.749H16.21V2.576A2.578 2.578 0 0 0 13.635 0h-3.277a2.578 2.578 0 0 0-2.576 2.576v1.221H3.75A3.753 3.753 0 0 0 0 7.547v10.918a3.753 3.753 0 0 0 3.749 3.748h7.92a.937.937 0 1 0 0-1.874h-7.92a1.876 1.876 0 0 1-1.875-1.874V11.34h9.232v1.408a.937.937 0 1 0 1.874 0V11.34h9.138ZM9.657 2.576c0-.387.314-.702.7-.702h3.278c.386 0 .7.315.7.702v1.221H9.658V2.576Zm-7.783 4.97c0-1.033.841-1.874 1.875-1.874h16.495c1.033 0 1.874.84 1.874 1.874v1.92H1.874v-1.92Zm21.852 14.846-2.16-2.159c.409-.649.646-1.416.646-2.239a4.222 4.222 0 0 0-4.218-4.217 4.222 4.222 0 0 0-4.217 4.217 4.222 4.222 0 0 0 4.217 4.218c.826 0 1.598-.24 2.249-.651l2.157 2.157a.935.935 0 0 0 1.326 0 .937.937 0 0 0 0-1.326Zm-8.075-4.398a2.346 2.346 0 0 1 2.343-2.343 2.346 2.346 0 0 1 2.343 2.343 2.346 2.346 0 0 1-2.343 2.343 2.346 2.346 0 0 1-2.343-2.343Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
