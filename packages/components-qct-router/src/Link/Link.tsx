import { ClassNames } from '@qctoken/theme';
import { useRunExecutor } from '@qctoken/executor';
import { type ClassProps, mapComponents } from '@qctoken/register';
import {
  Link as RouterLink,
  useLocation,
  useResolvedPath,
} from 'react-router-dom';
import type { LinkNameType } from './types';

export function Link(props: ClassProps<LinkNameType>) {
  const { bc, values, pageStore } = props;
  const to = useRunExecutor(pageStore, bc.to, values);
  const isActivePartial = Boolean(
    useRunExecutor(pageStore, bc.isActivePartial, values),
  );
  let location = useLocation();
  let path = useResolvedPath(to);

  const locationPathname = location.pathname.toLowerCase();
  const toPathname = path.pathname.toLowerCase();

  const isActive =
    locationPathname === toPathname ||
    (isActivePartial && locationPathname.includes(toPathname));

  return (
    <ClassNames>
      {({ css }) => (
        <RouterLink
          to={to}
          className={css([
            {
              borderColor: bc.borderColor,
              borderWidth: bc.borderWidth,
              borderStyle: bc.borderType,
              boxSizing: 'border-box',
              textDecoration: 'none',
              borderRadius: bc.borderRadius,
              backgroundColor: isActive ? bc.activeBackgroundColor : undefined,
              color: isActive ? bc.activeTextColor : 'inherit',
              display: 'inline-flex',
              gap: 4,
            },
          ])}
        >
          {mapComponents(props.bc.childs, props)}
        </RouterLink>
      )}
    </ClassNames>
  );
}
