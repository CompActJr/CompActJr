'use client'
import React from 'react'
import { motion } from 'framer-motion'
import './Pillars.css'

/**
 * COMPONENTE DE PILARES E VALORES (Missão, Negócio, Visão)
 * @description Apresenta a base institucional da EJ em um layout de grade com degraus
 * (staggered grid). Mantém a interatividade 3D herdada da seção de Serviços.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */
export default function Pillars() {
    // CONFIGURAÇÃO DOS CARDS INSTITUCIONAIS
    // O 'alignment' dita a altura do card simulando uma escada no desktop (mt-0, mt-16, mt-32)
    const pillars = [
        {
            id: 'missao',
            title: 'Missão',
            description: 'Construir oportunidades aos estudantes, por meio de experiências profissionais, apresentando visões empreendedoras no meio acadêmico e deixando como legado uma cultura de vivências para todos, sendo uma EJ plural.',
            theme: 'light',
            alignment: 'md:mt-32', // Degrau mais baixo
            hover3D: { rotateY: 10, rotateX: 5, scale: 1.05 }
        },
        {
            id: 'negocio',
            title: 'Negócio',
            description: 'Prover soluções em TI que engrandecem a vivência empresarial dos membros, oferecendo serviços de qualidade e preços justos.',
            theme: 'dark',
            alignment: 'md:mt-16', // Degrau intermediário
            hover3D: { rotateX: 10, scale: 1.05 }
        },
        {
            id: 'visao',
            title: 'Visão',
            description: 'Voltar a ser reconhecida pelo MEJ, se consolidar como referência estadual como empresa júnior e ser protagonista.',
            theme: 'light',
            alignment: 'md:mt-0', // Degrau mais alto
            hover3D: { rotateY: -10, rotateX: 5, scale: 1.05 }
        }
    ]

    return (
        <section id="pilares" className="pillars-section">

            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                {/* GRADE EM ESCADARIA (3 Colunas) */}
                <div className="pillars-grid">
                    {pillars.map((pillar, index) => (
                        // O wrapper com perspective garante que a rotação ocorra em 3D
                        <div
                            key={pillar.id}
                            className={`w-full ${pillar.alignment}`}
                            style={{ perspective: '1200px' }}
                        >
                            <motion.div
                                className={`pillar-card ${pillar.theme}`}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2, // Entrada em cascata sequencial
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    ...pillar.hover3D,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                            >
                                <div className="pillar-card-content">
                                    {/* No protótipo, a descrição vem antes do título nesta seção */}
                                    <p className="pillar-description">{pillar.description}</p>
                                    <h3 className="pillar-title">{pillar.title}</h3>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}