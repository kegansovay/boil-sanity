import {ListItemBuilder, StructureResolver} from 'sanity/structure'
import homeStructure from './homeStructure'
import navigationStructure from './navigationStructure'
import helpStructure from './helpStructure'
import pageStructure from './pageStructure'

// If you add document types to structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return !['home','page','navigation', 'help', 'media.tag'].includes(id)
}
//BE SURE TO ADD SINGLETONS TO FILTERED LIST ABOVE
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.divider(),
      homeStructure(S, context),
      pageStructure(S, context),
      S.divider(),
      navigationStructure(S, context),
      helpStructure(S, context),
      
    ])


    