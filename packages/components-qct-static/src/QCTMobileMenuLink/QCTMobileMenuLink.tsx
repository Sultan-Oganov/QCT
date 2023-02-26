import { type ClassProps, mapComponentOne } from '@qctoken/register';
import {
  Link as RouterLink,
  useLocation,
  useResolvedPath,
} from 'react-router-dom';
import type { QCTMobileMenuNameLinkType } from './types';
import { useStyles } from './QCTMobileMenuLink.styles';

export function QCTMobileMenuLink(
  props: ClassProps<QCTMobileMenuNameLinkType>,
) {
  const { bc } = props;
  const styles = useStyles();
  const location = useLocation();
  const path = useResolvedPath(bc.to);

  const locationPathname = location.pathname.toLowerCase();
  const toPathname = path.pathname.toLowerCase();
  const isActive = locationPathname.includes(toPathname);

  return (
    <RouterLink to={bc.to} css={[styles.root, isActive && styles.rootActive]}>
      <div css={[styles.icon, isActive && styles.iconActive]}>
        {bc.icon && mapComponentOne(bc.icon, props)}
      </div>
      <p css={styles.caption}>{bc.caption}</p>
    </RouterLink>
  );
}
