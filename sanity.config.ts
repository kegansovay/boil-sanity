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

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'boil-sanity',
  icon: Logo,
  //@ts-ignore
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
      defaultDocumentNode,
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
