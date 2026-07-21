import { defineType, defineField } from 'sanity'

export const membroEquipe = defineType({
    name: 'membroEquipe',
    title: 'Membros da Equipe',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome do Membro',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Cargo',
            description: 'Ex: Diretor de Projetos, Assessor Comercial...',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'department',
            title: 'Diretoria / Departamento',
            type: 'string',
            options: {
                list: [
                    'PRESIDÊNCIA',
                    'ADM-FIN',
                    'COMERCIAL',
                    'GESTÃO DE PESSOAS',
                    'GESTÃO DE PROJETOS',
                    'MARKETING'
                ],
                layout: 'radio' // Cria botões fáceis de clicar no painel
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isDirector',
            title: 'É Diretor(a)?',
            description: 'Ligue esta opção para dar destaque visual no card e cor diferenciada.',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'image',
            title: 'Foto do Membro',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'instagram',
            title: 'Link do Instagram',
            type: 'url',
        }),
        defineField({
            name: 'linkedin',
            title: 'Link do LinkedIn',
            type: 'url',
        }),
        defineField({
            name: 'github',
            title: 'Link do GitHub',
            type: 'url',
        }),
        defineField({
            name: 'ordem',
            title: 'Ordem de Exibição',
            description: 'Use números menores para diretores aparecerem primeiro (Ex: 1 Diretor, 2 Gerente, 3 Assessor).',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'ativo',
            title: 'Membro Ativo?',
            description: 'Desligue quando o membro se tornar Alumni (sair da EJ).',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'department',
            media: 'image',
        },
    },
})