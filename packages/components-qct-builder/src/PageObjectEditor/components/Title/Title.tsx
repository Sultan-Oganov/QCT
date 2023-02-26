import { useTheme } from '@qctoken/theme';
type Props = {
  title: string;
};
export function Title({ title }: Props) {
  const theme = useTheme();
  return (
    <div
      css={{
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: '0.003em',
        color: theme.colors.text.main,
        margin: theme.spacing(0, 4, 0, 0),
      }}
    >
      {title}
    </div>
  );
}
