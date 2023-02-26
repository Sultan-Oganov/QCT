import { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';

export const TestEditorName = 'QCT.SURVEY.TEST_EDITOR';
export type TestEditorNameType = typeof TestEditorName;

export interface TestEditorBuilderConfig extends BuilderConfig {
  type: TestEditorNameType;
  courseId?: string | Operator;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [TestEditorName]: TestEditorBuilderConfig;
  }
}
