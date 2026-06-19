'use client'
import React from 'react'
import { motion } from 'framer-motion'
import TiltCard from './TiltCard'
import './styles/Pillars.css'

/**
 * COMPONENTE DE PILARES E VALORES (Missão, Negócio, Visão)
 * @description Apresenta a base institucional da EJ em um layout de grade com degraus (staggered grid).
 * Utiliza o TiltCard para interação orgânica de rastreio 3D com o mouse.
 * @kayualins Equipe de Projetos CompAct Jr.
 */
export default function Pillars() {
    const pillars = [
        {
            id: 'missao',
            title: 'Missão',
            description: 'Construir oportunidades aos estudantes, por meio de experiências profissionais, apresentando visões empreendedoras no meio acadêmico e deixando como legado uma cultura de vivências para todos, sendo uma EJ plural.',
            theme: 'light',
            alignment: 'md:mt-32',
        },
        {
            id: 'negocio',
            title: 'Negócio',
            description: 'Prover soluções em TI que engrandecem a vivência empresarial dos membros, oferecendo serviços de qualidade e preços justos.',
            theme: 'dark',
            alignment: 'md:mt-16',
        },
        {
            id: 'visao',
            title: 'Visão',
            description: 'Voltar a ser reconhecida pelo MEJ, se consolidar como referência estadual como empresa júnior e ser protagonista.',
            theme: 'light',
            alignment: 'md:mt-0',
        }
    ]

    return (
        <section id="pilares" className="pillars-section">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <header className="pillars-header text-center md:text-right border-r-0 md:border-r-2 border-branco pr-0 md:pr-6">
                    <h2 className="pillars-main-title">Nossos Pilares</h2>
                </header>
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="pillars-grid">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            className={`w-full ${pillar.alignment}`}
                            // A perspectiva precisa estar no elemento pai para criar a profundidade matemática do TiltCard
                            style={{ perspective: '1200px' }}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            // A multiplicação pelo index cria o efeito de cascata na renderização inicial
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        >
                            <TiltCard className={`pillar-card ${pillar.theme}`}>
                                {/* pointer-events-none evita que o texto cause engasgos (flicker) na leitura do mouse pelo TiltCard */}
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