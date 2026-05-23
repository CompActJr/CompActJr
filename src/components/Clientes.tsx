'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import './styles/BannerParceiros.css'   // Reaproveita o mesmo CSS do componente Apoiadores

/**
 * COMPONENTE CLIENTES (Social Proof / Carrossel de Clientes)
 * @description Exibe os logos dos clientes em um carrossel infinito, similar à seção de apoiadores.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */

export default function Clientes() {
    // DADOS DOS CLIENTES (substituir pelas logos reais futuramente)
    const clientes = [
        { name: 'Caduceu', src: '/cliente-alpha.png' },
        { name: 'Mirinay', src: '/cliente-beta.png' },
        { name: 'Equilíbrio', src: '/cliente-gama.png' },
        { name: 'Nicole Mundstock', src: '/cliente-gama.png' },
        { name: 'Sobrac', src: '/cliente-gama.png' },
        // Adicione quantos forem necessários
    ]

    return (
        // Animação de entrada com Framer Motion (fade + subida)
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-12 sm:px-12 md:px-8 lg:px-12 xl:px-40"
        >
            {/* Estrutura idêntica ao banner de apoiadores, mas com título "NOSSOS CLIENTES" */}
            <div className="supporters-banner">

                {/* CARROSSEL INFINITO (LADO ESQUERDO) */}
                <div className="supporters-carousel-container">
                    <div className="supporters-carousel-track">
                        {/* Triplicação do array para efeito de loop infinito */}
                        {[...clientes, ...clientes, ...clientes].map((cliente, index) => (
                            <div key={index} className="supporter-logo-wrapper">
                                {/* Placeholder de texto (será substituído por imagens reais) */}
                                <div className="supporter-placeholder">
                                    <span className="font-titulo text-sm text-preto/50 font-bold uppercase">
                                        {cliente.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TÍTULO FIXO (LADO DIREITO) */}
                <div className="supporters-title-container">
                    <h2 className="supporters-title">NOSSOS CLIENTES</h2>
                </div>
            </div>
        </motion.div>
    )
}