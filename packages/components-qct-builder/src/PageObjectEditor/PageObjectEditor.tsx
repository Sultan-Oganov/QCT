import { SyntheticEvent, useState, useCallback, useEffect } from 'react';
import { ClassProps, mapComponentOne } from '@qctoken/register';
import { observer, useGlobalQueryParams, useModel } from '@qctoken/store';
import { useTheme } from '@qctoken/theme';
import { FormContext, useForm } from '@qctoken/form';
import { Header } from './components/Header/Header';
import { POCommonForm } from './components/POCommonForm/POCommonForm';
import { ChooseControl } from './components/ChooseControl/ChooseControl';
import type { PageObjectEditorNameType } from './types';
import { PageObjectEditorModel } from './PageObjectEditorModel';
import { useStyles } from './PageObjectEditor.styles';

type ChangeInputInfo = {
  groupAttrId: number;
  pageObjectId: number;
  deleteId?: number;
  value: unknown;
};

export const PageObjectEditor = observer(function PageObjectEditorObserver(
  props: ClassProps<PageObjectEditorNameType>,
) {
  const { bc, pageStore } = props;
  const [store] = useModel(PageObjectEditorModel, props);
  const { record: pageObject } = store.requestStore;
  const styles = useStyles();

  const theme = useTheme();
  const [changedInputs, setChangedInputs] = useState<
    Record<string, ChangeInputInfo>
  >({});
  const [isLoading, setIsLoading] = useState(false);
  const [isOnlySaved, setIsOnlySaved] = useState(false);

  useGlobalQueryParams(store, pageStore, bc.queryParams);
  const isNotEmpty = pageObject && Object.keys(changedInputs).length > 0;
  const formStore = useForm(props, { submitQuery: bc.query });

  const handleAddChangedInputs = useCallback(
    (
      name: string,
      groupAttrId: number,
      pageObjectId: number,
      value: any,
      deleteId?: number,
    ) => {
      const data: ChangeInputInfo = {
        groupAttrId,
        pageObjectId,
        deleteId,
        value,
      };
      setChangedInputs((prev) => ({ ...prev, [name]: data }));
    },
    [],
  );
  const handleDeleteAttribute = useCallback(
    (name: string, defaultValue: unknown, pageObjectId?: number) => {
      setChangedInputs((prev) => {
        if (typeof pageObjectId === 'undefined') {
          const newChangedInputs = { ...prev };
          delete newChangedInputs[name];
          return newChangedInputs;
        }

        return {
          ...prev,
          [name]: {
            ...prev[name],
            value: defaultValue,
            deleteId: pageObjectId,
          },
        };
      });
    },
    [],
  );
  const handleOnUpdated = (noRefresh = false) => {
    const nestedStore =
      bc.onInstanceUpdate &&
      pageStore.stores.get(bc.onInstanceUpdate.pageObjectId);

    nestedStore?.invokeHandler([bc, {}]);

    if (!noRefresh) {
      store.requestStore.refresh();
    }
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const list = Object.values(changedInputs);

    setIsLoading(true);

    await Promise.all(
      list.map((item) =>
        item.deleteId === undefined
          ? store.requestStore.post(JSON.stringify(item), {
              url: '/api/v1/builder/page_object_attr/',
              noRefresh: true,
            })
          : store.requestStore.delete({
              url: `/api/v1/builder/page_object_attr/${item.deleteId}/`,
              noRefresh: true,
            }),
      ),
    );

    await store.requestStore.refresh();
    setChangedInputs({});
    setIsLoading(false);
  };

  const handleDeletePageObject = async (id: number) => {
    await store.requestStore.delete({
      params: { id },
      url: '/api/v1/builder/page_object/{id}/',
      noRefresh: true,
    });

    if (!store.requestStore.isError) {
      store.requestStore.clear();
      handleOnUpdated(true);
    }
  };

  useEffect(() => {
    setChangedInputs({});
  }, [pageObject?.id]);

  return (
    <div key={pageObject?.id} css={styles.root}>
      {bc.onInstanceUpdate && mapComponentOne(bc.onInstanceUpdate, props)}
      {pageObject && (
        <>
          <Header
            pageObject={pageObject}
            onDeletePageObject={handleDeletePageObject}
          />
          <POCommonForm
            pageObject={pageObject}
            onUpdated={handleOnUpdated}
            pageStore={pageStore}
          />
          <div css={styles.visibleActions}>
            <button
              css={[
                styles.visibleButton,
                !isOnlySaved && styles.visibleButtonSelected,
              ]}
              onClick={() => setIsOnlySaved(false)}
            >
              All
            </button>
            <button
              css={[
                styles.visibleButton,
                isOnlySaved && styles.visibleButtonSelected,
              ]}
              onClick={() => setIsOnlySaved(true)}
            >
              Only Saved
            </button>
          </div>
        </>
      )}
      <FormContext.Provider value={formStore}>
        <form onSubmit={handleSubmit} css={{ overflowY: 'auto' }}>
          {pageObject &&
            !isLoading &&
            store.sortedGroupObjectAttrs?.map((attr) => (
              <ChooseControl
                key={attr.id}
                pageObject={pageObject}
                attr={attr}
                changedValue={changedInputs[attr.name]}
                isOnlySaved={isOnlySaved}
                onAddChangedInputs={handleAddChangedInputs}
                onDeleteAttribute={handleDeleteAttribute}
              />
            ))}

          {isNotEmpty && (
            <div
              css={{
                width: '100%',
                position: 'sticky',
                bottom: 0,
              }}
            >
              <button
                type="submit"
                disabled={isLoading}
                css={{
                  cursor: 'pointer',
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  background: isLoading
                    ? theme.colors.disabled.background
                    : theme.colors.primary.main,
                  color: theme.colors.common.white,
                  padding: theme.spacing(4, 0),
                }}
              >
                Update
              </button>
            </div>
          )}
        </form>
      </FormContext.Provider>
    </div>
  );
});

export default PageObjectEditor;
