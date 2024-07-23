import {SanityDocument} from '@sanity/types'
import {isDev} from 'sanity'
import {LOCKED_PAGE_SLUGS} from '../constants'
const lockedSlugs = LOCKED_PAGE_SLUGS as readonly string[]

export type DocumentWithSlug = SanityDocument & {slug?: {current?: string}}

export const isSlugLocked = (
  document: DocumentWithSlug,
  allowDev?: boolean,
  slug?: string,
): boolean => {
  if (slug) {
    return (
      lockedSlugs.includes(slug)
    )
  }
  return (
    !isDev &&
    typeof document.slug?.current === 'string' &&
    lockedSlugs.includes(document.slug.current)
  )
}
