import type { ClassProps } from '@qctoken/register/lib/types';
import type { RoadMapBlockNameType } from './types';
import { mapComponentOne } from '@qctoken/register';

export function RoadMapBlock(props: ClassProps<RoadMapBlockNameType>) {
  const { bc } = props;
  return (
    <>
      <div
        css={[
          {
            flex: '0 1 49%',
            display: 'flex',
            justifyContent: 'space-between',
            height: 300,
          },
        ]}
      >
        {bc.child?.map((item) => mapComponentOne(item, props))}
      </div>
    </>
  );
}
