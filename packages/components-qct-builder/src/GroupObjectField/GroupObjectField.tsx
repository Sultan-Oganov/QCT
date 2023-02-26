import { ClassProps } from '@qctoken/register';
import {
  observer,
  useGlobalQueryParams,
  useGlobalSelectRecord,
  useModel,
} from '@qctoken/store';
import { GroupObjectFieldModel } from './GroupObjectFieldModel';
import type { GroupObjectFieldRecord, GroupObjectFieldNameType } from './types';
import { useStyles } from './GroupObjectField.styles';
import { GroupObject } from './components/GroupObject';
import { useField } from '@qctoken/form';

export const GroupObjectField = observer(function GroupObjectField(
  props: ClassProps<GroupObjectFieldNameType>,
) {
  const { bc } = props;
  const [store] = useModel(GroupObjectFieldModel, props);
  const styles = useStyles();

  useGlobalSelectRecord(store, props.pageStore, bc.setglobal);
  useGlobalQueryParams(store, props.pageStore, bc.queryParams);

  const field = useField({
    name: bc.name,
    value: null,
  });
  const handleClick = (id: any) => {
    field.setValue(id);
  };

  return (
    <div css={[styles.root, { height: bc.height }]}>
      {store.requestStore.records?.map((record: GroupObjectFieldRecord) => (
        <GroupObject
          key={record.id}
          name={record.name}
          record={record}
          onClick={handleClick}
        />
      ))}
    </div>
  );
});
