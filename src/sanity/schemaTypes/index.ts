import { type SchemaTypeDefinition } from 'sanity'
import { linkBio } from './linkBio'
import { materialEducativo } from './materialEducativo'
import { projetoPortfolio } from './projetoPortfolio'
import { artigoBlog } from './artigoBlog'
import { membroEquipe } from './membroEquipe'
import { marcoHistorico } from './marcoHistorico'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [linkBio, materialEducativo, projetoPortfolio, artigoBlog, membroEquipe, marcoHistorico],
}