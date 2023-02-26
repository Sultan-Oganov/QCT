import {
  useAdaptiveAttribute,
  useTheme,
  useThemeColorsPlain,
} from '@qctoken/theme';
import type { ClassProps } from '@qctoken/register/lib/types';
import { mapComponents } from '@qctoken/register';
import { useBooleanRule } from '@qctoken/executor';
import type { BlockNameType } from './types';

export function Block(props: ClassProps<BlockNameType>) {
  const { bc, disabled, readOnly, pageStore, values } = props;
  const theme = useTheme();
  const isDisabled = disabled || readOnly || bc.disabled;
  const isHidden = useBooleanRule(pageStore, bc.hiddenRules, values);
  const cssBc = useAdaptiveAttribute(bc, pageStore, [
    'borderRadius',
    'backgroundColor',
  ]);
  const colorMapper = useThemeColorsPlain();

  if (isHidden) {
    return null;
  }

  return (
    <div
      css={[
        {
          borderRadius: cssBc.borderRadius,
          margin: bc.margin,
          padding: bc.padding,
          width: bc.width,
          height: bc.height,
          borderColor: bc.borderColor,
          borderWidth: bc.borderWidth,
          borderStyle: bc.borderType,
          boxSizing: 'border-box',
        },
        cssBc.backgroundColor && {
          backgroundColor: colorMapper[cssBc.backgroundColor],
        },
        isDisabled && {
          backgroundColor: theme.colors.disabled.background,
          color: theme.colors.disabled.text,
        },
        bc.shadowType &&
          bc.shadowColor && {
            boxShadow: `${bc.shadowType} ${bc.shadowX}px ${bc.shadowY}px ${
              bc.shadowBlur
            }px ${colorMapper[bc.shadowColor]}`,
          },
        bc.borderColor && {
          borderColor: colorMapper[bc.borderColor],
        },
        bc.backgroundImage && {
          backgroundImage: `url(${bc.backgroundImage})`,
          backgroundPositionX: bc.backgroundX,
          backgroundPositionY: bc.backgroundY,
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
        bc.hoverBackgroundColor && {
          '&:hover': {
            backgroundColor: bc.hoverBackgroundColor,
          },
        },
        bc.hoverBackgroundColor && {
          '&:hover': {
            backgroundColor: bc.hoverBackgroundColor,
          },
        },
      ]}
    >
      {mapComponents(bc.childs, props)}
    </div>
  );
}
