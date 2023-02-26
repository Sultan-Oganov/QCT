import type { BuilderConfig, ClassProps } from '@qctoken/register';
import type { NavigateFunction } from 'react-router-dom';
import type { RedirectNameType } from './types';
import { BaseStoreModel, type HandlerOptions } from '@qctoken/store';
import { runOperator } from '@qctoken/executor';

export class RedirectModel extends BaseStoreModel<RedirectNameType> {
  constructor(
    props: ClassProps<RedirectNameType>,
    private navigate: NavigateFunction,
  ) {
    super(props);
  }

  setNavigate(navigate: NavigateFunction) {
    this.navigate = navigate;
  }

  handlers = {
    onProcess: async (_bc: BuilderConfig, { values }: HandlerOptions) => {
      const { pagePath } = this.bc;
      const path =
        typeof pagePath === 'object'
          ? runOperator({ values, pageStore: this.pageStore }, pagePath)
          : pagePath;

      if (path) {
        this.navigate(path);
        return true;
      }

      return false;
    },
  };
}
