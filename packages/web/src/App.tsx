import { makeBC, mapComponentOne } from '@qctoken/register';
import { PageModelRoot } from '@qctoken/page';
import {
  type ScreenSize,
  useSetScreenSize,
  VAR_SCREEN_SIZE,
  handleResize,
} from '@qctoken/theme';
import { useMemo, useCallback } from 'react';

const ROOT_PAGE_BC = makeBC('QCT.COMMON.PAGE', {
  pageObjectId: 'root',
  objectId: 'root',
});

export const App = () => {
  const pageStore = useMemo(() => {
    const pageModel = new PageModelRoot(ROOT_PAGE_BC, {});

    handleResize((screenSize: ScreenSize) => {
      pageModel.globalValues.set(VAR_SCREEN_SIZE, screenSize);
    });

    return pageModel;
  }, []);

  const handleChangeScreenSize = useCallback((screenSize: ScreenSize) => {
    pageStore.globalValues.set(VAR_SCREEN_SIZE, screenSize);
  }, []);

  useSetScreenSize(handleChangeScreenSize);

  return <>{mapComponentOne(ROOT_PAGE_BC, { pageStore, visible: true })}</>;
};
