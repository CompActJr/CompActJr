'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

/**
 * COMPONENTE: ÁRVORE DE LINKS (INSTAGRAM BIO)
 * @description Interface mobile-first de conversão rápida.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

// Define o formato exato dos dados que vêm do Sanity
interface LinkItem {
    _id: string;
    titulo: string;
    subtitulo?: string;
    url: string;
    destaque: boolean;
    badge?: string;
}

interface LinksTreeProps {
    linksData: LinkItem[];
}

export default function LinksTree({ linksData }: LinksTreeProps) {
    return (
        <section className="min-h-screen flex flex-col justify-between px-6 pt-12 pb-8 max-w-md mx-auto relative z-10 font-principal text-branco">

            {/* BLOCO SUPERIOR: AVATAR E BIO */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center mb-8 select-none"
            >
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-secundaria via-branco/20 to-secundaria mb-4 shadow-[0_0_25px_rgba(var(--color-secundaria),0.3)]">
                    <div className="w-full h-full rounded-full bg-preto flex items-center justify-center overflow-hidden relative">
                        <Image
                            src="/logos/logo-compact.webp"
                            alt="CompAct Jr."
                            width={55}
                            height={55}
                            className="object-contain"
                        />
                    </div>
                </div>

                <h1 className="font-titulo text-xl font-bold tracking-wider uppercase">@compact.jr</h1>
                <p className="text-xs text-branco/60 mt-1">Empresa Júnior de TI da UFSM</p>
            </motion.div>

            {/* CASCATA DE BOTÕES RENDERIZADA PELO CMS */}
            <div className="flex flex-col gap-3.5 w-full mb-12">
                {linksData.map((link, index) => (
                    <motion.a
                        key={link._id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative group p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-center ${
                            link.destaque
                                ? 'bg-secundaria text-preto border-secundaria font-black shadow-[0_0_20px_rgba(var(--color-secundaria),0.4)]'
                                : 'bg-branco/5 hover:bg-branco/10 text-branco border-branco/10 backdrop-blur-md font-bold'
                        }`}
                    >
                        {link.badge && (
                            <span className={`absolute -top-2.5 right-4 text-[9px] font-principal uppercase tracking-widest px-2.5 py-0.5 rounded-full font-black ${
                                link.destaque ? 'bg-preto text-secundaria' : 'bg-secundaria text-preto'
                            }`}>
                                {link.badge}
                            </span>
                        )}

                        <span className="text-sm tracking-wide flex items-center justify-between">
                            <span>{link.titulo}</span>
                        </span>

                        {link.subtitulo && (
                            <span className={`text-xs font-normal mt-0.5 block ${link.destaque ? 'text-preto/70' : 'text-branco/50'}`}>
                                {link.subtitulo}
                            </span>
                        )}
                    </motion.a>
                ))}
            </div>

            {/* RODAPÉ DO LINKTREE */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-xs text-branco/30 font-principal select-none"
            >
                <p>CompAct Jr. &copy; {new Date().getFullYear()} &bull; Código com Propósito.</p>
            </motion.footer>

        </section>
    )
}