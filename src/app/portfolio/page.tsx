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
import { client } from '../../sanity/lib/client'

export const metadata = {
    title: 'Portfólio de Projetos',
    description: 'Explore nosso acervo completo de sites institucionais, web apps, landing pages de conversão e sistemas sob medida.',
}

const queryProjetos = `*[_type == "projetoPortfolio" && ativo == true] | order(ordem asc) {
  _id,
  client,
  title,
  category,
  "image": image.asset->url,
  description,
  challenge,
  solution,
  stack,
  url
}`

export const dynamic = 'force-dynamic'

export default async function PortfolioPage() {
    const projetosDoSanity = await client.fetch(queryProjetos)

    return (
        <main className="relative min-h-screen bg-preto overflow-x-clip text-branco selection:bg-secundaria selection:text-branco">
            <BackgroundGlow />
            <Header />
            <Watermark />

            <div className="relative pb-32">
                <PortfolioShowcase projectsData={projetosDoSanity} />
            </div>

            <Footer />
        </main>
    )
}