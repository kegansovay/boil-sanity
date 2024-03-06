import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'
import {Iframe} from 'sanity-plugin-iframe-pane'
import {isDev} from 'sanity'
import {URL} from '../constants'

const localhost = `http://localhost:3000/`
const secret = process.env.SANITY_STUDIO_PREVIEW_SECRET

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Home')
    .schemaType('home')
    .child(
      S.editor()
        .title('Home')
        .schemaType('home')
        .documentId('home')
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .options({
              url: {
                origin: isDev ? localhost : URL,
                draftMode: `/api/draft?secret=${secret}`,
                preview: `/`,
              },
              reload: {button: true},
            })
            .title('Preview'),
        ]),
    ),
)
