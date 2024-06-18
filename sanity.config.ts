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

const devOnlyPlugins = [visionTool()]

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
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:3000',
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
    customDocumentActions(),
    media(),
    noteField(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
