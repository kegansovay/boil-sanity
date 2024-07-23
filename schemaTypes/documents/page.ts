import { defineNote, defineSlug } from '@madebythread/thread-kit'
import { DesktopIcon, LockIcon } from '@sanity/icons'
import { defineField } from 'sanity'
import { LOCKED_PAGE_SLUGS, URL } from '../../constants'
import { isSlugLocked } from '../../utils/isSlugLocked'

export default defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineNote({
      lockedSlugs: LOCKED_PAGE_SLUGS,
      paragraph:
        'This page content & slug is locked and cannot be edited. You can still make changes to the SEO. Contact your web developer if you need to make content changes.',
      checkSlug: true,
    }),

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: ({document}: any) => isSlugLocked(document),
    }),
    defineSlug({
      name: 'slug',
      options: {
        url: URL,
        //folder: 'podcast/media',
        locked: ({document}: any) => isSlugLocked(document),
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      type: 'pageBuilder',
      hidden: ({document}: any) => isSlugLocked(document),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      slug: 'slug.fullUrl',
    },
    prepare({title, slug}) {
      return {
        title,
        subtitle: '/' + slug,
        //@ts-ignore
        media: LOCKED_PAGE_SLUGS.includes(slug) ? LockIcon : DesktopIcon,
      }
    },
  },
})
