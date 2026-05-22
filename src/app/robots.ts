import { MetadataRoute } from 'next'

/**
 * CONFIGURAÇÃO DO ROBOTS.TXT
 * @description Define as regras de rastreamento para os motores de busca.
 * Como é uma landing page comercial, liberamos o acesso total (*) a todos os robôs.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // Se no futuro houver painel admin, você bloquearia aqui:
            // disallow: '/admin/',
        },
        // Aponta para o mapa do site (altere para o domínio real depois)
        sitemap: 'https://project-nextjs-one-rose.vercel.app/sitemap.xml',
    }
}