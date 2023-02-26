import { useEffect, useMemo } from 'react';
import { ClassProps, mapComponents } from '@qctoken/register';
import { observer, reaction } from '@qctoken/store';
import { VAR_SCREEN_SIZE } from '@qctoken/theme';
import { PageModelPath, usePageGlobals } from '@qctoken/page';
import { type PageNameType } from './types';

export const Page = observer(function (props: ClassProps<PageNameType>) {
  const { bc, pageStore: parentPageStore } = props;
  const pageStore = useMemo(
    () =>
      new PageModelPath(bc, {
        pageStore: parentPageStore,
        screenSizeName: VAR_SCREEN_SIZE,
      }),
    [],
  );
  const pageChilds = pageStore.childsRequest.record?.objects;

  useEffect(() => {
    if (pageStore.childsRequest.record === undefined) {
      pageStore.loadPage();
    }

    return reaction(
      () => parentPageStore.globalValues.get(VAR_SCREEN_SIZE),
      (screenSize) => pageStore.globalValues.set(VAR_SCREEN_SIZE, screenSize),
    );
  }, []);

  usePageGlobals(bc, pageStore);

  if (!pageChilds) {
    return <>...loading</>;
  }

  return (
    <>
      {mapComponents(pageChilds, {
        ...props,
        pageStore,
      })}
    </>
  );
});
