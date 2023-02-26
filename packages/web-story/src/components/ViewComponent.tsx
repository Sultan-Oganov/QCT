import type {
  BuilderConfig,
  ClassProps,
  ConfigComponent,
  PageModelInterface,
} from '@qctoken/register';
import { useTheme } from '@qctoken/theme';
import { type ComponentType, useState, useCallback } from 'react';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { ErrorBoundaryForm } from './ErrorBoundaryForm';
type Props = {
  Component: ComponentType<ClassProps<'default'>>;
  config: ConfigComponent;
  pageStore: PageModelInterface;
};

export function ViewComponent({ Component, config, pageStore }: Props) {
  const theme = useTheme();
  const [renderKey, setRenderKey] = useState(0);
  const [bc, setBc] = useState(
    (): BuilderConfig => ({
      pageObjectId: `${new Date()}`,
      objectId: `${new Date()}`,
      type: config.type,
      ...config.attributes.reduce((acc: Partial<BuilderConfig>, attr) => {
        // @ts-ignore
        acc[attr.name] = attr.example || attr.default;
        return acc;
      }, {}),
    }),
  );

  const handleChangeBc = useCallback(
    (
      name: string,
      value: string | number | boolean,
      forceRerender: boolean = false,
    ) => {
      setBc((prevBc) => ({ ...prevBc, [name]: value }));

      if (forceRerender) {
        setRenderKey((prevKey) => prevKey + 1);
      }
    },
    [],
  );

  return (
    <div css={{ width: 'calc(100% - 281px)' }}>
      <div
        css={{
          height: '70%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: theme.spacing(4),
          boxSizing: 'border-box',
        }}
      >
        <ErrorBoundaryForm pageStore={pageStore}>
          <Component key={renderKey} bc={bc} pageStore={pageStore} visible />
        </ErrorBoundaryForm>
      </div>

      <ControlPanel
        css={{
          height: '30%',
        }}
        config={config}
        bc={bc}
        onChangeBc={handleChangeBc}
      />
    </div>
  );
}
