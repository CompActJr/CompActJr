// src/app/links/page.tsx

/**
 * PÁGINA: LINKS (Linktree da Bio)
 * @description Rota de captura de tráfego de redes sociais.
 * Possui a instrução 'noindex' para não canibalizar o SEO da Homepage.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

import BackgroundGlow from '../../components/BackgroundGlow'
import LinksTree from '../../components/LinksTree'

export const metadata = {
    title: 'Links Rápidos',
    description: 'Conecte-se com a CompAct Jr. — Orçamentos de TI, portfólio de sistemas e oportunidades.',
    robots: {
        index: false, // Blindagem contra indexação acidental no Google
        follow: true
    }
}

export default function LinksPage() {
    return (
        <main className="relative min-h-screen bg-preto overflow-x-clip selection:bg-secundaria selection:text-branco">
            <BackgroundGlow />
            <LinksTree />
        </main>
    )
}