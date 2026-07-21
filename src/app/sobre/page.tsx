// src/app/sobre/page.tsx

import Header from '../../components/Header'
import BackgroundGlow from '../../components/BackgroundGlow'
import Watermark from '../../components/Watermark'
import AboutHero from '../../components/AboutHero'
import History from '../../components/History'
import Pillars from '../../components/Pillars'
import Values from '../../components/Values'
import Team from '../../components/Team'
import Footer from '../../components/Footer'
import { client } from '../../sanity/lib/client'

export const metadata = {
    title: 'Quem Somos',
    description: 'Conheça a história, a equipe e os valores por trás da CompAct Jr., a Empresa Júnior de TI da UFSM.',
}

const queryEquipe = `*[_type == "membroEquipe" && ativo == true] | order(ordem asc) {
  _id,
  name,
  role,
  department,
  isDirector,
  "image": image.asset->url,
  instagram,
  linkedin,
  github
}`

export const dynamic = 'force-dynamic'

export default async function SobrePage() {
    const equipeDoSanity = await client.fetch(queryEquipe)

    const ordemDiretorias = [
        'PRESIDÊNCIA',
        'ADM-FIN',
        'COMERCIAL',
        'GESTÃO DE PESSOAS',
        'GESTÃO DE PROJETOS',
        'MARKETING'
    ]

    const teamDataOrganizado = ordemDiretorias.map(dept => ({
        department: dept,
        members: equipeDoSanity.filter((m: any) => m.department === dept)
    })).filter(dept => dept.members.length > 0) // Esconde a diretoria se não tiver ninguém cadastrado ainda

    return (
        <main className="relative min-h-screen bg-preto overflow-x-clip text-branco selection:bg-secundaria selection:text-branco">
            <Header />
            <BackgroundGlow />
            <Watermark />
            <AboutHero />

            <div className="relative z-10 flex flex-col gap-32 pb-32 mt-12">
                <div id="secao-trajetoria" className="scroll-mt-28">
                    <History />
                </div>

                <Pillars />
                <Values />

                <Team teamData={teamDataOrganizado} />
            </div>

            <Footer />
        </main>
    )
}