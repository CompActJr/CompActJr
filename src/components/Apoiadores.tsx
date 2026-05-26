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

export default function Apoiadores() {
    // ADICIONADO: Propriedade 'url' com os links reais de cada parceiro
    const supporters = [
        { name: 'UFSM', src: '/logos/apoiadores/ufsm.png', url: 'https://www.ufsm.br/' },
        { name: 'Inovatech', src: '/logos/apoiadores/inovatech.png', url: 'https://inovatech.ufsm.br/' },
        { name: 'Atitude Idiomas', src: '/logos/apoiadores/atitudeIdiomas.png', url: 'https://www.atitudeidiomas.com.br/' },
        { name: 'Fejers', src: '/logos/apoiadores/fejers.png', url: 'https://fejers.org.br/' },
        { name: 'Brasil JR', src: '/logos/apoiadores/brasiljr.png', url: '#' },
    ]

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
                        {[...supporters, ...supporters, ...supporters].map((supporter, index) => (
                            <div key={index} className="supporter-logo-wrapper flex items-center justify-center">

                                {/* ANCORA (Link): Envolve a imagem inteira */}
                                <a
                                    href={supporter.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visitar o site parceiro: ${supporter.name}`}
                                    // Movemos o efeito de scale para o botão 'a' inteiro
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