import { defineType, defineField } from 'sanity'

export const linkBio = defineType({
    name: 'linkBio',
    title: 'Links da Bio',
    type: 'document',
    fields: [
        defineField({
            name: 'titulo',
            title: 'Título do Link',
            type: 'string',
            validation: (Rule) => Rule.required().error('O título é obrigatório'),
        }),
        defineField({
            name: 'subtitulo',
            title: 'Subtítulo',
            description: 'Texto de apoio embaixo do título (ex: "Fale com a nossa Equipe Comercial").',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'URL de Destino',
            type: 'url',
            validation: (Rule) => Rule.required().error('Insira um link válido'),
        }),
        defineField({
            name: 'destaque',
            title: 'Destacar Link?',
            description: 'Ligue essa opção para o botão ficar com a cor secundária (chamativo).',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'badge',
            title: 'Etiqueta (Badge)',
            description: 'Texto pequeno no canto do botão (ex: "EM ALTA", "PROCESSO SELETIVO"). Deixe vazio se não quiser.',
            type: 'string',
        }),
        defineField({
            name: 'ativo',
            title: 'Status (Ativo/Inativo)',
            description: 'Desligue para ocultar este link do site temporariamente.',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'ordem',
            title: 'Ordem de Exibição',
            description: 'Use números para ordenar (ex: 1 aparece primeiro, 2 depois...).',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
    ],
    // Isso aqui melhora a visualização em lista no painel para o Marketing
    preview: {
        select: {
            title: 'titulo',
            subtitle: 'url',
        },
    },
})