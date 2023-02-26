import { useTheme } from '@qctoken/theme';
import type { BuilderConfig, ConfigComponent } from '@qctoken/register';
import { inputComponents } from '../inputs';

type Props = {
  config: ConfigComponent;
  className?: string;
  bc: BuilderConfig;
  onChangeBc(name: string, value: string | number | boolean | object): void;
};

export function ControlPanel({ config, className, bc, onChangeBc }: Props) {
  const theme = useTheme();

  return (
    <div className={className}>
      <div
        css={{
          backgroundColor: theme.colors.disabled.background,
          display: 'flex',
          fontSize: 14,
          color: theme.colors.text.disabled,
          height: 32,
        }}
      >
        <div css={{ width: '25%', padding: theme.spacing(2, 4) }}>Name</div>
        <div css={{ width: '25%', padding: theme.spacing(2, 4) }}>
          Description
        </div>
        <div css={{ width: '15%', padding: theme.spacing(2, 4) }}>Default</div>
        <div css={{ width: '35%', padding: theme.spacing(2, 4) }}>Control</div>
      </div>
      <div css={{ overflowY: 'auto', height: 'calc(100% - 32px)' }}>
        {config.link && (
          <div
            css={{
              backgroundColor: theme.colors.disabled.background,
              display: 'flex',
              fontSize: 14,
              color: theme.colors.text.disabled,
              padding: theme.spacing(2, 4),
            }}
          >
            Link to Figma:{' '}
            <a
              href={config.link}
              target="_blank"
              css={{
                color: theme.colors.text.main,
                padding: theme.spacing(0, 4),
              }}
              rel="noreferrer"
            >
              {config.link}
            </a>
          </div>
        )}
        {config.attributes.map((attr) => {
          const InputComponent = inputComponents[attr.control];

          if (!InputComponent) {
            return null;
          }

          return (
            <div
              key={attr.name}
              css={{
                display: 'flex',
                fontSize: 14,
                borderBottom: `1px solid ${theme.colors.common.stroke}`,
              }}
            >
              <div
                css={{
                  padding: theme.spacing(4),
                  width: '25%',
                  color: theme.colors.text.main,
                  textTransform: 'capitalize',
                }}
              >
                {attr.name}
              </div>
              <div css={{ width: '25%', padding: theme.spacing(4) }}>
                {attr.description}
              </div>
              <div css={{ width: '15%', padding: theme.spacing(4) }}>
                {attr.default}
              </div>
              <div css={{ width: '35%', padding: theme.spacing(4) }}>
                <InputComponent bc={bc} attr={attr} onChange={onChangeBc} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
