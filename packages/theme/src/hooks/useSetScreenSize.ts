import { useLayoutEffect } from 'react';

export const enum SizeWidth {
  xs = 0,
  sm = 600,
  md = 960,
  lg = 1280,
  xl = 1920,
}
export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type SetScreenSize = (size: ScreenSize, width: number) => void;

export const handleResize = (setScreenSize: SetScreenSize) => {
  const width = document.documentElement.clientWidth;

  switch (true) {
    case width < SizeWidth.sm:
      return setScreenSize('xs', width);
    case width < SizeWidth.md:
      return setScreenSize('sm', width);
    case width < SizeWidth.lg:
      return setScreenSize('md', width);
    case width < SizeWidth.xl:
      return setScreenSize('lg', width);
    default:
      return setScreenSize('xl', width);
  }
};

export function useSetScreenSize(setScreenSize: SetScreenSize) {
  useLayoutEffect(() => {
    handleResize(setScreenSize);
    const onHandlerResize = () => {
      handleResize(setScreenSize);
    };

    window.addEventListener('resize', onHandlerResize);

    return () => {
      window.removeEventListener('resize', onHandlerResize);
    };
  }, [setScreenSize]);
}
