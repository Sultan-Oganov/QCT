import { type ClassProps, mapComponents } from '@qctoken/register';
import { useNavigate } from 'react-router-dom';
import type { GoBackNameType } from './types';
import { useStyles } from './GoBack.styles';

export function GoBack(props: ClassProps<GoBackNameType>) {
  const { bc } = props;
  const navigate = useNavigate();
  const styles = useStyles();

  return (
    <span css={styles.root} onClick={() => navigate(-bc.count)}>
      {mapComponents(props.bc.childs, props)}
    </span>
  );
}
