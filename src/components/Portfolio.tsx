'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import './styles/Portfolio.css'

/**
 * COMPONENTE DE PORTFÓLIO (BENTO GRID)
 * @description Exibe os cases de sucesso reais da EJ.
 * Implementa lógica de "Double Tap" nativa para dispositivos móveis,
 * garantindo que o usuário consiga ler os detalhes antes de ser redirecionado.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

const ArrowUpRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
)

export default function Portfolio() {
    // ESTADO: Controla qual projeto foi tocado no mobile
    const [tappedId, setTappedId] = useState<string | null>(null)

    const projects = [
        {
            id: 'proj-1',
            client: 'Totem Vestibulares',
            title: 'Portal Educacional Completo',
            category: 'Plataforma Institucional',
            url: 'https://totemvestibulares.compactjr.com/',
            image: '/portfolio/totem-vest.png',
            gridArea: 'md:col-span-2', // Ocupa as duas colunas (Destaque Principal)
            delay: 0.1
        },
        {
            id: 'proj-2',
            client: 'Nicole Mundstock',
            title: 'Posicionamento e Identidade',
            category: 'Portfólio Profissional',
            url: 'https://nicole-mundstock.compactjr.com/',
            image: '/portfolio/nicole.webp',
            gridArea: 'md:col-span-1', // Metade da tela
            delay: 0.2
        },
        {
            id: 'proj-3',
            client: 'Conecta',
            title: 'Sistema de Acesso e Gestão',
            category: 'Web App',
            url: 'https://conecta.compactjr.com/',
            image: '/portfolio/conecta.webp',
            gridArea: 'md:col-span-1', // Metade da tela
            delay: 0.3
        },
        {
            id: 'proj-4',
            client: 'Equilíbrio JR',
            title: 'Esfera Econômica',
            category: 'Landing Page de Conversão',
            url: 'https://www.equilibrioufrgs.com/',
            image: '/portfolio/equilibrio.webp',
            gridArea: 'md:col-span-1', // Metade da tela
            delay: 0.4
        },
        {
            id: 'proj-5',
            client: 'Totem Entrada',
            title: 'Sistema de Recepção',
            category: 'Solução Operacional',
            url: 'https://totementrada.compactjr.com/',
            image: '/portfolio/totem.webp',
            gridArea: 'md:col-span-1', // Metade da tela
            delay: 0.5
        }
    ]

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <motion.header
                    className="portfolio-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="portfolio-kicker">Nosso Trabalho</span>
                    <h2 className="portfolio-main-title">Projetos em Destaque</h2>
                </motion.header>

                <div className="portfolio-bento-grid">
                    {projects.map((project) => {
                        const isTapped = tappedId === project.id;

                        return (
                            <motion.a
                                key={project.id}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    // Previne erros durante a renderização no servidor do Next.js
                                    if (typeof window !== 'undefined') {
                                        // Verifica se o aparelho de acesso NÃO suporta mouse/hover (Mobile)
                                        const isTouchDevice = window.matchMedia('(hover: none)').matches;

                                        if (isTouchDevice && !isTapped) {
                                            e.preventDefault(); // Impede o link de abrir
                                            setTappedId(project.id); // Simula o hover
                                        }
                                        // Se isTapped for verdadeiro (2º toque), a função deixa o clique passar normalmente.
                                    }
                                }}
                                // Adiciona a classe 'is-tapped' se foi tocado no mobile
                                className={`portfolio-item block group ${project.gridArea} ${isTapped ? 'is-tapped' : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: project.delay, ease: "easeOut" }}
                            >
                                <div className="portfolio-image-wrapper">
                                    <Image
                                        src={project.image}
                                        alt={`Case de Sucesso: ${project.client} - ${project.title}`}
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 1768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                <div className="portfolio-overlay"></div>

                                <div className="portfolio-badge">
                                    {project.category}
                                </div>

                                <div className="portfolio-content">
                                    <div className="portfolio-text-block">
                                        <p className="portfolio-client">{project.client}</p>
                                        <h3 className="portfolio-title">{project.title}</h3>
                                    </div>

                                    <div className="portfolio-action-btn">
                                        <ArrowUpRightIcon />
                                    </div>
                                </div>

                            </motion.a>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}