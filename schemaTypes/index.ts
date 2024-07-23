import page from './documents/page'
import section from './documents/section'
import seo from './objects/seo'
import home from './singletons/home'
import navigation from './singletons/navigation'
import redirects from './singletons/redirects'
import settings from './singletons/settings'
import imageType from './types/imageType'
import pageBuilder from './types/pageBuilder'

const types = [imageType, pageBuilder]
const objects = [seo]
const singletons = [home, navigation, settings, redirects]
const modules = []
const documents = [page, section]

export const schemaTypes = [...types, ...objects, ...singletons, ...modules, ...documents]
