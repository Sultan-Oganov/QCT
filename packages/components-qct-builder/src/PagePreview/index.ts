import { setComponent } from '@qctoken/register';
import { PagePreview } from './PagePreview';
import { PagePreviewName } from './types';
import config from './config.json';

setComponent(PagePreviewName, PagePreview, config);
