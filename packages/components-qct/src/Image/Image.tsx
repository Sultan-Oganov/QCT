import { useRunExecutor } from '@qctoken/executor';
import { ClassProps } from '@qctoken/register';
import { useAdaptiveAttribute } from '@qctoken/theme';
import type { ImageNameType } from './type';

export function Image({ bc, pageStore, values }: ClassProps<ImageNameType>) {
  const adaptiveBc = useAdaptiveAttribute(bc, pageStore, ['src']);
  const src = useRunExecutor(pageStore, adaptiveBc.src, values);

  return (
    <img
      src={src}
      css={[
        {
          width: bc.width,
          height: bc.height,
          borderRadius: bc.borderRadius,
          objectFit: bc.resize,
        },
      ]}
      alt="picture"
    />
  );
}
