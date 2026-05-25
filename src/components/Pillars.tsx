'use client'
import React from 'react'
import { motion } from 'framer-motion'
import TiltCard from './TiltCard' // Importação do nosso componente de Tracking 3D
import './styles/Pillars.css'

/**
 * COMPONENTE DE PILARES E VALORES (Missão, Negócio, Visão)
 * @description Apresenta a base institucional da EJ em um layout de grade com degraus
 * (staggered grid). Utiliza o TiltCard para interação orgânica de rastreio 3D com o rato.
 * @author Equipe de Projetos CompAct Jr.
 */
export default function Pillars() {
    // A configuração hover3D fixa foi removida, pois o TiltCard calcula isso dinamicamente
    const pillars = [
        {
            id: 'missao',
            title: 'Missão',
            description: 'Construir oportunidades aos estudantes, por meio de experiências profissionais, apresentando visões empreendedoras no meio acadêmico e deixando como legado uma cultura de vivências para todos, sendo uma EJ plural.',
            theme: 'light',
            alignment: 'md:mt-32', // Degrau mais baixo
        },
        {
            id: 'negocio',
            title: 'Negócio',
            description: 'Prover soluções em TI que engrandecem a vivência empresarial dos membros, oferecendo serviços de qualidade e preços justos.',
            theme: 'dark',
            alignment: 'md:mt-16', // Degrau intermediário
        },
        {
            id: 'visao',
            title: 'Visão',
            description: 'Voltar a ser reconhecida pelo MEJ, se consolidar como referência estadual como empresa júnior e ser protagonista.',
            theme: 'light',
            alignment: 'md:mt-0', // Degrau mais alto
        }
    ]

    return (
        <section id="pilares" className="pillars-section">

            {/* CABEÇALHO */}
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <header className="pillars-header text-center md:text-right border-r-0 md:border-r-2 border-branco pr-0 md:pr-6">
                    <h2 className="pillars-main-title">Nossos Pilares</h2>
                </header>
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                {/* GRADE EM ESCADARIA (3 Colunas) */}
                <div className="pillars-grid">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            className={`w-full ${pillar.alignment}`}
                            // A perspectiva precisa estar no elemento pai para criar a profundidade do TiltCard
                            style={{ perspective: '1200px' }}

                            // Animação de entrada inicial quando a tela rola
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2, // Cria o efeito de cascata (1, 2, 3)
                                ease: "easeOut"
                            }}
                        >

                            {/* O NOSSO COMPONENTE MÁGICO ENVOLVENDO O CARTÃO */}
                            <TiltCard className={`pillar-card ${pillar.theme}`}>

                                {/* pointer-events-none adicionado para que os textos não engasguem a leitura do rato */}
                                <div className="pillar-card-content pointer-events-none">
                                    <p className="pillar-description">{pillar.description}</p>
                                    <h3 className="pillar-title">{pillar.title}</h3>
                                </div>

                            </TiltCard>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}