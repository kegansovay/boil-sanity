import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {noteField} from 'sanity-plugin-note-field'
import {structure} from './structure'
import {customDocumentActions} from './plugins/customDocumentActions'
import Logo from './components/Logo'
import {defaultDocumentNode} from './structure/splitPaneDocument'
import {presentationTool} from 'sanity/presentation'
import { PAGE_TYPES, pageTypes, URL } from './constants'
import { linkField } from '@madebythread/thread-kit'

const devOnlyPlugins = [visionTool()]
const SANITY_STUDIO_PREVIEW_URL = isDev ? 'http://localhost:3000' : URL

export default defineConfig({
  name: 'default',
  title: 'boil-sanity',
  icon: Logo,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
      defaultDocumentNode,
    }),
    customDocumentActions(),
    media(),
    noteField(),
    presentationTool({
      previewUrl: {
        origin: SANITY_STUDIO_PREVIEW_URL,
        previewMode: {enable: '/api/preview'},
      },
      title: 'Preview',
    }),
    linkField({
      linkableSchemaTypes: pageTypes,
      enableAnchorLinks: false,
      enableLinkParameters: false
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
