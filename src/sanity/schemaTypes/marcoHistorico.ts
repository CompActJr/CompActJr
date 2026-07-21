import { defineType, defineField } from 'sanity'

export const marcoHistorico = defineType({
    name: 'marcoHistorico',
    title: 'Nossa História (Timeline)',
    type: 'document',
    fields: [
        defineField({
            name: 'year',
            title: 'Ano do Marco',
            description: 'Ex: 2015',
            type: 'number',
            validation: (Rule) => Rule.required().integer().min(2015),
        }),
        defineField({
            name: 'title',
            title: 'Título do Ano',
            description: 'Ex: O Início: A Inconformidade que Virou Ação',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Descrição (O que aconteceu?)',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Imagem Ilustrativa',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'ativo',
            title: 'Exibir na Linha do Tempo?',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'year',
            subtitle: 'title',
            media: 'image',
        },
        prepare(selection) {
            return {
                title: String(selection.title),
                subtitle: selection.subtitle,
                media: selection.media
            }
        }
    },
})