// src/app/sobre/page.tsx

/**
 * PÁGINA: QUEM SOMOS (SOBRE)
 * @description Página institucional focada em apresentar a essência,
 * pilares estratégicos, história e equipe da CompAct Jr.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

import BackgroundGlow from '../../components/BackgroundGlow'
import Watermark from '../../components/Watermark'
import Pillars from '../../components/Pillars'
import Values from '../../components/Values'
import History from '../../components/History'
import Team from '../../components/Team'
import Footer from '../../components/Footer'
import Header from "@/src/components/Header";

export const metadata = {
    title: 'Quem Somos | CompAct Jr.',
    description: 'Conheça a história, a equipe e os valores por trás da CompAct Jr., a Empresa Júnior de TI da UFSM.',
}

export default function SobrePage() {
    return (
        <main className="relative min-h-screen bg-preto overflow-x-clip text-branco selection:bg-secundaria selection:text-branco">
            <Header />
            <BackgroundGlow />

            <Watermark text="CULTURA" />

            <section className="relative pt-40 pb-20 px-6 container mx-auto max-w-7xl z-10 flex flex-col items-center text-center">
                <span className="font-principal text-sm text-secundaria font-bold uppercase tracking-[8px] mb-4 text-3xl md:text-3xl">Nossa Essência</span>
                <h1 className="font-titulo text-5xl md:text-7xl font-black uppercase tracking-wider mb-6">
                    Quem Somos
                </h1>
                <p className="max-w-3xl text-branco/70 md:text-lg leading-relaxed font-principal">
                    Somos uma empresa júnior de Tecnologia da Informação vinculada à UFSM.
                    Movidos por desafios, transformamos conhecimento acadêmico em soluções de alto impacto
                    para o mercado, sempre focados no desenvolvimento profissional dos nossos membros.
                </p>
            </section>

            <div className="relative z-10 flex flex-col gap-32 pb-32 mt-12">
                <History />
                <Pillars />
                <Values />
                <Team />
            </div>

            <Footer />
        </main>
    )
}