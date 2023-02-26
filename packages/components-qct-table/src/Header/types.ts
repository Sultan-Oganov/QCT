import type { BuilderConfig } from '@qctoken/register/lib/types';

export const HeaderName = 'QCT.TABLE.HEADER';
export type HeaderNameType = typeof HeaderName;

export interface HeaderBuilderConfig extends BuilderConfig {
  type: HeaderNameType;
  title?: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [HeaderName]: HeaderBuilderConfig;
  }
}
