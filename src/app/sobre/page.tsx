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

export const metadata = {
    title: 'Quem Somos',
    description: 'Conheça a história, a equipe e os valores por trás da CompAct Jr., a Empresa Júnior de TI da UFSM.',
}

export default function SobrePage() {
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
                <Team />
            </div>

            <Footer />
        </main>
    )
}