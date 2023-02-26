import type { BuilderConfig } from '@qctoken/register';

export const GetWalletName = 'QCT.METAMASK.GET_WALLET';
export type GetWalletNameType = typeof GetWalletName;

export interface Wallet {
  id: string;
  cryptoProvider: string;
  cryptoAddress: string;
}
export interface GetWalletBuilderConfig extends BuilderConfig {
  type: GetWalletNameType;
  icon?: BuilderConfig;
  iconButton?: BuilderConfig;
  onError?: string;
  onRefresh?: string[];
  query?: string;
  submitPostQuery?: string;
  cacheKey?: string;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [GetWalletName]: GetWalletBuilderConfig;
  }
}
