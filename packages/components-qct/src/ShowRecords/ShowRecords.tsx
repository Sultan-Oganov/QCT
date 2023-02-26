import { Fragment } from 'react';
import {
  ClassProps,
  makeBC,
  mapComponentOne,
  mapComponents,
} from '@qctoken/register';
import { type ShowRecordsNameType } from './types';
import {
  observer,
  useGlobalQueryParams,
  useModel,
  useSetGlobal,
} from '@qctoken/store';
import { ShowRecordsModel } from './ShowRecordsModel';
import { runOperator } from '@qctoken/executor';
import { useStyles } from './ShowRecords.styles';

export function ShowRecordsBase(props: ClassProps<ShowRecordsNameType>) {
  const { bc, pageStore, values } = props;
  const { queryParams, alt } = bc;
  const styles = useStyles();
  const [store] = useModel(ShowRecordsModel, props);
  const records = bc.mapRecords
    ? runOperator({ values, pageStore }, bc.mapRecords)
    : store.records;

  useSetGlobal(pageStore, store.globalValue, bc.setGlobal);
  useGlobalQueryParams(store, pageStore, queryParams, values);
  if (
    !Array.isArray(records) ||
    (records.length === 0 && !store.requestStore.isLoading)
  ) {
    return <h2 css={styles.alt}>{alt}</h2>;
  }

  if (store.requestStore.isLoading) {
    return (
      <>
        {mapComponentOne(
          makeBC('QCT.STATIC.LOADER', {
            pageObjectId: 'loader',
            objectId: 'loader',
            // @ts-ignore
            color: bc.loaderColor,
            size: 50,
          }),
          props,
        )}
      </>
    );
  }

  if (records.length === 0) {
    return <>{mapComponents(bc.notFoundChilds, props)}</>;
  }

  return (
    <>
      {records.map((record, idx) => (
        <Fragment key={record.id ?? idx}>
          {mapComponents(props.bc.childs, {
            ...props,
            values: record,
          })}
        </Fragment>
      ))}
    </>
  );
}

export const ShowRecords = observer(ShowRecordsBase);
