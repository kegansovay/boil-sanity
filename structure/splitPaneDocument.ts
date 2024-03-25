import {DefaultDocumentNodeResolver} from 'sanity/structure'
import {Iframe} from 'sanity-plugin-iframe-pane'
import {isDev} from 'sanity'
import {PAGE_TYPES, URL} from '../constants'

const localhost = `http://localhost:3000/`
const secret = process.env.SANITY_STUDIO_PREVIEW_SECRET

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Only show preview pane on PAGE_TYPES constant schema type documents
  //deconstruct the array of objects
  if (PAGE_TYPES.some((type) => type.type === schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: {
            origin: isDev ? localhost : URL,
            draftMode: `/api/draft?secret=${secret}`,
            preview: (
              document: any, //No prefix means it will have a '/' so check for that first
            ) =>
              document?.slug?.fullUrl
                ? `${document.slug.fullUrl[0] == '/' ? '' : '/'}${document.slug.fullUrl}`
                : new Error('Missing slug'),
          },
          reload: {button: true},
        })
        .title('Preview'),
    ])
  }
  return S.document().views([S.view.form()])
}
