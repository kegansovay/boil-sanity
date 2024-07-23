import { AsteriskIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'section',
  title: 'Reusable Sections',
  icon: AsteriskIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      description: 'Give this reusable section a name so its easy to organize and find!',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'pageBuilder',
      type: 'pageBuilder',
      description: 'Only add 1',
      validation: (R) => R.required().max(1),
    }),
  ],
})
