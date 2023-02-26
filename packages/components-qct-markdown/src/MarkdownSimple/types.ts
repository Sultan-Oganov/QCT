import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register';

export const MarkdownSimpleName = 'QCT.MARKDOWN.MARKDOWN_SIMPLE';
export type MarkdownSimpleNameType = typeof MarkdownSimpleName;

export interface MarkdownSimpleBuilderConfig extends BuilderConfig {
  type: MarkdownSimpleNameType;
  content?: string;
  scrollTo?: string | Operator;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [MarkdownSimpleName]: MarkdownSimpleBuilderConfig;
  }
}
