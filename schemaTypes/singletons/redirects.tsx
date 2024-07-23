import { defineNote } from '@madebythread/thread-kit'
import { ArrowRightIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { LOCKED_PAGE_SLUGS } from '../../constants'

export default defineType({
  name: 'redirects',
  title: 'Redirects',
  type: 'document',
  fields: [
    defineNote({
      lockedSlugs: LOCKED_PAGE_SLUGS,
      paragraph:
        'Publishing this document will trigger a rebuild of the project in Vercel. It might take a few minutes before you see changes.',
    }),
    defineField({
      name: 'redirects',
      title: 'Redirects',
      type: 'array',
      of: [
        {
          name: 'redirect',
          title: 'Redirect',
          type: 'object',
          icon: ArrowRightIcon,
          fields: [
            defineField({
              name: 'source',
              description: "Must start with a '/' i.e /source",
              type: 'string',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'destination',
              description: "Must start with a '/' i.e /destination",
              type: 'string',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'isPermanent',
              type: 'boolean',
              initialValue: false,
              validation: (R) => R.required(),
            }),
          ],
          preview: {
            select: {
              destination: 'destination',
              source: 'source',
              isPermanent: 'isPermanent',
            },
            prepare({destination, source, isPermanent}) {
              return {
                title: `${source} -> ${destination}`,
                subtitle: isPermanent ? 'Permanent' : 'Temporary',
              }
            },
          },
        },
      ],
    }),
  ],
})
