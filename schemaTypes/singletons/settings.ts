import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

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
      validation: (R) => R.required(),
    }),
  ],
})
