import CMS from 'netlify-cms';

import MainPagePreview from './preview-templates/MainPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('main', MainPagePreview);
