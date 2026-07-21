// src/app/links/page.tsx

/**
 * PÁGINA: LINKS (Linktree da Bio)
 * @description Rota de captura de tráfego de redes sociais.
 * Possui a instrução 'noindex' para não canibalizar o SEO da Homepage.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

import BackgroundGlow from '../../components/BackgroundGlow'
import LinksTree from '../../components/LinksTree'
import { client } from '../../sanity/lib/client'

export const metadata = {
    title: 'Links Rápidos',
    description: 'Conecte-se com a CompAct Jr. — Orçamentos de TI, portfólio de sistemas e oportunidades.',
    robots: {
        index: false,
        follow: true
    }
}

const queryLinks = `*[_type == "linkBio" && ativo == true] | order(ordem asc) {
  _id,
  titulo,
  subtitulo,
  url,
  destaque,
  badge
}`

export const dynamic = 'force-dynamic'

export default async function LinksPage() {
    // Busca os dados no CMS antes de renderizar a tela
    const linksDoSanity = await client.fetch(queryLinks)

    return (
        <main className="relative min-h-screen bg-preto overflow-x-clip selection:bg-secundaria selection:text-branco">
            <BackgroundGlow />
            <LinksTree linksData={linksDoSanity} />
        </main>
    )
}