import link from './objects/link'
import pageBuilder from './types/pageBuilder'
import seo from './objects/seo'
import home from './singletons/home'
import imageType from './types/imageType'
import page from './documents/page'
import navigation from './singletons/navigation'
import settings from './singletons/settings'

const types = [imageType, pageBuilder]
const objects = [seo, link,]
const singletons = [home, navigation, settings]
const modules = []
const documents = [page]

export const schemaTypes = [...types, ...objects, ...singletons, ...modules, ...documents]
