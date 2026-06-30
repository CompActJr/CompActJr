'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import './styles/MaterialsTrailer.css'

/**
 * COMPONENTE: TRAILER DE MATERIAIS (Call to Action)
 * @description Seção de destaque para a homepage, direcionando o tráfego
 * orgânico para a página de conversão de leads (Biblioteca de E-books).
 * @kayualins - Equipe de Projetos CompAct Jr.
 */
export default function MaterialsTrailer() {
    return (
        <section className="trailer-section">
            <div className="trailer-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="trailer-card"
                >
                    {/* Efeito de luz interno do card */}
                    <div className="trailer-glow" />

                    <div className="trailer-content">
                        <span className="trailer-badge">
                            Conteúdo Gratuito
                        </span>
                        <h2 className="trailer-title">
                            Conhecimento que <span className="text-secundaria">transforma</span> o seu negócio.
                        </h2>
                        <p className="trailer-desc">
                            Acesse materiais práticos sobre presença digital, acessibilidade, segurança cibernética e otimização de sistemas, desenvolvidos por nossos especialistas.
                        </p>
                    </div>

                    <div className="trailer-cta-wrapper">
                        <Link href="/materiais">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="trailer-btn"
                            >
                                Acessar Biblioteca <span>→</span>
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}