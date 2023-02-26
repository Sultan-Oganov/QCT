import { setComponent } from '@qctoken/register';
import { ModelSelector } from './ModelSelector';
import { ModelSelectorName } from './types';
import config from './config.json';

setComponent(ModelSelectorName, ModelSelector, config);
