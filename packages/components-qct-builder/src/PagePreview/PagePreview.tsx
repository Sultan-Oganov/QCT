import { ClassProps, mapComponents } from '@qctoken/register';
import { observer, useGlobalQueryParams, useModel } from '@qctoken/store';
import { type ScreenSize, SizeWidth, VAR_SCREEN_SIZE } from '@qctoken/theme';
import { PageModel } from '@qctoken/page';
import { useMemo, useState, useEffect } from 'react';
import { ErrorBoundaryPagePreview } from './ErrorBoundaryPagePreview';
import { PagePreviewModel } from './PagePreviewModel';
import type { PagePreviewNameType } from './types';
import { useStyles } from './PagePreview.styles';

const SIZES: ScreenSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const screenSizeToMaxWidth = (screenSize: ScreenSize) => {
  switch (true) {
    case screenSize == 'xs':
      return SizeWidth.sm;
    case screenSize == 'sm':
      return SizeWidth.md;
    case screenSize == 'md':
      return SizeWidth.lg;
    case screenSize == 'lg':
      return SizeWidth.xl;
  }
};

export const PagePreview = observer(function PagePreview(
  props: ClassProps<PagePreviewNameType>,
) {
  const styles = useStyles();
  const [store] = useModel(PagePreviewModel, props);
  const [screenSize, setScreenSize] = useState<ScreenSize>('xl');
  const pageStoreNew = useMemo(
    () => new PageModel(props.bc, { pageStore: props.pageStore }),
    [],
  );

  useGlobalQueryParams(store, props.pageStore, props.bc.queryParams);

  const handleChangeScreenSize = (ss: ScreenSize) => {
    pageStoreNew.globalValues.set(VAR_SCREEN_SIZE, ss);
    setScreenSize(ss);
  };

  useEffect(() => {
    handleChangeScreenSize(screenSize);
  }, []);

  return (
    <div css={styles.root}>
      <div css={styles.actions}>
        <div>
          {SIZES.map((size) => (
            <button
              key={size}
              css={[styles.button, size === screenSize && styles.buttonActive]}
              onClick={() => handleChangeScreenSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div>
          <button css={styles.button} onClick={store.requestStore.refresh}>
            Reload
          </button>
        </div>
      </div>
      {store.requestStore.isLoading ? (
        'Loading...'
      ) : (
        <div
          key={screenSize}
          css={[styles.content, { maxWidth: screenSizeToMaxWidth(screenSize) }]}
        >
          <ErrorBoundaryPagePreview pageStore={pageStoreNew}>
            {mapComponents(store.childs, { ...props, pageStore: pageStoreNew })}
          </ErrorBoundaryPagePreview>
        </div>
      )}
    </div>
  );
});
