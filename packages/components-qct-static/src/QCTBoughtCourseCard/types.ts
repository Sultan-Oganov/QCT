import type { BuilderConfig } from '@qctoken/register';

export const QCTBoughtCourseCardName = 'QCT.STATIC.BOUGHT_COURSE_CARD';
export type QCTBoughtCourseCardNameType = typeof QCTBoughtCourseCardName;

export type CourseState = 'taking' | 'info' | 'final';

type CourseInfo = {
  progress: number;
  lessonsLength: number;
  finishedLessonsLength: number;
  lastLessonsLength: number;
};

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
  userInfo?: CourseInfo;
};

export interface QCTBoughtCourseCardBuilderConfig extends BuilderConfig {
  type: QCTBoughtCourseCardNameType;
  link?: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [QCTBoughtCourseCardName]: QCTBoughtCourseCardBuilderConfig;
  }
}
