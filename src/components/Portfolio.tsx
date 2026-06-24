'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation' // O motor de navegação suave do Next
import { motion } from 'framer-motion'
import './styles/Portfolio.css'

/**
 * COMPONENTE DE PORTFÓLIO HOMEPAGE (TEASERS)
 * @description Vitrine reduzida (3 itens) para a Home.
 * Atua como topo de funil: atrai visualmente e direciona o tráfego para a página /portfolio.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

const ArrowRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
)

export default function Portfolio() {
    const [tappedId, setTappedId] = useState<string | null>(null)
    const router = useRouter()

    // Selecionamos cirurgicamente apenas os 3 projetos de maior impacto visual
    const teaserProjects = [
        {
            id: 'proj-1',
            client: 'Totem Vestibulares',
            title: 'Portal Educacional Completo',
            category: 'Plataforma Institucional',
            image: '/portfolio/totem-vest.png',
            gridArea: 'md:col-span-2', // Ocupa a linha inteira (Gatilho de Autoridade)
            delay: 0.1
        },
        {
            id: 'proj-2',
            client: 'Nicole Mundstock',
            title: 'Posicionamento e Identidade',
            category: 'Portfólio Profissional',
            image: '/portfolio/nicole.webp',
            gridArea: 'md:col-span-1', // Divide a segunda linha
            delay: 0.2
        },
        {
            id: 'proj-3',
            client: 'Conecta',
            title: 'Sistema de Acesso e Gestão',
            category: 'Web App Transacional',
            image: '/portfolio/conecta.webp',
            gridArea: 'md:col-span-1', // Divide a segunda linha
            delay: 0.3
        }
    ]

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* CABEÇALHO REPOSICIONADO COM LINK DISCRETO */}
                <motion.header
                    className="portfolio-header flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="portfolio-kicker">Amostra de Capacidade</span>
                        <h2 className="portfolio-main-title">Projetos em Destaque</h2>
                    </div>

                    <Link
                        href="/portfolio"
                        className="hidden md:flex items-center gap-2 font-principal text-xs uppercase tracking-[2px] text-branco/60 hover:text-secundaria transition-colors font-bold pb-2"
                    >
                        Ver todos os 6+ cases →
                    </Link>
                </motion.header>

                <div className="portfolio-bento-grid">
                    {teaserProjects.map((project) => {
                        const isTapped = tappedId === project.id;

                        return (
                            <motion.div
                                key={project.id}
                                onClick={(e) => {
                                    if (typeof window !== 'undefined') {
                                        const isTouchDevice = window.matchMedia('(hover: none)').matches;

                                        if (isTouchDevice && !isTapped) {
                                            setTappedId(project.id);
                                        } else {
                                            // Roteamento SPA do Next (Instantâneo, sem piscar a tela)
                                            router.push('/portfolio');
                                        }
                                    }
                                }}
                                className={`portfolio-item block group ${project.gridArea} ${isTapped ? 'is-tapped' : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: project.delay, ease: "easeOut" }}
                            >
                                <div className="portfolio-image-wrapper">
                                    <Image src={project.image} alt={project.title} fill className="object-cover object-center" />
                                </div>

                                <div className="portfolio-overlay" />
                                <div className="portfolio-badge">{project.category}</div>

                                <div className="portfolio-content">
                                    <div className="portfolio-text-block">
                                        <p className="portfolio-client">{project.client}</p>
                                        <h3 className="portfolio-title">{project.title}</h3>
                                    </div>

                                    {/* Seta trocada para a direita (indica "Entrar na Galeria") */}
                                    <div className="portfolio-action-btn">
                                        <ArrowRightIcon />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* BOTÃO MONUMENTAL DE CHAMADA PARA AÇÃO (CTA) */}
                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link href="/portfolio" className="portfolio-magnetic-cta group">
                        <span className="cta-glare" />
                        <span className="relative z-10 flex items-center gap-3">
                            Explorar Portfólio Completo
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-secundaria group-hover:text-preto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}