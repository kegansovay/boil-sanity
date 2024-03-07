import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'
import navigationStructure from './navigationStructure'
import { CogIcon } from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S, context) =>
  S.listItem()
    .title('Site Settings')
    .icon(CogIcon)
    .child(
      S.list()
        .title('Site Settings')
        .items([
          navigationStructure(S, context),
          S.listItem()
            .title('Settings')
            .schemaType('settings')
            .child(S.editor().title('Settings').schemaType('settings').documentId('settings')),
        ]),
    ),
)
