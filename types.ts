import {SlugDefinition, SlugOptions} from 'sanity'

export type SlugParams = Omit<SlugDefinition, 'type' | 'options' | 'name'> & {
  name?: string
  options?: SlugInputOptions
}

export type SlugInputOptions = SlugOptions & {
  locked?: boolean
  folder?: string
}
