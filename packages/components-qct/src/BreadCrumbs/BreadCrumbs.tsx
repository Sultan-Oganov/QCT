import { useMemo, useState } from 'react';
import {
  ClassProps,
  makeBC,
  BuilderConfig,
  mapComponentOne,
} from '@qctoken/register';
import type { BreadCrumbsNameType } from './types';
import { useStyles } from './BreadCrumbs.styles';

const isLast = (index: number, arr: (string | BuilderConfig)[]) =>
  index === arr.length - 1;

export function BreadCrumbs(props: ClassProps<BreadCrumbsNameType>) {
  const { bc } = props;
  const styles = useStyles();
  const [isShow, setIsShow] = useState(false);

  const showAllItems = () => setIsShow((prev) => !prev);

  const childs: (string | BuilderConfig)[] = useMemo(() => {
    if (bc.childs.length > 3) {
      return [
        bc.childs[0],
        'dots',
        bc.childs[bc.childs.length - 2],
        bc.childs[bc.childs.length - 1],
      ];
    }
    return bc.childs;
  }, [bc.childs.length]);

  const arrowIcon = useMemo(
    () =>
      mapComponentOne(
        makeBC('QCT.STATIC.ICON', {
          pageObjectId: 'Icon',
          objectId: 'Icon',
          // @ts-ignore
          name: 'arrow-right',
          width: '18px',
          color: 'common.nonActive',
        }),
        props,
      ),
    [],
  );

  return (
    <div css={styles.root}>
      {(isShow ? bc.childs : childs).map((el, i, arr) => {
        const last = isLast(i, arr);
        return typeof el === 'string' ? (
          <div key={i} css={styles.item}>
            <div css={styles.dots} onClick={showAllItems}>
              &middot;&middot;&middot;
            </div>
            {arrowIcon}
          </div>
        ) : (
          <div key={i} css={[styles.item, last && styles.lastItem]}>
            <div css={styles.itemText}>{mapComponentOne(el, props)}</div>
            {!last && arrowIcon}
          </div>
        );
      })}
    </div>
  );
}
