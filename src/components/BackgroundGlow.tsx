'use client'
import React from 'react'
import { motion } from 'framer-motion'

/**
 * COMPONENTE BACKGROUND GLOW (Ambiente Dinâmico)
 * @description Camada fixa de elementos luminosos animados que acompanham o scroll do utilizador.
 * Utiliza Framer Motion para criar um efeito de respiração/flutuação contínua.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */
export default function BackgroundGlow() {
    return (
        // A classe 'fixed' em vez de 'absolute' garante que o fundo cubra sempre o monitor,
        // não importando o quão longe o utilizador role a página.
        <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0">

            {/* Mancha Roxa - Superior Esquerda */}
            <motion.div
                className="glow-purple absolute top-[-10%] left-[-10%]"
                animate={{
                    x: [0, 50, -30, 0], // Move lateralmente
                    y: [0, 30, -50, 0], // Move verticalmente
                    scale: [1, 1.2, 1], // Efeito de respiração (aumenta e diminui)
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Mancha Azul - Centro Direita */}
            <motion.div
                className="glow-blue absolute top-[20%] right-[-10%]"
                animate={{
                    x: [0, -60, 40, 0],
                    y: [0, -40, 60, 0],
                    scale: [1, 1.15, 0.9, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2 // O delay desencontra as animações para parecer mais orgânico
                }}
            />

            {/* Mancha Roxa - Inferior Centro/Direita (Suave) */}
            <motion.div
                className="glow-purple absolute bottom-[-20%] right-[10%] opacity-40"
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, -50, 30, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Nova Mancha Azul - Inferior Esquerda (Preenchimento) */}
            <motion.div
                className="glow-blue absolute bottom-[-10%] left-[-10%] opacity-30"
                animate={{
                    x: [0, -30, 50, 0],
                    y: [0, -30, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
        </div>
    )
}