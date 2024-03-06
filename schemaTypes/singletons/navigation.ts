import {defineField} from 'sanity'
import {BiNavigation} from 'react-icons/bi'

export default defineField({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: BiNavigation,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})
