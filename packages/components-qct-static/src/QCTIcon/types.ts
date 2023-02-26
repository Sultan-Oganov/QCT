import type { BuilderConfig } from '@qctoken/register';
import type { Colors } from '@qctoken/theme';

export const QCTIconName = 'QCT.STATIC.ICON';
export type QCTIconNameType = typeof QCTIconName;

export type IconNames =
  | 'arrow-left'
  | 'qct'
  | 'search'
  | 'link'
  | 'refresh'
  | 'play'
  | 'play-for-course'
  | 'study'
  | 'threeDCube'
  | 'vr-glasses'
  | 'wallet-passesApp'
  | 'chat'
  | 'market'
  | 'social-network'
  | 'transaction-history'
  | 'show'
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-right'
  | 'course'
  | 'homework'
  | 'leave'
  | 'chair'
  | 'analytic'
  | 'wallet'
  | 'text'
  | 'unlock'
  | 'personal'
  | 'like'
  | 'notification'
  | 'theme'
  | 'globe'
  | 'exchange-arrows'
  | 'settings'
  | 'filter'
  | 'job-apply'
  | 'dollar'
  | 'delete'
  | 'time-square'
  | 'edit'
  | 'burger'
  | 'close'
  | 'add'
  | 'download'
  | 'hide'
  | 'leadership'
  | 'home'
  | 'briefcase-search'
  | 'question-mark'
  | 'exclamation'
  | 'support'
  | 'about-us';

export interface QCTIconBuilderConfig extends BuilderConfig {
  type: QCTIconNameType;
  color?: keyof Colors;
  name?: IconNames;
  width: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [QCTIconName]: QCTIconBuilderConfig;
  }
}
