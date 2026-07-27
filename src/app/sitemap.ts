import { MetadataRoute } from 'next'
import { client } from '@/src/sanity/lib/client'

/**
 * CONFIGURAÇÃO DO SITEMAP.XML
 * @description Gera dinamicamente o mapa do site para melhorar a indexação no Google.
 * Conecta-se ao Sanity para gerar rotas dinâmicas dos artigos do blog.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.compactjr.com'

    // Busca todos os artigos ativos no Sanity para gerar as URLs dinâmicas
    const artigos = await client.fetch(`*[_type == "artigoBlog" && ativo == true]{ "slug": slug.current, _updatedAt }`)

    // Mapeia os artigos para o formato exigido pelo Google
    const blogUrls = artigos.map((artigo: any) => ({
        url: `${baseUrl}/blog/${artigo.slug}`,
        lastModified: artigo._updatedAt ? new Date(artigo._updatedAt) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Rotas estáticas principais (Criadas na fase de Expansão)
    const rotasEstaticas = [
        '',
        '/sobre',
        '/portfolio',
        '/blog',
        '/materiais',
        '/links'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1.0 : 0.9,
    }))

    return [...rotasEstaticas, ...blogUrls]
}