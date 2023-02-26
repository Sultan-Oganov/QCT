import type { ClassProps } from '@qctoken/register/lib/types';
import type { NativeLinkNameType } from './types';
import { useRunExecutor } from '@qctoken/executor';
import { mapComponents } from '@qctoken/register';
import { useStyles } from './NativeLink.styles';

export function NativeLink(props: ClassProps<NativeLinkNameType>) {
  const { bc, pageStore, values } = props;
  const styles = useStyles();

  const link = useRunExecutor(pageStore, bc.url, values);

  return (
    <a css={styles.root} href={link}>
      {mapComponents(bc.childs, props)}
    </a>
  );
}
