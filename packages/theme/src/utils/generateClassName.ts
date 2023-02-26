import { css } from '@emotion/react';

type Props = {
  name: string;
  label: string;
};

export function generateClassName({ label }: Props): string {
  const cls = css({ label });

  return `qct-${cls.name}`;
}
