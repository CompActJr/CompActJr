'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './styles/FloatingButton.css'

/**
 * COMPONENTE BOTÃO FLUTUANTE (WHATSAPP)
 * @description Botão fixo no canto inferior direito para conversão rápida.
 * Possui um listener de scroll para só aparecer após o utilizador sair da Hero Section.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */

// Ícone oficial do WhatsApp otimizado
const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="fab-icon">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
    </svg>
)

export default function FloatingButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Função que verifica a posição do scroll
        const toggleVisibility = () => {
            // Se o utilizador descer mais de 400px, o botão aparece
            if (window.scrollY > 400) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        // Adiciona o listener
        window.addEventListener('scroll', toggleVisibility)

        // Cleanup do listener ao desmontar o componente
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fab-wrapper"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <a
                        // Substitua pelo número real da EJ. O formato deve ser: 55 + DDD + Numero
                        href="https://wa.me/555596018036?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20CompAct%20Jr."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fab-button group"
                        aria-label="Entre em contato pelo WhatsApp"
                    >
                        {/* Efeito de pulso envolvente (CSS) */}
                        <div className="fab-pulse-ring"></div>

                        <WhatsAppIcon />

                        {/* Tooltip de contexto visível apenas no desktop ao passar o mouse */}
                        <span className="fab-tooltip">
                            Fale conosco
                        </span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    )
}