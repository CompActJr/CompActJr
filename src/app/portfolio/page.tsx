// src/app/portfolio/page.tsx

/**
 * PÁGINA: PORTFÓLIO COMPLETO
 * @description Rota estática dedicada a listar o acervo de cases de sucesso da EJ.
 * Mantida como Server Component para indexação máxima dos metadados.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

import BackgroundGlow from '../../components/BackgroundGlow'
import Watermark from '../../components/Watermark'
import Footer from '../../components/Footer'
import PortfolioShowcase from '../../components/PortfolioShowcase'
import Header from "@/src/components/Header";

export const metadata = {
    title: 'Portfólio de Projetos',
    description: 'Explore nosso acervo completo de sites institucionais, web apps, landing pages de conversão e sistemas sob medida.',
}

export default function PortfolioPage() {
    return (
        <main className="relative min-h-screen bg-preto overflow-x-clip text-branco selection:bg-secundaria selection:text-branco">
            <BackgroundGlow />
            <Header />

            <Watermark />


            <div className="relative pb-32">
                <PortfolioShowcase />
            </div>

            <Footer />
        </main>
    )
}