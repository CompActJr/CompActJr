import { defineField, defineType } from 'sanity'

export const clienteParceiro = defineType({
    name: 'clienteParceiro',
    title: 'Clientes e Parceiros',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome da Instituição/Empresa',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'tipo',
            title: 'Tipo (Cliente ou Apoiador)',
            type: 'string',
            options: {
                list: [
                    { title: 'Apoiador / Parceiro Institucional', value: 'parceiro' },
                    { title: 'Cliente (Case Comercial)', value: 'cliente' }
                ],
                layout: 'radio'
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'url',
            title: 'Link do Site ou Rede Social',
            type: 'url',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'logo',
            title: 'Logo (Utilize fundo transparente / PNG)',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'ativo',
            title: 'Ativo (Exibir na Homepage?)',
            type: 'boolean',
            initialValue: true,
        })
    ]
})