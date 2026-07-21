import { defineType, defineField } from 'sanity'

export const artigoBlog = defineType({
    name: 'artigoBlog',
    title: 'Artigos do Blog',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título do Artigo',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            description: 'Clique em "Generate" para criar o link automático baseado no título.',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Resumo (Card)',
            description: 'Texto que aparece na grade inicial do blog.',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Categoria',
            type: 'string',
            options: {
                list: ['IA & Automação', 'Engenharia', 'Growth & SEO', 'UI/UX', 'Cultura EJ'],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'readTime',
            title: 'Tempo de Leitura',
            description: 'Ex: "5 min de leitura"',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Data de Publicação',
            description: 'Ex: "18 Jun 2026"',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Autor do Artigo',
            type: 'object',
            fields: [
                { name: 'name', type: 'string', title: 'Nome do Autor' },
                { name: 'role', type: 'string', title: 'Cargo (Ex: Diretor de Projetos)' },
            ],
        }),
        defineField({
            name: 'image',
            title: 'Imagem de Capa',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Conteúdo Completo (Rich Text)',
            description: 'Escreva o artigo completo aqui.',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        // NOVO CAMPO: REFERÊNCIAS
        defineField({
            name: 'referencias',
            title: 'Referências e Links Úteis',
            description: 'Adicione links de documentações, ferramentas ou estudos citados.',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'titulo', title: 'Título do Link', type: 'string' },
                        { name: 'url', title: 'URL de Destino', type: 'url' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'featured',
            title: 'Manchete em Destaque?',
            description: 'Ligue esta opção para este artigo ser o principal do blog.',
            type: 'boolean',
            initialValue: false,
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
            title: 'title',
            author: 'author.name',
            media: 'image',
        },
        prepare(selection) {
            const { title, author, media } = selection
            return { title, subtitle: `por ${author || 'Equipe'}`, media }
        }
    },
})