import {defineField} from 'sanity'
import PrefixedSlugInput from '../../components/inputs/SlugInput'


export default defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      components: {input: PrefixedSlugInput},
      options: {
        source: 'name',
        urlPrefix: 'about',
        maxLength: 200,
        storeFullUrl: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
})
