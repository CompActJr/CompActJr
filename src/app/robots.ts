import { MetadataRoute } from 'next'

/**
 * CONFIGURAÇÃO DO ROBOTS.TXT
 * @description Define as regras de rastreamento para os motores de busca.
 */
export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.compactjr.com'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // Bloqueia robôs de indexarem o painel do Sanity e as rotas de API
            disallow: ['/CompStudio/', '/api/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}