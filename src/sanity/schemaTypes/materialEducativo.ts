import { defineType, defineField } from 'sanity'

export const materialEducativo = defineType({
    name: 'materialEducativo',
    title: 'Materiais Educativos',
    type: 'document',
    fields: [
        defineField({
            name: 'titulo',
            title: 'Título do Material',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'resumo',
            title: 'Resumo',
            description: 'Breve descrição (aparece no card do site).',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'imagem',
            title: 'Capa do Material',
            type: 'image',
            options: {
                hotspot: true, // Permite recortar a imagem no painel
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'arquivoPdf',
            title: 'Arquivo PDF',
            description: 'Faça o upload do E-book/PDF aqui. Ele será enviado ao lead.',
            type: 'file',
            options: {
                accept: 'application/pdf'
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'ativo',
            title: 'Status (Ativo/Inativo)',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'titulo',
            media: 'imagem',
        },
    },
})