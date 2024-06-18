import {defineField} from 'sanity'
import { defineSlug } from '../../components/defineSlug'

export default defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineSlug({
      name: 'slug',
      // options: {
      //   folder: 'podcast/media',
      //   locked: true,
      // },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
