import { Fragment } from 'react';
import { observer } from '@qctoken/store';
import { useTheme } from '@qctoken/theme';
import { ModelSelectorModel } from '../ModelSelectorModel';
import ArrowUpIcon from '../assets/svg/ArrowUpIcon';
import LineIcon from '../assets/svg/LineIcon';
import MoveIcon from '../assets/svg/MoveIcon';
import { useStyles } from './ModelSelectorRow.styles';
import { type ClassProps, mapComponentOne } from '@qctoken/register';
import type { ModelSelectorNameType } from '../types';
import { ModelSelectorGroupRow } from './ModelSelectorGroupRow';

interface Props extends ClassProps<ModelSelectorNameType> {
  store: ModelSelectorModel;
  records: Record<string, unknown>[];
  indent: number;
}

const groupRecords = <R extends Record<string, unknown>>(
  groupKey: string,
  records?: R[],
): Record<string, R[]> => {
  if (!records) {
    return {};
  }

  return records.reduce<Record<string, R[]>>((data, item) => {
    const key = item[groupKey];

    if (typeof key === 'string') {
      const group = data[key] || [];
      group.push(item);
      data[key] = group;
    }
    return data;
  }, {});
};

export const ModelSelectorRow = observer(function ModelSelectorRow({
  store,
  records,
  indent,
  ...props
}: Props) {
  const { bc } = store;
  const styles = useStyles();
  const theme = useTheme();

  return (
    <>
      {bc.showFieldAll && (
        <div
          css={[
            styles.root,
            {
              padding: theme.spacing(2, 4, 2, 2 + indent * 2),
              backgroundColor: `${theme.colors.primary.main}1a`,
            },
            bc.hasItemDivider && {
              borderBottom: `1px solid ${theme.colors.disabled.background}`,
            },
          ]}
        >
          <div
            css={styles.title}
            onClick={() => store.requestStore.selectRecords([])}
          >
            All
          </div>
        </div>
      )}
      {records.map((record) => (
        <Fragment key={record.id as number}>
          <div
            css={[
              styles.root,
              {
                padding: theme.spacing(2, 4, 2, 2 + indent * 2),
              },
              store.requestStore.selectedRecord === record && {
                backgroundColor: `${theme.colors.primary.main}1a`,
              },
              bc.hasItemDivider && {
                borderBottom: `1px solid ${theme.colors.disabled.background}`,
              },
            ]}
          >
            {bc.groupKey && (
              <div css={styles.rootIcon}>
                {indent == 0 ? <ArrowUpIcon /> : <LineIcon />}
              </div>
            )}
            <div
              css={styles.title}
              title={record[bc.displayName] as string}
              onClick={() => store.requestStore.selectRecords([record])}
            >
              {record[bc.displayName] as string}
            </div>
            {bc.addLeaf && (
              <>
                <div css={styles.actionRoot}>
                  <div css={styles.actionAdd}>
                    {bc.addIcon &&
                      mapComponentOne(bc.addIcon, { ...props, values: record })}
                  </div>

                  <div css={styles.actionMove}>
                    <MoveIcon />
                  </div>
                </div>
              </>
            )}
          </div>
          {bc.groupKey
            ? Object.entries(
                groupRecords(
                  bc.groupKey,
                  store.recordsMap[record.id as number],
                ),
              )
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([name, nestedRecords]) => (
                  <ModelSelectorGroupRow
                    key={name}
                    name={name}
                    store={store}
                    records={nestedRecords}
                    indent={indent}
                    {...props}
                  />
                ))
            : store.recordsMap[record.id as number] && (
                <ModelSelectorRow
                  store={store}
                  records={store.recordsMap[record.id as number]}
                  indent={indent + 1}
                  {...props}
                />
              )}
        </Fragment>
      ))}
    </>
  );
});
