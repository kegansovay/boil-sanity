import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'
import { HelpCircleIcon } from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
S.listItem()
    .title("Help Guide")
    .icon(HelpCircleIcon)
    .child(
      S.component()
        .title("Help Guide")
        .id("help-guide")
        .component(HelpComponent)
    )
)

export const HelpComponent = () => {
  return (
    <div style={{padding: 20}}>
      <h1>Sanity Get Started Guide</h1>
      <div>
        
      </div>
    </div>
  )
}
