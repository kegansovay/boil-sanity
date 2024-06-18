import {defineField, FieldDefinition, isDev} from 'sanity'
import PrefixedSlugInput from './inputs/SlugInput'
import { SlugParams} from '../types'

export function defineSlug(schema: SlugParams = {name: 'slug'}): FieldDefinition<'slug'> {
  const slugOptions = schema?.options

  return defineField({
    ...schema,
    name: schema.name ?? 'pathname',
    title: schema?.title ?? 'URL',
    type: 'slug',
    components: {
      ...schema.components,
      input: PrefixedSlugInput,
    },
    options: {
      ...(slugOptions ?? {}),
      maxLength: 200,
      source: 'name',
      //@ts-ignore idk how to fix
      urlPrefix: slugOptions?.folder || undefined,
    },
    readOnly: slugOptions?.locked,
    validation: (R) => R.required(),
  })
}

