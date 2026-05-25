'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import './styles/Portfolio.css'

/**
 * COMPONENTE DE PORTFÓLIO (BENTO GRID)
 * @description Exibe os cases de sucesso e projetos reais da Empresa Júnior.
 * Utiliza um grid assimétrico (mosaico) para uma apresentação visualmente dinâmica,
 * com foco em imagens e revelação de detalhes no hover.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

// Ícone SVG de seta para o botão de "Ver Case"
const ArrowUpRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
)

export default function Portfolio() {
    // DADOS MOCKADOS DOS PROJETOS (Cases Reais)
    // A propriedade 'gridArea' define o tamanho do bloco no mosaico do desktop.
    const projects = [
        {
            id: 'proj-1',
            client: 'TechNova Solutions',
            title: 'Sistema de Gestão Operacional (ERP)',
            category: 'Web App',
            image: '/portfolio-1.jpg', // Adicione imagens reais à pasta public
            gridArea: 'md:col-span-2 md:row-span-2', // Ocupa 2 colunas e 2 linhas (Destaque Principal)
            delay: 0.1
        },
        {
            id: 'proj-2',
            client: 'Boutique Flora',
            title: 'E-commerce de Alta Conversão',
            category: 'Site / E-commerce',
            image: '/portfolio-2.jpg',
            gridArea: 'md:col-span-1 md:row-span-1', // Quadrado padrão
            delay: 0.2
        },
        {
            id: 'proj-3',
            client: 'Clínica OdontoVida',
            title: 'App de Agendamento de Consultas',
            category: 'Mobile App',
            image: '/portfolio-3.jpg',
            gridArea: 'md:col-span-1 md:row-span-1', // Quadrado padrão
            delay: 0.3
        },
        {
            id: 'proj-4',
            client: 'Imobiliária Prime',
            title: 'Chatbot Integrado com CRM e WhatsApp',
            category: 'Automação / Chatbot',
            image: '/portfolio-4.jpg',
            gridArea: 'md:col-span-3 md:row-span-1', // Ocupa toda a largura da base (Banner Panorâmico)
            delay: 0.4
        }
    ]

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* CABEÇALHO */}
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

                {/* MOSAICO DE PROJETOS (BENTO GRID) */}
                <div className="portfolio-bento-grid">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            // A classe gridArea dita o comportamento dinâmico e assimétrico no desktop
                            className={`portfolio-item group ${project.gridArea}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: project.delay, ease: "easeOut" }}
                        >
                            {/* IMAGEM DE FUNDO DO PROJETO */}
                            <div className="portfolio-image-wrapper">
                                {/* Placeholder: Substitua por <Image /> quando tiver as fotos dos projetos */}
                                <div className="w-full h-full bg-branco/5 flex items-center justify-center border border-branco/10">
                                    <span className="text-branco/20 text-sm font-principal uppercase tracking-widest">{project.image}</span>
                                </div>
                            </div>

                            {/* OVERLAY ESCURO (Surge no Hover) */}
                            <div className="portfolio-overlay"></div>

                            {/* ETIQUETA DE CATEGORIA (Fixa no topo esquerdo) */}
                            <div className="portfolio-badge">
                                {project.category}
                            </div>

                            {/* CONTEÚDO REVELADO NO HOVER (Cliente, Título e Botão) */}
                            <div className="portfolio-content">
                                <div className="portfolio-text-block">
                                    <p className="portfolio-client">{project.client}</p>
                                    <h3 className="portfolio-title">{project.title}</h3>
                                </div>

                                <button className="portfolio-action-btn" aria-label="Ver Case de Sucesso">
                                    <ArrowUpRightIcon />
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}