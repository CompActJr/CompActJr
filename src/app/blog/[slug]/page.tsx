// src/app/blog/[slug]/page.tsx

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import BackgroundGlow from '../../../components/BackgroundGlow'
import { client } from '@/src/sanity/lib/client'

/**
 * PÁGINA DINÂMICA DE ARTIGO (INTERCEPTADOR / PLACEHOLDER)
 * @description Rota curinga que captura qualquer slug vindo de /blog/[slug].
 * Atua como aviso de "Em Editoração" até a V3 plugar o CMS real.
 */

const queryArtigo = `*[_type == "artigoBlog" && slug.current == $slug][0] {
  title,
  category,
  author,
  date,
  readTime,
  "image": image.asset->url,
  content,
  referencias
}`

export const dynamic = 'force-dynamic'

const customPortableTextComponents = {
    block: {
        normal: ({children}: any) => <p className="font-principal text-branco/80 leading-relaxed mb-6 text-sm sm:text-base">{children}</p>,
        h2: ({children}: any) => <h2 className="font-titulo text-2xl sm:text-3xl font-bold mt-12 mb-6 text-branco">{children}</h2>,
        h3: ({children}: any) => <h3 className="font-titulo text-xl sm:text-2xl font-bold mt-8 mb-4 text-branco">{children}</h3>,
        blockquote: ({children}: any) => <blockquote className="border-l-4 border-secundaria pl-6 italic text-branco/60 my-8 py-2 text-lg">{children}</blockquote>,
    },
    list: {
        bullet: ({children}: any) => <ul className="list-disc pl-6 mb-8 font-principal text-branco/80 space-y-2 marker:text-secundaria">{children}</ul>,
        number: ({children}: any) => <ol className="list-decimal pl-6 mb-8 font-principal text-branco/80 space-y-2 marker:text-secundaria">{children}</ol>,
    },
    marks: {
        strong: ({children}: any) => <strong className="font-bold text-branco">{children}</strong>,
        link: ({value, children}: any) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
                <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : ''} className="text-secundaria hover:text-branco transition-colors underline decoration-secundaria/40 hover:decoration-branco">
                    {children}
                </a>
            )
        }
    }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {

    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const artigo = await client.fetch(queryArtigo, { slug })

    if (!artigo) {
        notFound()
    }

    const getInitials = (name: string) => {
        if (!name) return 'CJ';
        const parts = name.split(' ');
        if (parts.length > 1) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    }

    return (
        <main className="relative min-h-screen bg-preto text-branco overflow-x-clip selection:bg-secundaria selection:text-branco flex flex-col justify-between">
            <Header />
            <BackgroundGlow />

            <article className="container mx-auto px-6 max-w-3xl pt-36 pb-24 relative z-10 flex-grow">

                <Link href="/blog" className="inline-flex items-center gap-2 font-principal text-xs uppercase tracking-[2px] text-secundaria hover:text-branco transition-colors font-bold mb-12">
                    ← Voltar para os insights
                </Link>

                <header className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="font-principal text-[10px] sm:text-xs font-bold uppercase tracking-widest text-preto bg-secundaria px-3 py-1 rounded-full">
                            {artigo.category}
                        </span>
                        <span className="font-principal text-xs text-branco/40 uppercase tracking-widest">
                            {artigo.date} &bull; {artigo.readTime}
                        </span>
                    </div>

                    <h1 className="font-titulo text-3xl sm:text-5xl md:text-6xl font-black text-branco tracking-tight leading-tight mb-8">
                        {artigo.title}
                    </h1>

                    <div className="flex items-center gap-4 py-6 border-y border-branco/10">
                        <div className="w-12 h-12 rounded-full bg-secundaria/20 border border-secundaria flex items-center justify-center font-bold text-sm text-secundaria">
                            {getInitials(artigo.author?.name)}
                        </div>
                        <div className="font-principal">
                            <p className="font-bold text-branco text-sm">{artigo.author?.name || 'Equipe CompAct Jr.'}</p>
                            <p className="text-xs text-branco/60">{artigo.author?.role || 'Conteúdo Técnico'}</p>
                        </div>
                    </div>
                </header>

                {artigo.image && (
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-branco/10">
                        <Image src={artigo.image} alt={artigo.title} fill className="object-cover" priority />
                    </div>
                )}

                <div className="max-w-none pb-12 border-b border-branco/10">
                    {artigo.content ? (
                        <PortableText value={artigo.content} components={customPortableTextComponents} />
                    ) : (
                        <p className="font-principal text-branco/40 italic">Conteúdo em elaboração...</p>
                    )}
                </div>

                {/* SESSÃO DE REFERÊNCIAS */}
                {artigo.referencias && artigo.referencias.length > 0 && (
                    <div className="mt-12 p-8 rounded-3xl bg-branco/5 border border-branco/10 backdrop-blur-md">
                        <h3 className="font-titulo text-lg font-bold text-branco mb-6 flex items-center gap-3">
                            <svg className="w-5 h-5 text-secundaria" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            Referências e Materiais de Apoio
                        </h3>
                        <ul className="space-y-4">
                            {artigo.referencias.map((ref: any, index: number) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-secundaria mt-1 text-[10px]">■</span>
                                    <a
                                        href={ref.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-principal text-sm text-branco/70 hover:text-branco transition-colors underline decoration-transparent hover:decoration-secundaria/40"
                                    >
                                        {ref.titulo}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </article>

            <Footer />
        </main>
    )
}