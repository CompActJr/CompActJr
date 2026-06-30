'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './styles/MaterialsContent.css'

/**
 * COMPONENTE MATERIAIS EDUCATIVOS (Biblioteca e Captura de Leads)
 * @description Renderiza a vitrine de e-books e gerencia o Modal do formulário de conversão.
 * Estilização abstraída para MaterialsContent.css mantendo o JSX limpo.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */

const materiais = [
    {
        titulo: "Fortalecimento de Marca no Digital",
        resumo: "Estratégias práticas para posicionar sua marca e atrair o público certo na internet.",
        imagem: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"
    },
    {
        titulo: "Boas Práticas e Acessibilidade",
        resumo: "Como tornar seu site acessível para todos e melhorar sua pontuação de buscas.",
        imagem: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"
    },
    {
        titulo: "Segurança Cibernética",
        resumo: "Proteja os dados da sua empresa contra as principais ameaças digitais da atualidade.",
        imagem: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"
    },
    {
        titulo: "Otimização de Sistemas",
        resumo: "Técnicas para deixar sua plataforma mais rápida, eficiente e escalável no mercado.",
        imagem: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"
    }
]

export default function MaterialsContent() {
    const [selectedItem, setSelectedItem] = useState<{ titulo: string } | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setSelectedItem(null)
        }, 2000)
    }

    return (
        <section className="materials-section">

            {/* HERO SECTION */}
            <div className="materials-hero">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="materials-kicker"
                >
                    Biblioteca de E-books
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="materials-title"
                >
                    Acesse materiais gratuitos para <span className="materials-title-highlight">expandir</span> seu negócio.
                </motion.h1>
            </div>

            {/* CARDS SECTION */}
            <div className="materials-grid">
                {materiais.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="materials-card group" /* <--- O group entra aqui! */
                    >
                        <div className="materials-card-img-wrapper">
                            <div className="materials-card-overlay" />
                            <img
                                src={item.imagem}
                                alt={item.titulo}
                                className="materials-card-img"
                            />
                        </div>

                        <div className="materials-card-content">
                            <h3 className="materials-card-title">{item.titulo}</h3>
                            <p className="materials-card-desc">{item.resumo}</p>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedItem(item)}
                                className="materials-card-btn"
                            >
                                Fazer Download
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* MODAL SECTION */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="modal-overlay-bg"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="modal-content"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="modal-close-btn"
                            >
                                ✕
                            </button>

                            <h3 className="modal-title">Baixar Material</h3>
                            <p className="modal-subtitle">{selectedItem.titulo}</p>

                            {/* FORM SECTION */}
                            <form onSubmit={handleSubmit} className="modal-form">
                                <div className="modal-input-group">
                                    <label className="modal-label">Nome completo</label>
                                    <input type="text" required className="modal-input" />
                                </div>

                                <div className="modal-input-group">
                                    <label className="modal-label">E-mail</label>
                                    <input type="email" required className="modal-input" />
                                </div>

                                <div className="modal-input-group">
                                    <label className="modal-label">WhatsApp</label>
                                    <input type="tel" required className="modal-input" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="modal-input-group">
                                        <label className="modal-label">Empresa</label>
                                        <input type="text" required className="modal-input" />
                                    </div>
                                    <div className="modal-input-group">
                                        <label className="modal-label">Cargo</label>
                                        <input type="text" required className="modal-input" />
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="modal-submit-btn"
                                >
                                    {isSubmitting ? 'Enviando...' : 'Baixar Gratuitamente'}
                                </motion.button>

                                <p className="modal-footer-text">
                                    Prometemos não enviar spam. Seus dados estão seguros.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}