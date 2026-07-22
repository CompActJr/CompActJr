'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import './styles/BannerParceiros.css'

/**
 * COMPONENTE APOIADORES (Social Proof / Carrossel Infinito)
 * @description Seção que exibe parceiros estratégicos da empresa.
 * Imagens com redirecionamento em nova aba e efeito hover.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

interface ApoiadorItem {
    _id: string;
    name: string;
    src: string;
    url: string;
}

export default function Apoiadores({ apoiadoresData }: { apoiadoresData: ApoiadorItem[] }) {

    // Se não houver apoiadores cadastrados, esconde a seção
    if (!apoiadoresData || apoiadoresData.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-12 sm:px-12 md:px-8 lg:px-12 xl:px-40"
        >
            <div className="supporters-banner">
                <div className="supporters-carousel-container">
                    <div className="supporters-carousel-track">
                        {[...apoiadoresData, ...apoiadoresData, ...apoiadoresData].map((supporter, index) => (
                            <div key={`${supporter._id}-${index}`} className="supporter-logo-wrapper flex items-center justify-center">
                                <a
                                    href={supporter.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visitar o site parceiro: ${supporter.name}`}
                                    className="transition-transform duration-300 hover:scale-110 block"
                                >
                                    {supporter.src ? (
                                        <Image
                                            src={supporter.src}
                                            alt={`Logo da ${supporter.name}`}
                                            width={120}
                                            height={60}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <div className="supporter-placeholder">
                                            <span className="font-titulo text-sm text-preto/50 font-bold uppercase">
                                                {supporter.name}
                                            </span>
                                        </div>
                                    )}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="supporters-title-container">
                    <h2 className="supporters-title">NOSSOS APOIADORES</h2>
                </div>
            </div>
        </motion.div>
    )
}