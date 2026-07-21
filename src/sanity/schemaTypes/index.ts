import { type SchemaTypeDefinition } from 'sanity'
import { linkBio } from './linkBio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [linkBio],
}
