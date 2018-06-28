import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import MainPagePreview from './preview-templates/MainPagePreview';
import ProjectPagePreview from './preview-templates/ProjectPagePreview';
import TeamPagePreview from './preview-templates/TeamPagePreview';
import JoinPagePreview from './preview-templates/JoinPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('main', MainPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('project', ProjectPagePreview);
CMS.registerPreviewTemplate('team', TeamPagePreview);
CMS.registerPreviewTemplate('team', JoinPagePreview);
CMS.registerPreviewTemplate('team', ContactPagePreview);
