import { type ClassProps, mapComponents } from '@qctoken/register';
import { useStyles } from './QCTMobileMenu.styles';
import { useLocation, matchPath } from 'react-router-dom';
import type { QCTMobileMenuNameType } from './types';

export function QCTMobileMenu(props: ClassProps<QCTMobileMenuNameType>) {
  const { bc } = props;
  const styles = useStyles();
  const location = useLocation();
  const locationPathname = location.pathname.toLowerCase();

  const isAvailable = bc.accessRoutes
    ? bc.accessRoutes.some((route) => matchPath(route, locationPathname))
    : true;

  if (!isAvailable) {
    return null;
  }

  return (
    <div css={styles.root}>
      <div css={styles.top}></div>
      {mapComponents(bc.childs, props)}
    </div>
  );
}
