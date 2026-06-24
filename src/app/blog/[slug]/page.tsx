// src/app/blog/[slug]/page.tsx

import React from 'react'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import BackgroundGlow from '../../../components/BackgroundGlow'

/**
 * PÁGINA DINÂMICA DE ARTIGO (INTERCEPTADOR / PLACEHOLDER)
 * @description Rota curinga que captura qualquer slug vindo de /blog/[slug].
 * Atua como aviso de "Em Editoração" até a V3 plugar o CMS real.
 */

export default function ArticlePlaceholderPage({ params }: { params: { slug: string } }) {
    // Captura o nome do link que o usuário clicou lá na vitrine
    const { slug } = params

    return (
        <main className="relative min-h-screen bg-preto text-branco overflow-x-clip selection:bg-secundaria selection:text-branco flex flex-col justify-between">
            <Header />
            <BackgroundGlow />

            <article className="container mx-auto px-6 max-w-4xl pt-36 pb-24 relative z-10 flex-grow">

                <Link href="/blog" className="inline-flex items-center gap-2 font-principal text-xs uppercase tracking-[2px] text-secundaria hover:text-branco transition-colors font-bold mb-12">
                    ← Voltar para os insights
                </Link>

                <div className="border-l-2 border-secundaria pl-6 mb-12 select-none">
                    <span className="font-principal text-xs text-branco/40 uppercase tracking-[3px] block mb-2">Página Dinâmica Gerada</span>
                    <h1 className="font-titulo text-3xl sm:text-5xl font-black text-branco tracking-tight leading-tight lowercase">
                        /blog/<span className="text-secundaria underline decoration-secundaria/40">{slug}</span>
                    </h1>
                </div>

                {/* CAIXA DE STATUS (O argumento de autoridade) */}
                <div className="p-8 sm:p-12 rounded-3xl bg-branco/5 border border-branco/10 backdrop-blur-md max-w-2xl">
                    <div className="flex items-center gap-3 font-titulo text-sm uppercase tracking-wider text-secundaria mb-3 font-bold">
                        Status da publicação: Em Editoração
                    </div>

                    <p className="font-principal text-branco/80 text-sm sm:text-base leading-relaxed mb-6">
                        A pauta deste artigo já foi desenvolvida pelo nosso núcleo de tecnologia. O texto está passando por revisão técnica de Copywriting e marcação semântica para indexação orgânica (SEO) no Google.
                    </p>

                    <div className="p-4 rounded-xl bg-preto/60 border border-branco/5 font-principal text-xs text-branco/60 flex flex-col gap-1.5">
                        <span><strong className="text-branco font-semibold">Liberação programada:</strong> Entrega 3 (Conexão com Headless CMS)</span>
                        <span><strong className="text-branco font-semibold">Protocolo de entrega:</strong> Next.js Static Site Generation (SSG)</span>
                    </div>
                </div>

            </article>

            <Footer />
        </main>
    )
}