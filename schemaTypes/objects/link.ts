//@ts-nocheck
import {IoIosLink} from 'react-icons/io'
import {defineField} from 'sanity'
import { PAGE_TYPES } from '../../constants'

export default defineField({
  name: 'link',
  title: 'Link',
  icon: IoIosLink,
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Link Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isInternal',
      title: 'External / Internal',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'internalLink',
      title: 'Internal Link',
      type: 'reference',
      to: PAGE_TYPES,
      options: {
        disableNew: true,
      },
      hidden: ({parent}) => !parent?.isInternal,
      validation: (Rule) =>
        Rule.custom((internalLink, context) => {
          if (context.parent.isInternal === true && !internalLink) {
            return 'Internal Link is required'
          }
          return true
        }),
    }),
    defineField({
      title: 'External Link',
      name: 'externalLink',
      type: 'url',
      description: 'Must start with https:// http:// mailto: or tel:',
      hidden: ({parent}) => parent?.isInternal,
      validation: (Rule) => [
        Rule.uri({
          scheme: ['https', 'http', 'mailto', 'tel'],
        }).custom((externalLink, context) => {
          
          if (context.parent.isInternal === false && !externalLink) {
            return 'External Link is required'
          }
          return true
        }),
      ],
    }),
    defineField({
      title: 'Open in new tab?',
      name: 'newTab',
      type: 'boolean',
      initialValue: false,
      hidden: ({parent}) => parent?.isInternal,
    }),
  ],
})
