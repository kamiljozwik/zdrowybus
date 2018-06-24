import CMS from 'netlify-cms'

import TemplateMainPreview from './preview-templates/AboutPagePreview'


// CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', TemplateMainPreview)
