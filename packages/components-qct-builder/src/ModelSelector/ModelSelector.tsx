import { ClassProps } from '@qctoken/register';
import {
  observer,
  useGlobalQueryParams,
  useGlobalSelectRecord,
  useModel,
} from '@qctoken/store';
import { useTheme } from '@qctoken/theme';
import { ModelSelectorRow } from './components/ModelSelectorRow';
import { ModelSelectorModel } from './ModelSelectorModel';
import type { ModelSelectorNameType } from './types';
import ArrowUpIcon from './assets/svg/ArrowUpIcon';
import ArrowDownIcon from './assets/svg/ArrowDownIcon';
import { useStyles } from './ModelSelector.styles';
import { mapComponentOne } from '../../../register/lib/components';

export const ModelSelector = observer(function ModelSelector(
  props: ClassProps<ModelSelectorNameType>,
) {
  const { bc } = props;
  const [store] = useModel(ModelSelectorModel, props);
  const theme = useTheme();
  const styles = useStyles();

  useGlobalSelectRecord(store, props.pageStore, bc.setglobal);
  useGlobalQueryParams(store, props.pageStore, bc.queryParams);

  return (
    <div
      css={[
        styles.root,
        {
          minHeight: store.isOpen ? bc.height : undefined,
          maxHeight: store.isOpen ? bc.height : undefined,
          flexShrink: !store.isOpen || bc.height ? 0 : undefined,
          flexGrow: store.isOpen ? 1 : 0,
        },
      ]}
    >
      {!bc.hideDropdown && (
        <div css={styles.header}>
          <div onClick={store.toggleIsOpen} css={styles.toggleButton}>
            <span css={styles.toggleIcon}>
              {store.isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </span>
            <span css={theme.typography.highlighted}>{bc.title}</span>
          </div>
          <div css={styles.headerTitle}>
            {store.requestStore.selectedRecord?.[bc.displayName] && (
              <>
                <div
                  css={[theme.typography.regular, styles.headerName]}
                  title={store.requestStore.selectedRecord[bc.displayName]}
                >
                  {store.requestStore.selectedRecord[bc.displayName]}
                </div>
                {bc.editIcon &&
                  mapComponentOne(bc.editIcon, {
                    ...props,
                    values: store.requestStore.selectedRecord,
                  })}
              </>
            )}
            {bc.addIcon && mapComponentOne(bc.addIcon, props)}
          </div>
        </div>
      )}

      {store.isOpen && (
        <div css={styles.headerContent}>
          <ModelSelectorRow
            store={store}
            records={store.recordsMap.root}
            indent={0}
            {...props}
          />
        </div>
      )}
    </div>
  );
});
