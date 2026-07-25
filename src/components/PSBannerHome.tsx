'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import './styles/ProcessoSeletivo.css'

/**
 * COMPONENTE BANNER DO PROCESSO SELETIVO (Homepage)
 * @description Card teaser exibido na página principal que apresenta brevemente o PS e
 * direciona o visitante à página dedicada. Só é renderizado quando a variável de ambiente
 * NEXT_PUBLIC_ATIVAR_PAGINA_PS estiver ativa.
 */

export default function PSBannerHome() {
    const psAtivo = process.env.NEXT_PUBLIC_ATIVAR_PAGINA_PS === 'true'
    if (!psAtivo) return null

    return (
        <section className="relative w-full py-20 z-10 overflow-hidden">
            {/* Glows de fundo decorativos (reutiliza variáveis de cores do globals.css) */}
            <div
                className="absolute top-[-30%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #9628a5 5%, transparent 65%)',
                    opacity: 0.18,
                    filter: 'blur(100px)',
                }}
            />
            <div
                className="absolute bottom-[-20%] left-[-5%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #00a7db 5%, transparent 65%)',
                    opacity: 0.14,
                    filter: 'blur(90px)',
                }}
            />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative bg-branco/5 backdrop-blur-xl border border-secundaria/20 p-8 md:p-14 shadow-2xl overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,167,219,0.06) 0%, rgba(150,40,165,0.06) 100%)',
                    }}
                >
                    {/* Detalhe de borda brilhante no topo */}
                    <div
                        className="absolute top-0 left-0 right-0 h-[2px]"
                        style={{
                            background: 'linear-gradient(90deg, transparent, #00a7db 40%, #9628a5 60%, transparent)',
                        }}
                    />

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                        {/* TEXTO */}
                        <div className="flex-1">
                            {/* Kicker — reutiliza a classe .ps-kicker do ProcessoSeletivo.css */}
                            <span className="ps-kicker">
                                CompAct Jr. · PS 2026/2
                            </span>

                            <h2 className="font-titulo text-3xl md:text-4xl lg:text-5xl font-black uppercase text-branco leading-tight mt-6 mb-4">
                                Processo <span className="text-secundaria">Seletivo</span><br />
                                aberto para 2026/2
                            </h2>

                            <p className="font-principal text-sm md:text-base text-branco/65 leading-relaxed max-w-xl mb-0">
                                Quer ganhar experiência real em TI, fazer parte de um time apaixonado e impactar
                                a sociedade? As inscrições do nosso Processo Seletivo estão abertas para estudantes
                                da UFSM. Não perca essa oportunidade.
                            </p>
                        </div>

                        {/* COLUNA DE AÇÃO */}
                        <div className="flex flex-col items-start lg:items-end gap-5 shrink-0">
                            {/* Data — destaque visual */}
                            <div className="flex flex-col gap-1">
                                <span className="ps-countdown-card-label">Inscrições abertas até</span>
                                <span className="font-titulo text-xl font-bold text-secundaria uppercase tracking-wide">
                                    16 de agosto de 2026
                                </span>
                            </div>

                            {/* Botão — reutiliza .ps-inscricao-btn */}
                            <Link href="/processoSeletivo" id="home-ps-banner-btn">
                                <button className="ps-inscricao-btn">
                                    Saiba mais &amp; inscreva-se
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
