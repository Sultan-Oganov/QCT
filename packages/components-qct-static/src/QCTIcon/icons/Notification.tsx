import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Notification(
  props: PropsWithChildren<SVGProps<SVGSVGElement>>,
) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.212 4.64C7.45 3.065 9.368 1.874 12 1.874s4.551 1.191 5.788 2.764C19 6.183 19.565 8.1 19.565 9.658c0 .44-.013.77-.024 1.015l-.005.141c-.01.264-.007.376.01.483.042.257.177.583.775 1.886a.932.932 0 0 1 .02.048c.448 1.137.35 2.196-.19 3.095-.51.851-1.362 1.467-2.262 1.91-1.8.886-4.166 1.264-5.889 1.264-1.723 0-4.09-.378-5.89-1.264-.9-.443-1.751-1.06-2.262-1.91-.54-.9-.637-1.959-.19-3.095a.973.973 0 0 1 .02-.048c.6-1.303.734-1.629.776-1.886.018-.107.02-.219.01-.483l-.005-.14c-.01-.247-.024-.575-.024-1.016 0-1.56.564-3.475 1.777-5.019ZM7.727 5.8C6.79 6.993 6.352 8.496 6.352 9.657c0 .4.012.686.022.931l.007.154c.01.274.016.549-.034.856-.092.56-.368 1.161-.887 2.29l-.023.05c-.238.62-.157 1.06.06 1.422.249.414.738.822 1.47 1.182 1.462.72 3.516 1.065 5.033 1.065 1.517 0 3.57-.345 5.033-1.065.731-.36 1.22-.768 1.47-1.182.217-.362.298-.803.06-1.422l-.023-.05c-.519-1.129-.795-1.73-.887-2.29a4.121 4.121 0 0 1-.033-.856l.006-.154c.01-.245.022-.532.022-.931 0-1.161-.436-2.664-1.375-3.859-.916-1.165-2.3-2.032-4.273-2.032-1.973 0-3.357.867-4.273 2.032ZM8.947 20.835c.397-.304 1.006-.274 1.36.065.977.937 2.415.93 3.386 0 .355-.34.965-.369 1.361-.065.397.304.43.826.075 1.165-1.73 1.655-4.508 1.678-6.259 0-.355-.34-.32-.862.077-1.165Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}