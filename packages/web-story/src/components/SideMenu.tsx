import { useTheme } from '@qctoken/theme';
import { type ConfigComponent } from '@qctoken/register/lib/types';
import { useMemo } from 'react';

type Props = {
  configs: ConfigComponent[];
  selectedType: string;
  onChangeSelectedType: (type: string) => void;
};

export function SideMenu({
  configs,
  selectedType,
  onChangeSelectedType,
}: Props) {
  const theme = useTheme();
  const groups = useMemo(
    () =>
      configs.reduce<Record<string, ConfigComponent[]>>((acc, config) => {
        if (!acc[config.group]) {
          acc[config.group] = [];
        }

        acc[config.group].push(config);

        return acc;
      }, {}),
    [configs],
  );

  return (
    <div
      css={{
        width: 232,
        flexShrink: 0,
        padding: theme.spacing(4, 6),
        backgroundColor: theme.colors.common.white,
        borderRight: `1px solid ${theme.colors.common.stroke}`,
      }}
    >
      {Object.entries(groups).map(([groupName, groupConfigs]) => (
        <div key={groupName}>
          <div>{groupName}:</div>
          {groupConfigs.map((config) => (
            <div
              onClick={() => onChangeSelectedType(config.type)}
              key={config.type}
              css={{
                cursor: 'pointer',
                marginLeft: 16,
                color: config.type === selectedType ? 'green' : 'blue',
              }}
            >
              {config.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
