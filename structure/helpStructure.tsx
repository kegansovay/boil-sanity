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
        <iframe src="https://www.loom.com/embed/85a355d852564777ad6bab61675e87fc?sid=5f218a07-b8cc-411d-ac21-d50953c6a569"></iframe>
      </div>
    </div>
  )
}
