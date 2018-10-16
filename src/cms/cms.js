import CMS from 'netlify-cms';

import MainPagePreview from './preview-templates/MainPagePreview';
import ProjectPagePreview from './preview-templates/ProjectPagePreview';
import JoinPagePreview from './preview-templates/JoinPagePreview';
import TeamPagePreview from './preview-templates/TeamPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('main', MainPagePreview);
CMS.registerPreviewTemplate('project', ProjectPagePreview);
CMS.registerPreviewTemplate('join', JoinPagePreview);
CMS.registerPreviewTemplate('team', TeamPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
