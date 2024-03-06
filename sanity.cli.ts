import {defineCliConfig} from 'sanity/cli'
import { PROJECT_ID } from './constants'

export default defineCliConfig({
  api: {
    projectId: PROJECT_ID,
    dataset: 'production'
  }
})
