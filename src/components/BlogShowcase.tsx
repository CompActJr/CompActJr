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
    _id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    author: {
        name: string;
        role: string;
    };
    image: string;
    featured?: boolean;
}

interface BlogShowcaseProps {
    articlesData: Article[];
}

const categories = ['Todos', 'IA & Automação', 'Engenharia', 'Growth & SEO', 'UI/UX', 'Cultura EJ'] as const;

export default function BlogShowcase({ articlesData }: BlogShowcaseProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
    const [searchQuery, setSearchQuery] = useState<string>('')

    const filteredArticles = useMemo(() => {
        return articlesData.filter(article => {
            const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
            const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        })
    }, [selectedCategory, searchQuery, articlesData])

    const featuredArticle = useMemo(() => {
        if (selectedCategory !== 'Todos' || searchQuery !== '') return null;
        return articlesData.find(a => a.featured);
    }, [selectedCategory, searchQuery, articlesData])

    const regularArticles = featuredArticle
        ? filteredArticles.filter(a => a._id !== featuredArticle._id)
        : filteredArticles;

    // Função para pegar as iniciais do autor (Ex: "Kayua Lins" vira "KL")
    const getInitials = (name: string) => {
        if (!name) return 'CJ';
        const parts = name.split(' ');
        if (parts.length > 1) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    }

    return (
        <section className="container mx-auto px-6 max-w-7xl pt-36">

            <div className="flex flex-col items-center text-center mb-12">
                <span className="font-principal text-sm text-secundaria font-bold uppercase tracking-[4px] mb-3 text-3xl md:text-3xl">Laboratório de Ideias</span>
                <h1 className="font-titulo text-4xl md:text-6xl font-black uppercase tracking-wider text-branco mb-4">
                    Blog & Insights
                </h1>
                <p className="max-w-2xl text-branco/60 font-principal md:text-lg">
                    Artigos escritos por nossa equipe de engenharia sobre arquitetura web, conversão e o impacto real da tecnologia nos negócios.
                </p>
            </div>

            <div className="max-w-3xl mx-auto mb-16 flex flex-col gap-6">
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

            {featuredArticle && (
                <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                    <Link href={`/blog/${featuredArticle.slug}`} className="blog-hero-card group">
                        <div className="blog-hero-image-wrapper">
                            <Image src={featuredArticle.image} alt={featuredArticle.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-preto via-preto/80 to-transparent opacity-90" />
                        </div>

                        <div className="relative z-10 p-8 md:p-14 flex flex-col justify-between max-w-2xl h-full">
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

                            <div className="flex items-center justify-between pt-6 border-t border-branco/10 mt-auto">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-secundaria/20 border border-secundaria flex items-center justify-center font-bold text-xs text-secundaria">
                                        {getInitials(featuredArticle.author?.name)}
                                    </div>
                                    <div className="font-principal text-xs">
                                        <p className="font-bold text-branco">{featuredArticle.author?.name || 'Equipe CompAct'}</p>
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

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {regularArticles.map((article, index) => (
                        <motion.div
                            key={article._id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                        >
                            <Link href={`/blog/${article.slug}`} className="blog-card group h-full flex flex-col">
                                <div className="aspect-video relative overflow-hidden bg-[#141414] shrink-0">
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

                                    <div className="pt-4 border-t border-branco/5 flex items-center justify-between text-xs font-principal text-branco/40 mt-auto">
                                        <span>{article.author?.name || 'Equipe CompAct'}</span>
                                        <span className="text-branco font-bold group-hover:translate-x-1 transition-transform">Ler →</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

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