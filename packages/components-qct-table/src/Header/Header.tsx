import type { ClassProps } from '@qctoken/register/lib/types';
import type { HeaderNameType } from './types';
import { useStyles } from './Header.styles';

export function Header(props: ClassProps<HeaderNameType>) {
  const { bc } = props;
  const styles = useStyles();

  return <td css={styles.td}>{bc.title}</td>;
}
