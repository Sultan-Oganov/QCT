import { useEffect, useMemo } from 'react';
import { ClassProps, mapComponents } from '@qctoken/register';
import { observer, reaction } from '@qctoken/store';
import { VAR_SCREEN_SIZE } from '@qctoken/theme';
import { PageModelId, usePageGlobals } from '@qctoken/page';
import { type RoutePageNameType } from './types';
import { LoadParams } from './components/LoadParams';

export const Page = observer(function (props: ClassProps<RoutePageNameType>) {
  const { pageStore: parentPageStore, bc } = props;
  const pageStore = useMemo(
    () =>
      new PageModelId(bc, {
        pageStore: parentPageStore,
        screenSizeName: VAR_SCREEN_SIZE,
      }),
    [],
  );
  const pageChilds = pageStore.childsRequest.record?.objects;

  useEffect(() => {
    pageStore.loadPage();

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
      {props.bc.isSetParamsToStore && <LoadParams pageStore={pageStore} />}
      {mapComponents(pageChilds, {
        ...props,
        pageStore,
      })}
    </>
  );
});
