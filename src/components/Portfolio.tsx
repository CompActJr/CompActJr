'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import './styles/Portfolio.css'

/**
 * COMPONENTE DE PORTFÓLIO (BENTO GRID)
 * @description Exibe os cases de sucesso reais da EJ.
 * Atualmente focado em Soluções Web, mas estruturado para receber Apps e Automações.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

const ArrowUpRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
)

export default function Portfolio() {
    // DADOS REAIS DOS PROJETOS
    // Etiquetagem focada no "Objetivo do Site" para gerar variedade visual.
    // Futuramente, basta trocar a 'category' para 'Mobile App' ou 'Chatbot'.
    const projects = [
        {
            id: 'proj-1',
            client: 'Totem Vestibulares',
            title: 'Portal Educacional Completo',
            category: 'Plataforma Institucional',
            url: 'https://totemvestibulares.compactjr.com/',
            image: '/portfolio/totem-vest.png',
            gridArea: 'md:col-span-2 md:row-span-2', // Destaque Principal
            delay: 0.1
        },
        {
            id: 'proj-2',
            client: 'Nicole Mundstock',
            title: 'Posicionamento e Identidade',
            category: 'Portfólio Profissional',
            url: 'https://nicole-mundstock.compactjr.com/',
            image: '/portfolio/nicole.png',
            gridArea: 'md:col-span-1 md:row-span-1', // Quadrado Lateral
            delay: 0.2
        },
        {
            id: 'proj-3',
            client: 'Conecta',
            title: 'Sistema de Acesso e Gestão',
            category: 'Web App',
            url: 'https://conecta.compactjr.com/',
            image: '/portfolio/conecta.png',
            gridArea: 'md:col-span-1 md:row-span-1', // Quadrado Lateral
            delay: 0.3
        },
        {
            id: 'proj-4',
            client: 'Equilíbrio JR',
            title: 'Esfera Econômica',
            category: 'Landing Page de Conversão',
            url: 'https://www.equilibrioufrgs.com/',
            image: '/portfolio/equilibrio.png',
            gridArea: 'md:col-span-2 md:row-span-1', // Panorâmico na Base
            delay: 0.4
        },
        {
            id: 'proj-5',
            client: 'Totem Entrada',
            title: 'Sistema de Recepção',
            category: 'Solução Operacional',
            url: 'https://totementrada.compactjr.com/',
            image: '/portfolio/totem.png',
            gridArea: 'md:col-span-1 md:row-span-1', // Quadrado Base
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
                    {projects.map((project) => (
                        // Transformado em uma tag 'a' animada para navegação externa
                        <motion.a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`portfolio-item block group ${project.gridArea}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: project.delay, ease: "easeOut" }}
                        >
                            <div className="portfolio-image-wrapper">
                                {/* Componente de imagem nativo do Next.js implementado */}
                                <Image
                                    src={project.image}
                                    alt={`Case de Sucesso: ${project.client} - ${project.title}`}
                                    fill
                                    className="object-contain object-center"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    ))}
                </div>

            </div>
        </section>
    )
}