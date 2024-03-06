import {defineField} from 'sanity'
import { MetaDescriptionInput } from '../../components/inputs/MetaDescriptionInput'

export default defineField({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
      components: {input: MetaDescriptionInput},
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'opengraphimage',
      title: 'Opengraph Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
