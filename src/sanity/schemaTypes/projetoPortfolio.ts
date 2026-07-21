import { defineType, defineField } from 'sanity'

export const projetoPortfolio = defineType({
    name: 'projetoPortfolio',
    title: 'Portfólio de Projetos',
    type: 'document',
    fields: [
        defineField({
            name: 'client',
            title: 'Nome do Cliente',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Título do Projeto',
            description: 'Ex: Plataforma Educacional Completa',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Categoria',
            type: 'string',
            options: {
                list: [
                    { title: 'Plataforma Institucional', value: 'Plataforma Institucional' },
                    { title: 'Portfólio Profissional', value: 'Portfólio Profissional' },
                    { title: 'Web App', value: 'Web App' },
                    { title: 'Landing Page de Conversão', value: 'Landing Page de Conversão' },
                    { title: 'Solução Operacional', value: 'Solução Operacional' },
                ],
                layout: 'radio', // Cria botões de rádio no painel para facilitar
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Imagem de Capa (Thumbnail)',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Resumo (Card)',
            description: 'Aparece na grade inicial.',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'challenge',
            title: 'O Gargalo (Desafio)',
            description: 'Aparece dentro do modal.',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'solution',
            title: 'Nossa Solução',
            description: 'Aparece dentro do modal.',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'stack',
            title: 'Stack Tecnológica',
            description: 'Adicione as tecnologias usadas (ex: Next.js, Tailwind, etc). Pressione Enter após cada uma.',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'url',
            title: 'Link do Projeto',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'ordem',
            title: 'Ordem de Exibição',
            description: 'Projetos com números menores aparecem primeiro (ex: 1, 2, 3). Obs: Os três primeiros aparecem na homepage ',
            type: 'number',
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
            title: 'client',
            subtitle: 'title',
            media: 'image',
        },
    },
})