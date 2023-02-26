import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function VrGlasses(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        d="M16.526 23.981a3.156 3.156 0 0 1-1.99-.706 3.158 3.158 0 0 1-1.177-2.466 1.36 1.36 0 0 0-2.718-.003 3.16 3.16 0 0 1-1.177 2.469 3.157 3.157 0 0 1-2.658.635l-2.357-.504C1.909 22.9-.036 20.495 0 17.906v-4.412a5.631 5.631 0 0 1 5.624-5.625H8.25c1.244.05 1.243 1.826 0 1.875H5.625a3.754 3.754 0 0 0-3.75 3.75v4.412c0 1.757 1.248 3.3 2.966 3.667l2.357.504c.385.082.78-.013 1.087-.26.305-.247.48-.615.48-1.008 0-1.812 1.452-3.283 3.235-3.283s3.234 1.471 3.234 3.28c0 .396.176.764.482 1.011.305.247.701.342 1.086.26l2.357-.504a3.769 3.769 0 0 0 2.966-3.667v-4.412a3.754 3.754 0 0 0-3.75-3.75H15.75c-1.244-.05-1.243-1.826 0-1.875h2.625A5.631 5.631 0 0 1 24 13.494v4.412c.036 2.59-1.909 4.994-4.449 5.5l-2.357.504a3.2 3.2 0 0 1-.668.071Zm-7.15-8.847a2.816 2.816 0 0 0-2.813-2.812c-3.731.154-3.73 5.47 0 5.625a2.816 2.816 0 0 0 2.812-2.813Zm-1.876 0c0 .517-.42.938-.937.938-1.244-.052-1.244-1.824 0-1.875.517 0 .937.42.937.937Zm12.75 0a2.816 2.816 0 0 0-2.813-2.812c-3.73.154-3.73 5.47 0 5.625a2.816 2.816 0 0 0 2.813-2.813Zm-1.875 0c0 .517-.42.938-.938.938-1.244-.052-1.243-1.824 0-1.875.517 0 .938.42.938.937Zm5.197-8.975C20.232.098 11.249-1.599 5.285 1.617 3.108 2.733 1.43 4.304.43 6.159a.937.937 0 1 0 1.65.889c1.52-2.818 5.124-4.85 8.983-5.143l-.003 6.901a.937.937 0 1 0 1.875 0l.003-6.903c3.856.284 7.464 2.32 8.983 5.144a.938.938 0 0 0 1.652-.888Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
