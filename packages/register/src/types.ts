interface PageInvokeOptions {
  values?: Record<string, unknown>;
}

export interface PageModelInterface {
  translate(value?: string): string | undefined;
  invokeHandler: (
    name: string,
    options: PageInvokeOptions,
  ) => Promise<boolean | Record<string, unknown>>;
}

export interface BuilderConfig {
  // Identification of the page object
  pageObjectId: string;
  objectId: string;
  pageObjectName?: string;
  // Component type (should be uniq)
  type: string;
}

export interface BuilderConfigs {
  [key: string]: BuilderConfig;
}

export interface ClassProps<T extends string> {
  bc: BuilderConfigs[T];
  pageStore: PageModelInterface;
  values?: Record<string, unknown>;
  hidden?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  visible?: boolean;
  parentKey?: string;
}

type ConfigAttributeChoose = {
  name: string;
  value: string | number;
};

type ExampleType =
  | string
  | number
  | boolean
  | ExampleType[]
  | { [key: string]: ExampleType };

export type ConfigAttribute = {
  name: string;
  type: string[];
  control: string;
  description?: string;
  default?: string | number | boolean;
  example?: ExampleType;
  chooses?: ConfigAttributeChoose[];
};

export type ConfigComponent = {
  name: string;
  package: string;
  group: string;
  description: string;
  type: string;
  link?: string;
  attributes: ConfigAttribute[];
};
