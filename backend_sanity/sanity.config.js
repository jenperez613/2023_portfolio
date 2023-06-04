import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'tomato-locust',

  projectId: 'mn5s9tez',
  dataset: 'fakeapi',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
