import { setComponent } from '@qctoken/register';
import { TestEditor } from './TestEditor';
import { TestEditorName } from './types';
import config from './config.json';

setComponent(TestEditorName, TestEditor, config);
