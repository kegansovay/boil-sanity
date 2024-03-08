import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {MediaEditor} from '@catherineriver/sanity-plugin-generate-ogimage'
import OGILayout from '../../components/inputs/OGILayout'
import interviewTwitter from '../../components/inputs/interviewTwitter'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  icon: CogIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'defaultOGI',
      title: 'Default Opengraph Image',
      description:
        'This is the default Opengraph image for the whole site. If no images are selected on a page it will show this image as a fallback.',
      type: 'image',
      options: {
        sources: [
          {
            name: 'ogi',
            title: 'Generate Image',
            component: (props) => (
              //@ts-ignore
              <MediaEditor {...props}  darkMode={true} layouts={[OGILayout, interviewTwitter]} />
            ),
          },
        ],
      },
      validation: (R) => R.required(),
    }),
  ],
})
