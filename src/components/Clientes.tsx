'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import './styles/BannerParceiros.css'   // Reaproveita o mesmo CSS do componente Apoiadores

/**
 * COMPONENTE CLIENTES (Social Proof / Carrossel de Clientes)
 * @description Exibe os logos dos clientes em um carrossel infinito.
 * Imagens preparadas com redirecionamento e efeito hover.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

export default function Clientes() {
    // DADOS DOS CLIENTES
    // Caminhos organizados e urls adicionadas para os sites/redes sociais dos clientes
    const clientes = [
        { name: 'Caduceu JR', src: '/logosParceiros/clientes/caduceujr.webp', url: 'https://caduceujr.com.br/' },
        { name: 'Mirinay', src: '/logosParceiros/clientes/mirinay.webp', url: 'https://www.mirinay.com.br/' },
        { name: 'Equilíbrio JR', src: '/logosParceiros/clientes/equilibrio.webp', url: 'https://www.equilibrioufrgs.com/' },
        { name: 'Nicole Mundstock', src: '/logosParceiros/clientes/nicole.webp', url: 'https://www.instagram.com/arq.nicolemundstock/' },
        { name: 'Sobrac', src: '/logosParceiros/clientes/sobrac.webp', url: 'https://acustica.org.br/' },
        { name: 'Totem', src: '/logosParceiros/clientes/totem.webp', url: 'https://acustica.org.br/' },
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
                        {[...clientes, ...clientes, ...clientes].map((cliente, index) => (
                            <div key={index} className="supporter-logo-wrapper flex items-center justify-center">

                                {/* ÂNCORA: Torna o logo clicável com animação de scale */}
                                <a
                                    href={cliente.url}
                                    target={cliente.url !== '#' ? "_blank" : "_self"}
                                    rel={cliente.url !== '#' ? "noopener noreferrer" : ""}
                                    aria-label={`Visitar o site do cliente: ${cliente.name}`}
                                    className="transition-transform duration-300 hover:scale-110 block"
                                >
                                    {/* RENDERIZAÇÃO CONDICIONAL DA IMAGEM */}
                                    {cliente.src ? (
                                        <Image
                                            src={cliente.src}
                                            alt={`Logo do cliente ${cliente.name}`}
                                            width={120}
                                            height={60}
                                            className="object-contain"
                                        />
                                    ) : (
                                        <div className="supporter-placeholder">
                                            <span className="font-titulo text-sm text-preto/50 font-bold uppercase">
                                                {cliente.name}
                                            </span>
                                        </div>
                                    )}
                                </a>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="supporters-title-container">
                    <h2 className="supporters-title">NOSSOS CLIENTES</h2>
                </div>
            </div>
        </motion.div>
    )
}