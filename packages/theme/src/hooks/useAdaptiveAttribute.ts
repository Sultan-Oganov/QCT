import { useLayoutEffect, useState, useMemo } from 'react';
import { ScreenSize } from './useSetScreenSize';
import { type PageModel, reaction } from '@qctoken/store';
import { VAR_SCREEN_SIZE } from '../variables';

type AdaptiveCssValue<V> = Record<ScreenSize, V>;
export type AdaptiveMixCssValue<V> = V | AdaptiveCssValue<V>;

const downGetter = {
  xs: <V>(values: AdaptiveCssValue<V>): V => values.xs,
  sm: <V>(values: AdaptiveCssValue<V>): V => values.sm ?? downGetter.xs(values),
  md: <V>(values: AdaptiveCssValue<V>): V => values.md ?? downGetter.sm(values),
  lg: <V>(values: AdaptiveCssValue<V>): V => values.lg ?? downGetter.md(values),
  xl: <V>(values: AdaptiveCssValue<V>): V => values.xl ?? downGetter.lg(values),
};

function convertAdaptiveCssToPlain<
  V extends any,
  BC extends { [key in N]: AdaptiveMixCssValue<V> },
  N extends keyof BC,
  R extends {
    [key in N]: BC[key] extends AdaptiveMixCssValue<infer P> ? P : unknown;
  },
>(bc: BC, names: N[], cssMeasure: ScreenSize): R {
  return names.reduce((acc, name) => {
    const bcValue = bc[name];
    const value =
      typeof bcValue === 'object' &&
      bcValue !== null &&
      // @ts-ignore TODO: need detection for Operator
      bc[name].op === undefined
        ? downGetter[cssMeasure](bcValue as AdaptiveCssValue<V>)
        : bcValue;

    // @ts-ignore
    acc[name] = value;

    return acc;
  }, {} as R);
}

export function useAdaptiveAttribute<
  N extends keyof BC,
  BC extends { [key in N]?: AdaptiveMixCssValue<unknown> },
  R extends {
    [key in N]: BC[key] extends AdaptiveMixCssValue<infer P> ? P : BC[key];
  },
>(bc: BC, pageStore: PageModel, names: N[]): R {
  const isHasNested = useMemo(
    () =>
      names.some(
        (name) =>
          typeof bc[name] === 'object' &&
          bc[name] !== null &&
          // @ts-ignore TODO: need detection for Operator
          bc[name].op === undefined,
      ),
    [bc],
  );
  const [cssValues, setCssValues] = useState<R>(() => {
    const cssMeasure = (pageStore.globalValues.get(VAR_SCREEN_SIZE) ||
      'xs') as ScreenSize;

    return convertAdaptiveCssToPlain(bc, names, cssMeasure);
  });

  useLayoutEffect(() => {
    if (!isHasNested) {
      return;
    }

    return reaction(
      () => (pageStore.globalValues.get(VAR_SCREEN_SIZE) || 'xs') as ScreenSize,
      (cssMeasure) => {
        const newValue: R = convertAdaptiveCssToPlain(bc, names, cssMeasure);

        setCssValues(newValue);
      },
    );
  }, [bc]);

  return cssValues;
}
