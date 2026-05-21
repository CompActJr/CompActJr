'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image' // Mantido para uso futuro com logos reais
import './Apoiadores.css'

/**
 * COMPONENTE APOIADORES (Social Proof / Carrossel Infinito)
 * @description Seção que exibe parceiros estratégicos da empresa em um carrossel infinito.
 *
 * Funcionalidades:
 * - Carrossel horizontal com animação contínua e suave (scroll infinito)
 * - Pausa ao passar o mouse (melhora acessibilidade e UX)
 * - Máscara de gradiente nas laterais (efeito "fade out" das bordas)
 * - Layout responsivo: carrossel ocupa 65% (desktop) / 100% (mobile)
 * - Placeholders de texto (substituíveis por imagens reais futuramente)
 *
 * @author kayualins - Equipe de Projetos CompAct Jr.
 */

export default function Apoiadores() {
    // DADOS ESTÁTICOS DOS APOIADORES (FÁCIL MANUTENÇÃO)
    // Futuro: Substituir os placeholders por <Image> com src real
    const supporters = [
        { name: 'Caduceu Jr', src: '/caduceu-logo.png' },
        { name: 'Totem Vestibulares', src: '/totem-logo.png' },
        { name: 'FEJERS', src: '/fejers-logo.png' },
    ]

    return (
        // Animaçāo de entrada (Framer Motion): surgir com fade+subida quando aparecer na viewport
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-12 sm:px-12 md:px-8 lg:px-12 xl:px-40"
        >

            {/* ESTRUTURA PRINCIPAL: Banner com fundo branco e sombra */}
            <div className="supporters-banner">

                {/* LADO ESQUERDO (DESKTOP): CARROSSEL INFINITO */}
                <div className="supporters-carousel-container">
                    <div className="supporters-carousel-track">
                        {[...supporters, ...supporters, ...supporters].map((supporter, index) => (
                            <div key={index} className="supporter-logo-wrapper">
                                <div className="supporter-placeholder">
                                    <span className="font-titulo text-sm text-preto/50 font-bold uppercase">
                                        {supporter.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* LADO DIREITO (DESKTOP): TÍTULO FIXO */}
                <div className="supporters-title-container">
                    <h2 className="supporters-title">NOSSOS APOIADORES</h2>
                </div>
            </div>
        </motion.div>
    )
}