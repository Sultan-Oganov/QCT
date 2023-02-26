import type { BuilderConfig } from '@qctoken/register';

export const QCTNotFoundCourseCardName = 'QCT.STATIC.NOT_FOUND_COURSE_CARD';
export type QCTNotFoundCourseCardNameType = typeof QCTNotFoundCourseCardName;

export interface QCTNotFoundCourseCardBuilderConfig extends BuilderConfig {
  type: QCTNotFoundCourseCardNameType;
  button?: BuilderConfig;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [QCTNotFoundCourseCardName]: QCTNotFoundCourseCardBuilderConfig;
  }
}
