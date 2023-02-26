import type {
  ClassProps,
  PageModelInterface,
  BuilderConfig as BC,
  BuilderConfigs,
} from '@qctoken/register';
import { RequestModel } from './Request';

export interface HandlerOptions {
  values?: Record<string, unknown>;
}
export const DEFAULT_HANDLER_TYPE = 'onProcess';

type HandlerType = (
  btnBc: BC,
  options: HandlerOptions,
) => Promise<boolean | Record<string, unknown>>;

type Handlers = {
  [DEFAULT_HANDLER_TYPE]: HandlerType;
  [name: string]: HandlerType;
};

declare module '@qctoken/register/lib/types' {
  interface BuilderConfig {
    query?: string;
    cacheKey?: string;
  }
}

export interface BaseStoreModelConstructor<N extends string> {
  new (props: ClassProps<N>, ...args: any[]): BaseStoreModel<N>;
}

/**
 * Base model to create a store for component
 *
 * reload - Reload information
 * clear - Clear information
 */
export class BaseStoreModel<N extends string> {
  // public disabled: boolean = true;

  // public hidden: boolean = false;

  public initialCount = 1;

  public readonly bc: BuilderConfigs[N];

  public handlers?: Handlers;

  public readonly pageStore: PageModelInterface;

  public readonly requestStore: RequestModel;

  constructor(props: ClassProps<N>) {
    const { bc, pageStore } = props; // , disabled = true, hidden = false

    this.bc = bc;
    this.pageStore = pageStore;
    // this.disabled = disabled;
    // this.hidden = hidden;

    this.requestStore = new RequestModel({
      url: bc.query,
      cacheKey: bc.cacheKey,
      pageStore,
    });
  }

  public reload = (): Promise<boolean> => {
    console.error('Need to implement reload');
    return Promise.resolve(false);
  };

  public clear = (): Promise<boolean> => {
    console.error('Need to implement clear');

    return Promise.resolve(false);
  };

  /**
   * Invoke handler in store
   *
   * @param args [BuilderConfig, HandlerOptions] List arguments that passed into handler
   * @param name Name of the handler. !!Don't pass any single string.!! Should come only from BuilderConfig
   * @returns Promise<boolean | Record> - Can be result of boolean or values
   */
  public invokeHandler = (
    args: [BC, HandlerOptions],
    name: string = DEFAULT_HANDLER_TYPE,
  ): Promise<boolean | Record<string, unknown>> => {
    if (this.handlers?.[name]) {
      return this.handlers[name](...args);
    }

    return Promise.resolve(false);
  };
}
