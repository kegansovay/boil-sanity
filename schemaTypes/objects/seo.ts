import {defineField} from 'sanity'
import {CharCountInput} from '../../components/inputs/CharCountInput'

export default defineField({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Title for SEO & Social Sharing',
      description:
        '🔸 Make it as enticing as possible to convert users in social feeds and Google Searches. Ideally between 15 and 70 characters.',
      type: 'string',
      components: {input: CharCountInput},
      options: {count: 70},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Meta Description',
      description:
        '🔸 Optional but highly encouraged since it will help you convert more visitors from Google & social. Keep between 70 and 160 characters. ',
      type: 'text',
      rows: 2,
      components: {input: CharCountInput},
      options: {count: 160},
      validation: (Rule) => Rule.max(160),
    },
    defineField({
      name: 'opengraphimage',
      title: 'Opengraph Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
