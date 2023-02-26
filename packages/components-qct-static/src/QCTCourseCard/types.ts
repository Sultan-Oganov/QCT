import type { BuilderConfig } from '@qctoken/register';

export const QCTCourseCardName = 'QCT.STATIC.COURSE_CARD';
export type QCTCourseCardNameType = typeof QCTCourseCardName;

export type Course = {
  name: string;
  price: number;
  description: string;
  levelId: string;
  categoryId: string;
  subCategoryId: string;
  cover: string | null;
  videoUrl: string | null;
  published: boolean;
  id: string;
  createdBy: Record<string, unknown>;
};

export interface QCTCourseCardBuilderConfig extends BuilderConfig {
  type: QCTCourseCardNameType;
  promotions?: boolean;
  link?: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [QCTCourseCardName]: QCTCourseCardBuilderConfig;
  }
}
