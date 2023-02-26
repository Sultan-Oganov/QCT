import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';

export const PlayerName = 'QCT.COMMON.PLAYER';
export type PlayerNameType = typeof PlayerName;

export interface PlayerBuilderConfig extends BuilderConfig {
  type: PlayerNameType;
  src?: string | Operator;
  width: string;
  height: string;
  autoplay: boolean;
  muted: boolean;
  placeholder?: string;
  hideControls: boolean;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [PlayerName]: PlayerBuilderConfig;
  }
}
