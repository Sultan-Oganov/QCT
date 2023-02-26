import { mapComponentOne, mapComponents } from '@qctoken/register';
import type { ClassProps } from '@qctoken/register/lib/types';
import type { FlexBoxNameType } from './types';
import {
  useAdaptiveAttribute,
  useTheme,
  useThemeColorsPlain,
} from '@qctoken/theme';
import { useBooleanRule, useRunExecutor } from '@qctoken/executor';

export function FlexBox(props: ClassProps<FlexBoxNameType>) {
  const { bc, pageStore, values } = props;
  const theme = useTheme();
  const isHidden = useBooleanRule(pageStore, bc.hiddenRules, values);
  const backgroundImage = useRunExecutor(pageStore, bc.backgroundImage, values);
  const colorMapper = useThemeColorsPlain();
  const cssBc = useAdaptiveAttribute(bc, pageStore, [
    'alignItems',
    'padding',
    'margin',
    'direction',
    'borderRadius',
    'backgroundColor',
    'width',
    'height',
    'maxWidth',
    'minWidth',
    'maxHeight',
    'minHeight',
    'spacing',
    'flexGrow',
    'flexShrink',
  ]);

  if (isHidden) {
    return null;
  }

  const handleClick = () => {
    if (bc.actionClick) {
      pageStore.stores
        .get(bc.actionClick.pageObjectId)
        ?.invokeHandler([bc, {}]);
    }
  };

  return (
    <div
      onClick={handleClick}
      css={[
        {
          display: 'flex',
          boxSizing: 'border-box',
          alignItems: cssBc.alignItems,
          justifyContent: bc.justifyContent,
          flexDirection: cssBc.direction,
          flexWrap: bc.wrap,
          height: cssBc.height,
          width: cssBc.width,
          maxWidth: cssBc.maxWidth,
          minWidth: cssBc.minWidth,
          maxHeight: cssBc.maxHeight,
          minHeight: cssBc.minHeight,
          borderRadius: cssBc.borderRadius,
          border: bc.borderColor && `1px solid ${colorMapper[bc.borderColor]}`,
          margin: cssBc.margin,
          padding: cssBc.padding,
          backgroundColor:
            cssBc.backgroundColor && colorMapper[cssBc.backgroundColor],
          flexGrow: cssBc.flexGrow,
          flexShrink: cssBc.flexShrink,
          gap: cssBc.spacing && theme.spacing(cssBc.spacing),
          overflowY: bc.overflowY,
          overflowX: bc.overflowX,
        },
        backgroundImage && {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: bc.backgroundSize,
          backgroundRepeat: 'no-repeat',
        },
        bc.positionType && {
          position: bc.positionType,
        },
        bc.positionSpace && {
          top: bc.positionSpace.top,
          right: bc.positionSpace.right,
          bottom: bc.positionSpace.bottom,
          left: bc.positionSpace.left,
        },
        bc.actionClick && {
          cursor: 'pointer',
        },
      ]}
    >
      {mapComponents(bc.childs, props)}
      {bc.actionClick && mapComponentOne(bc.actionClick, props)}
    </div>
  );
}
