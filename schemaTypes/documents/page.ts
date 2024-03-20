import {defineField} from 'sanity'
import PrefixedSlugInput from '../../components/inputs/SlugInput'

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
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      components: {input: PrefixedSlugInput},
      options: {
        source: 'name',
        //@ts-ignore
        urlPrefix: 'about',
        maxLength: 200,
        storeFullUrl: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
