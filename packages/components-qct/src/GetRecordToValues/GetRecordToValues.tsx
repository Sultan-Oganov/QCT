import { mapComponents } from '@qctoken/register';
import type { ClassProps } from '@qctoken/register/lib/types';
import { observer, useGlobalQueryParams, useModel } from '@qctoken/store';
import { GetRecordToValuesModel } from './GetRecordToValues.model';
import type { GetRecordToValuesNameType } from './types';

export const GetRecordToValues = observer(function GetRecordToValues(
  props: ClassProps<GetRecordToValuesNameType>,
) {
  const { bc } = props;
  const [store] = useModel(GetRecordToValuesModel, props);

  useGlobalQueryParams(store, props.pageStore, bc.queryParams);

  if (!store.requestStore.record) {
    return null;
  }

  return (
    <>
      {mapComponents(bc.childs, {
        ...props,
        values: store.requestStore.record,
      })}
    </>
  );
});
