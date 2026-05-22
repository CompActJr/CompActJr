import { MetadataRoute } from 'next'

/**
 * CONFIGURAÇÃO DO SITEMAP.XML
 * @description Gera dinamicamente o mapa do site para melhorar a indexação no Google.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://project-nextjs-one-rose.vercel.app/' // Substitua pelo domínio final em produção

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0, // Prioridade máxima (1.0) pois é a home e página única
        },
        // Exemplo: Se no futuro a EJ criar uma página de blog, você adicionaria aqui:
        // {
        //     url: `${baseUrl}/blog`,
        //     lastModified: new Date(),
        //     changeFrequency: 'weekly',
        //     priority: 0.8,
        // },
    ]
}