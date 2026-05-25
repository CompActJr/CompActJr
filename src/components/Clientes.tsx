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
        { name: 'Caduceu JR', src: '/logos/clientes/caduceujr.png', url: 'https://www.instagram.com/caduceujr' },
        { name: 'Mirinay', src: '/logos/clientes/mirinay.png', url: '#' },
        { name: 'Equilíbrio JR', src: '/logos/clientes/equilibrio.png', url: 'https://www.instagram.com/equilibriojr' },
        { name: 'Nicole Mundstock', src: '/logos/clientes/nicole.png', url: '#' },
        { name: 'Sobrac', src: '/logos/clientes/sobrac.png', url: '#' },
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