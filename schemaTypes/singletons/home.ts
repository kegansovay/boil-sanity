import {HomeIcon} from '@sanity/icons'
import {defineField, isDev} from 'sanity'

export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Home Page',
      readOnly: !isDev,
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
      type: 'seo',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'pageBuilder',
      type: 'pageBuilder',
    }),
  ],
}
