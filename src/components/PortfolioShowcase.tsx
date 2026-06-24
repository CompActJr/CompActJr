'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import './styles/PortfolioShowcase.css'

/**
 * COMPONENTE: VITRINE COM FILTROS E MODAL (PORTFOLIO SHOWCASE)
 * @description Gerencia a renderização da grade completa de projetos,
 * a lógica de filtragem animada por categoria e a abertura do modal de case detalhado.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

interface Project {
    id: string;
    client: string;
    title: string;
    category: 'Plataforma Institucional' | 'Portfólio Profissional' | 'Web App' | 'Landing Page de Conversão' | 'Solução Operacional';
    image: string;
    description: string;
    challenge: string;
    solution: string;
    stack: string[];
    url: string;
}

const projectsData: Project[] = [
    {
        id: 'proj-1',
        client: 'Totem Vestibulares',
        title: 'Portal Educacional Completo',
        category: 'Plataforma Institucional',
        image: '/portfolio/totem-vest.png',
        description: 'Plataforma de alta escalabilidade desenvolvida para concentrar unidades, bibliotecas e eventos do maior cursinho pré-vestibular da região.',
        challenge: 'O cliente possuía informações descentralizadas em PDFs e redes sociais, gerando sobrecarga no atendimento do WhatsApp.',
        solution: 'Construímos um portal com rotas dinâmicas, otimização extrema de imagens e painel de conversão de novos alunos.',
        stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel CDN'],
        url: 'https://totemvestibulares.compactjr.com/'
    },
    {
        id: 'proj-2',
        client: 'Nicole Mundstock',
        title: 'Posicionamento e Identidade',
        category: 'Portfólio Profissional',
        image: '/portfolio/nicole.webp',
        description: 'Site minimalista e focado em design de alto padrão para ditar a autoridade e o requinte do trabalho da arquiteta.',
        challenge: 'Transmitir a sofisticação física dos projetos de arquitetura para a tela do celular sem perder performance.',
        solution: 'Aplicação de tipografia premium, paleta monocromática e transições suaves de opacidade no scroll.',
        stack: ['React', 'Framer Motion', 'Tailwind CSS'],
        url: 'https://nicole-mundstock.compactjr.com/'
    },
    {
        id: 'proj-3',
        client: 'Conecta',
        title: 'Sistema de Acesso e Gestão',
        category: 'Web App',
        image: '/portfolio/conecta.webp',
        description: 'Aplicação web transacional feita para o controle de presença, contagem de métricas e credenciamento de eventos.',
        challenge: 'O sistema precisava rodar sem travar em conexões 3G de auditórios lotados durante o credenciamento.',
        solution: 'Desenvolvimento focado em Client-side caching e requisições ultraleves no back-end.',
        stack: ['Next.js', 'Node.js', 'API REST', 'Tailwind'],
        url: 'https://conecta.compactjr.com/'
    },
    {
        id: 'proj-4',
        client: 'Equilíbrio JR',
        title: 'Esfera Econômica',
        category: 'Landing Page de Conversão',
        image: '/portfolio/equilibrio.webp',
        description: 'Página de altíssima conversão construída para a Empresa Júnior de Economia da UFRGS captar clientes de consultoria.',
        challenge: 'Ranqueamento orgânico no Google (SEO) e clareza na explicação de serviços financeiros complexos.',
        solution: 'Estruturação semântica rigorosa, copywriting em blocos em zigue-zague e formulário de lead nativo.',
        stack: ['React', 'SEO Avançado', 'Figma to Code'],
        url: 'https://www.equilibrioufrgs.com/'
    },
    {
        id: 'proj-5',
        client: 'Totem Entrada',
        title: 'Sistema de Recepção',
        category: 'Solução Operacional',
        image: '/portfolio/totem.webp',
        description: 'Software operacional de interface rápida para totens de autoatendimento e triagem de alunos na portaria física.',
        challenge: 'Interface precisava ser "à prova de erros" para usuários de todas as idades utilizarem em telas touch.',
        solution: 'Botões de proporção alargada, fluxos de no máximo 2 cliques e feedback visual de alto contraste.',
        stack: ['React', 'UI/UX Touch', 'State Management'],
        url: 'https://totementrada.compactjr.com/'
    },
    {
        id: 'proj-6',
        client: 'CompAct Labs',
        title: 'Ecossistema de Automação',
        category: 'Web App',
        image: '/portfolio/conecta.webp',
        description: 'Projeto interno de pesquisa e desenvolvimento de dashboards para análise de dados comerciais da EJ.',
        challenge: 'Cruzar dados de formulários do site com a base de clientes do CRM comercial.',
        solution: 'Criação de webhooks customizados e painel de indicadores com gráficos dinâmicos.',
        stack: ['TypeScript', 'Next.js Route Handlers', 'Chart.js'],
        url: 'https://compactjr.com/'
    }
]

const categories = ['Todos', 'Web App', 'Plataforma Institucional', 'Landing Page de Conversão', 'Portfólio Profissional', 'Solução Operacional'] as const;

export default function PortfolioShowcase() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
    const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

    const filteredProjects = selectedCategory === 'Todos'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory)

    return (
        <section className="container mx-auto px-6 max-w-7xl pt-36">

            {/* CABEÇALHO */}
            <div className="flex flex-col items-center text-center mb-16">
                <span className="font-principal text-sm text-secundaria font-bold uppercase tracking-[4px] mb-3  text-3xl md:text-3xl">Nosso Orgulho</span>
                <h1 className="font-titulo text-4xl md:text-6xl font-black uppercase tracking-wider text-branco mb-4">
                    Acervo de Projetos
                </h1>
                <p className="max-w-2xl text-branco/60 font-principal md:text-lg">
                    Não vendemos apenas telas bonitas. Desenvolvemos infraestrutura digital sob medida para resolver gargalos operacionais e comerciais.
                </p>
            </div>

            {/* BARRA DE FILTROS ANIMADA */}
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16">
                {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`relative px-5 py-2.5 rounded-full font-principal text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                                isActive ? 'text-preto' : 'text-branco/60 hover:text-branco bg-branco/5 hover:bg-branco/10'
                            }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeCategoryPill"
                                    className="absolute inset-0 bg-branco rounded-full z-0"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </button>
                    )
                })}
            </div>

            {/* GRADE DE PROJETOS COM EFEITO LAYOUT */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout // Força os cartões a deslizarem suavemente quando a grade muda
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                            className="showcase-card group"
                            onClick={() => setActiveModalProject(project)}
                        >
                            <div className="showcase-image-container aspect-video relative overflow-hidden rounded-t-xl bg-[#141414]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-preto via-preto/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                <span className="absolute top-4 right-4 bg-preto/60 backdrop-blur-md border border-branco/10 text-secundaria font-principal text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    {project.category}
                                </span>
                            </div>

                            <div className="p-6 bg-[#0d0d0d] border border-t-0 border-branco/10 rounded-b-xl flex flex-col justify-between flex-grow">
                                <div>
                                    <p className="font-principal text-xs text-secundaria font-bold uppercase tracking-widest mb-1">{project.client}</p>
                                    <h3 className="font-titulo text-xl font-bold text-branco group-hover:text-secundaria transition-colors mb-2">{project.title}</h3>
                                    <p className="font-principal text-branco/60 text-sm line-clamp-2">{project.description}</p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-branco/5 flex items-center justify-between">
                                    <div className="flex gap-1.5 overflow-hidden max-w-[70%]">
                                        {project.stack.slice(0, 2).map((tech, i) => (
                                            <span key={i} className="text-[10px] font-principal text-branco/40 bg-branco/5 px-2 py-0.5 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.stack.length > 2 && (
                                            <span className="text-[10px] font-principal text-secundaria bg-secundaria/10 px-1.5 py-0.5 rounded">
                                                +{project.stack.length - 2}
                                            </span>
                                        )}
                                    </div>

                                    <span className="font-principal text-xs font-bold text-branco group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                        Detalhes →
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* MODAL DE CASE DETALHADO */}
            <AnimatePresence>
                {activeModalProject && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-preto/80 backdrop-blur-md"
                        // e.stopPropagation() evita que o clique dentro da caixa branca feche o modal acidentalmente
                        onClick={() => setActiveModalProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#121212] border border-branco/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl"
                        >
                            <button
                                onClick={() => setActiveModalProject(null)}
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-branco/5 hover:bg-branco/10 flex items-center justify-center text-branco/60 hover:text-branco transition-colors"
                            >
                                ✕
                            </button>

                            <span className="font-principal text-xs font-bold text-secundaria uppercase tracking-[3px]">{activeModalProject.category}</span>
                            <h2 className="font-titulo text-2xl md:text-4xl font-black text-branco uppercase tracking-wide mt-1 mb-6">
                                {activeModalProject.client} — {activeModalProject.title}
                            </h2>

                            <div className="aspect-video relative rounded-xl overflow-hidden mb-8 border border-branco/10">
                                <Image src={activeModalProject.image} alt={activeModalProject.title} fill className="object-cover" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-branco/5 p-5 rounded-xl border border-branco/5">
                                    <h4 className="font-titulo text-sm uppercase text-branco/40 tracking-wider mb-2 flex items-center gap-2">
                                        <span>⚠️</span> O Gargalo (Desafio)
                                    </h4>
                                    <p className="font-principal text-sm text-branco/80 leading-relaxed">{activeModalProject.challenge}</p>
                                </div>
                                <div className="bg-secundaria/5 p-5 rounded-xl border border-secundaria/20">
                                    <h4 className="font-titulo text-sm uppercase text-secundaria tracking-wider mb-2 flex items-center gap-2">
                                        <span>💡</span> Nossa Solução
                                    </h4>
                                    <p className="font-principal text-sm text-branco/80 leading-relaxed">{activeModalProject.solution}</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-principal text-xs uppercase text-branco/40 tracking-widest mb-3">Stack Tecnológica Empregada</h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeModalProject.stack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-branco/10 text-branco font-principal text-xs font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-branco/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <span className="text-xs text-branco/40 font-principal">Desenvolvido sob os padrões de excelência CompAct Jr.</span>
                                <a
                                    href={activeModalProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-branco hover:bg-secundaria text-preto hover:text-branco font-principal text-sm font-bold uppercase tracking-wider text-center transition-all shadow-lg"
                                >
                                    Acessar Projeto ao Vivo ↗
                                </a>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    )
}