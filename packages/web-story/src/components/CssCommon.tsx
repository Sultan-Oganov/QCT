import { Global, useTheme } from '@qctoken/theme';

export function CssCommon() {
  const theme = useTheme();
  return (
    <Global
      styles={{
        html: {
          height: '100%',
        },
        body: {
          backgroundColor: theme.colors.common.background,
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
      }}
    />
  );
}
