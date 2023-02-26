import type { BuilderConfig } from '@qctoken/register/lib/types';

export const TestVRName = 'QCT.VR.TEST_VR';
export type TestVRNameType = typeof TestVRName;

export interface TestVRBuilderConfig extends BuilderConfig {
  type: TestVRNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [TestVRName]: TestVRBuilderConfig;
  }
}
