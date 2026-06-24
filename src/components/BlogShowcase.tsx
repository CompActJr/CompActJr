'use client'
import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import './styles/BlogShowcase.css'

/**
 * COMPONENTE: VITRINE DO BLOG (Pesquisa e Listagem)
 * @description Gerencia a renderização dos rascunhos de artigos,
 * com motor de busca client-side e filtragem por tags de engenharia.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: 'IA & Automação' | 'Engenharia' | 'Growth & SEO' | 'UI/UX' | 'Cultura EJ';
    readTime: string;
    date: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    image: string;
    featured?: boolean;
}

// MOCK PREPARADO PARA O FUTURO CMS
const articlesData: Article[] = [
    {
        id: 'art-1',
        slug: 'whatsapp-ia-2026',
        title: 'Por que o WhatsApp da sua empresa precisa de um Agente de IA',
        excerpt: 'Os consumidores não têm mais paciência para robôs de opções numéricas (Digite 1). Veja como a Inteligência Artificial generativa transformou o SAC em uma máquina de vendas.',
        category: 'IA & Automação',
        readTime: '5 min de leitura',
        date: '18 Jun 2026',
        author: {
            name: 'Kayua Lins',
            role: 'Diretor de Projetos',
            avatar: '/logos/logo-compact.webp'
        },
        image: '/portfolio/conecta.webp',
        featured: true
    },
    {
        id: 'art-2',
        slug: 'de-monolito-a-micro-frontends',
        title: 'De Monolito a Micro-frontends: Como escalamos o portal Totem',
        excerpt: 'Um mergulho profundo na arquitetura do maior portal educacional da região e como o Next.js resolveu nossos gargalos de requisição simultânea.',
        category: 'Engenharia',
        readTime: '8 min de leitura',
        date: '02 Jun 2026',
        author: {
            name: 'CompAct Labs',
            role: 'Pesquisa & Dev',
            avatar: '/logos/logo-compact.webp'
        },
        image: '/portfolio/totem-vest.png'
    },
    {
        id: 'art-3',
        slug: 'guia-seo-santa-maria',
        title: 'O Guia Definitivo de SEO para Negócios Locais em Santa Maria',
        excerpt: 'Estar no Google Maps não basta. Aprenda as 4 otimizações on-page que fazem a sua empresa aparecer na frente dos concorrentes da cidade.',
        category: 'Growth & SEO',
        readTime: '4 min de leitura',
        date: '14 Mai 2026',
        author: {
            name: 'Núcleo de Growth',
            role: 'Marketing',
            avatar: '/logos/logo-compact.webp'
        },
        image: '/portfolio/equilibrio.webp'
    },
    {
        id: 'art-4',
        slug: 'design-system-tailwind',
        title: 'Design System com Tailwind CSS: Padronizando tokens visuais',
        excerpt: 'Como construímos uma biblioteca de componentes que permite que designers no Figma e desenvolvedores no VS Code falem exatamente a mesma língua.',
        category: 'UI/UX',
        readTime: '6 min de leitura',
        date: '28 Abr 2026',
        author: {
            name: 'Kayua Lins',
            role: 'UI/UX Lead',
            avatar: '/logos/logo-compact.webp'
        },
        image: '/portfolio/nicole.webp'
    }
]

const categories = ['Todos', 'IA & Automação', 'Engenharia', 'Growth & SEO', 'UI/UX', 'Cultura EJ'] as const;

export default function BlogShowcase() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
    const [searchQuery, setSearchQuery] = useState<string>('')

    // Filtro otimizado de alta performance
    const filteredArticles = useMemo(() => {
        return articlesData.filter(article => {
            const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
            const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        })
    }, [selectedCategory, searchQuery])

    // Separa o artigo de manchete
    const featuredArticle = useMemo(() => {
        if (selectedCategory !== 'Todos' || searchQuery !== '') return null;
        return articlesData.find(a => a.featured);
    }, [selectedCategory, searchQuery])

    const regularArticles = featuredArticle
        ? filteredArticles.filter(a => a.id !== featuredArticle.id)
        : filteredArticles;

    return (
        <section className="container mx-auto px-6 max-w-7xl pt-36">

            {/* CABEÇALHO */}
            <div className="flex flex-col items-center text-center mb-12">
                <span className="font-principal text-sm text-secundaria font-bold uppercase tracking-[4px] mb-3 text-3xl md:text-3xl">Laboratório de Ideias</span>
                <h1 className="font-titulo text-4xl md:text-6xl font-black uppercase tracking-wider text-branco mb-4">
                    Blog & Insights
                </h1>
                <p className="max-w-2xl text-branco/60 font-principal md:text-lg">
                    Artigos escritos por nossa equipe de engenharia sobre arquitetura web, conversão e o impacto real da tecnologia nos negócios.
                </p>
            </div>

            {/* BARRA DE PESQUISA E FILTROS */}
            <div className="max-w-3xl mx-auto mb-16 flex flex-col gap-6">

                {/* Input Magnético */}
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-branco/40">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </span>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Pesquise por React, IA, SEO, tráfego..."
                        className="blog-search-input"
                    />
                    {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-branco/40 hover:text-branco">
                            LIMPAR
                        </button>
                    )}
                </div>

                {/* Pílulas de Categoria */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full font-principal text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                selectedCategory === cat ? 'bg-branco text-preto' : 'bg-branco/5 text-branco/60 hover:text-branco hover:bg-branco/10'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

            </div>

            {/* MANCHETE PRINCIPAL (HERO CARD) */}
            {featuredArticle && (
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link href={`/blog/${featuredArticle.slug}`} className="blog-hero-card group">
                        <div className="blog-hero-image-wrapper">
                            <Image src={featuredArticle.image} alt={featuredArticle.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-preto via-preto/80 to-transparent opacity-90" />
                        </div>

                        <div className="relative z-10 p-8 md:p-14 flex flex-col justify-between max-w-2xl">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="blog-tag-destaque">{featuredArticle.category}</span>
                                    <span className="text-xs font-principal text-secundaria font-bold">★ ARTIGO EM DESTAQUE</span>
                                </div>
                                <h2 className="font-titulo text-2xl md:text-4xl font-black text-branco group-hover:text-secundaria transition-colors leading-tight mb-4">
                                    {featuredArticle.title}
                                </h2>
                                <p className="font-principal text-branco/70 text-sm md:text-base leading-relaxed mb-6">
                                    {featuredArticle.excerpt}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-branco/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-secundaria/20 border border-secundaria flex items-center justify-center font-bold text-xs text-secundaria">
                                        KL
                                    </div>
                                    <div className="font-principal text-xs">
                                        <p className="font-bold text-branco">{featuredArticle.author.name}</p>
                                        <p className="text-branco/40">{featuredArticle.date} &bull; {featuredArticle.readTime}</p>
                                    </div>
                                </div>
                                <span className="font-principal text-xs font-bold uppercase tracking-widest text-branco group-hover:translate-x-1 transition-transform">
                                    Ler Artigo →
                                </span>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            )}

            {/* GRADE DE ARTIGOS REGULARES */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {regularArticles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                        >
                            <Link href={`/blog/${article.slug}`} className="blog-card group">
                                <div className="aspect-video relative overflow-hidden bg-[#141414]">
                                    <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <span className="absolute top-4 right-4 bg-preto/80 backdrop-blur-md border border-branco/10 text-branco font-principal text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                </div>

                                <div className="p-6 bg-[#0d0d0d] border border-t-0 border-branco/10 rounded-b-2xl flex flex-col justify-between flex-grow">
                                    <div>
                                        <span className="text-[10px] font-principal text-secundaria font-bold uppercase tracking-widest mb-2 block">{article.date}</span>
                                        <h3 className="font-titulo text-xl font-bold text-branco group-hover:text-secundaria transition-colors mb-2 line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="font-principal text-branco/60 text-sm line-clamp-3 mb-6">
                                            {article.excerpt}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-branco/5 flex items-center justify-between text-xs font-principal text-branco/40">
                                        <span>{article.author.name}</span>
                                        <span className="text-branco font-bold group-hover:translate-x-1 transition-transform">Ler →</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* MENSAGEM DE BUSCA VAZIA */}
            {filteredArticles.length === 0 && (
                <div className="text-center py-20 font-principal text-branco/40">
                    <p className="text-lg mb-2">Nenhum artigo encontrado para &quot;{searchQuery}&quot;</p>
                    <button onClick={() => { setSearchQuery(''); setSelectedCategory('Todos'); }} className="text-xs font-bold text-secundaria underline uppercase tracking-wider">
                        Ver todos os artigos
                    </button>
                </div>
            )}

        </section>
    )
}