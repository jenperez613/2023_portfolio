import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: 'fakeapi',
  apiVersion: '2023-06-01',
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN_EDITOR,
  ignoreBrowserTokenWarning: true,
})

const data = await client.fetch('*[_type == "abouts"]')
//console.log(`Number of documents: ${data}`)

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
