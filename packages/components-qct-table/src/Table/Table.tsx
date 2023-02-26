import { ChangeEvent, useMemo, useState } from 'react';
import {
  type ClassProps,
  mapComponents,
  mapComponentOne,
  makeBC,
} from '@qctoken/register';
import type { TableNameType } from './types';
import { useStyles } from './Table.styles';
import {
  observer,
  Observer,
  useGlobalQueryParams,
  useModel,
} from '@qctoken/store';
import { TableModel } from './TableModel';
import { TableContext } from '../store/context';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';

export const Table = observer(function Table(props: ClassProps<TableNameType>) {
  const { bc, pageStore } = props;
  const [store] = useModel(TableModel, props);
  const isSelected = store.selectedItems.length > 0;
  const styles = useStyles(bc, isSelected);
  useGlobalQueryParams(store, pageStore, bc.queryParams);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  const selectedHeader = useMemo(
    //plus '1', because added checkbox
    () => Array(bc.headers.length + 1).fill(null),
    [],
  );

  const handleChangeCheckbox = (
    event: ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    store.toggleIsSelected(event.currentTarget.checked, id);
  };

  const handleChangeAllCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    store.selectAll(event.currentTarget.checked);
  };

  const handleUndoSelection = () => {
    store.selectAll(false);
  };

  const handleDelete = async () => {
    await Promise.all(
      store.selectedItems.map((item) => {
        store.requestStore
          .delete({
            url: `/api/v1/lms/course/${item}/`,
            noRefresh: true,
          })
          .finally(() => {
            if (store.requestStore.isError) {
              const error = store.requestStore.errorResponse.detail;
              if (bc.onError) {
                pageStore.stores
                  .get(bc.onError.pageObjectId)
                  ?.invokeHandler([bc, { values: error }]);
              }
            }
          });
      }),
    );
    await store.requestStore.refresh();
    toggleModal();
    handleUndoSelection();
  };

  return (
    <TableContext.Provider value={{ isSelected: store.isSelected }}>
      <div css={styles.root}>
        <table css={styles.table}>
          <thead css={styles.thead}>
            <tr css={styles.header}>
              {bc.addSelect && (
                <td>
                  <div css={styles.checkbox}>
                    <input
                      checked={store.allIsSelected}
                      type="checkbox"
                      onChange={handleChangeAllCheckbox}
                    />
                  </div>
                </td>
              )}
              {mapComponents(bc.headers, props)}
            </tr>
            {bc.addSelect && isSelected && (
              <tr css={styles.selectedRow}>
                {selectedHeader.map((_, i, arr) =>
                  i === 1 ? (
                    <td key={i}>
                      <div css={styles.selectedCount}>
                        Выбран {store.selectedItems.length} курс
                      </div>
                    </td>
                  ) : i === arr.length - 2 ? (
                    <td key={i}>
                      <button
                        onClick={handleUndoSelection}
                        css={[styles.btn, styles.undo]}
                      >
                        Снять выделение
                      </button>
                    </td>
                  ) : i === arr.length - 1 ? (
                    <td key={i}>
                      <button
                        onClick={toggleModal}
                        css={[styles.btn, styles.delete]}
                      >
                        {mapComponentOne(
                          makeBC('QCT.STATIC.ICON', {
                            pageObjectId: 'Icon',
                            objectId: 'Icon',
                            // @ts-ignore
                            name: 'delete',
                            width: '16px',
                            color: 'common.white',
                          }),
                          props,
                        )}
                        Удалить
                      </button>
                    </td>
                  ) : (
                    <td key={i}></td>
                  ),
                )}
              </tr>
            )}
          </thead>
          <Observer
            render={() => (
              <tbody css={styles.body}>
                {store.records.map((record, index) => {
                  return (
                    <tr
                      key={record?.id || index}
                      css={[
                        styles.tr,
                        store.isSelected(record.id) && styles.selected,
                      ]}
                    >
                      {bc.addSelect && (
                        <td>
                          <div css={styles.checkbox}>
                            <input
                              checked={store.isSelected(record.id)}
                              type="checkbox"
                              onChange={(event) =>
                                handleChangeCheckbox(event, record.id)
                              }
                            />
                          </div>
                        </td>
                      )}
                      {mapComponents(bc.columns, { ...props, values: record })}
                    </tr>
                  );
                })}
              </tbody>
            )}
          />
        </table>
        <Observer
          render={() => (
            <>
              {store.requestStore.records.length === 0 && bc.notFound ? (
                <p css={styles.notFound}>{bc.notFound}</p>
              ) : null}
            </>
          )}
        />
      </div>
      <ConfirmModal
        modalIsOpen={modalIsOpen}
        toggleModal={toggleModal}
        handleDelete={handleDelete}
        isLoading={store.requestStore.isLoading}
      />
      {bc.onError && mapComponentOne(bc.onError, props)}
    </TableContext.Provider>
  );
});
