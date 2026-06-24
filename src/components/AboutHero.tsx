'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * COMPONENTE: INTRODUÇÃO INSTITUCIONAL v2 (KINETIC ABOUT HERO)
 * @description Cabeçalho dinâmico baseado em rotação de palavras (Word Rotator).
 * Explora o duplo sentido da EJ: desenvolver tecnologia e desenvolver pessoas.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

const rotatingWords = [
    "SOFTWARE.",
    "TALENTOS.",
    "INOVAÇÃO.",
    "NEGÓCIOS.",
    "O FUTURO."
]

const badges = [
    { text: "100% Alunos UFSM" },
    { text: "Sem fins lucrativos" },
    { text: "Projetos Reais"},
    { text: "Cultura de Impacto"}
]

export default function AboutHero() {
    const [wordIndex, setWordIndex] = useState(0)

    // Lógica do temporizador limpo do React para trocar a palavra a cada 2.5s
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative pt-36 pb-12 px-6 container mx-auto max-w-5xl z-10 flex flex-col items-center text-center">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secundaria/10 border border-secundaria/20 text-secundaria font-principal text-xs font-bold tracking-widest uppercase mb-8"
            >
                <span>✦</span> Movimento Empresa Júnior
            </motion.div>


            <div className="flex flex-col items-center select-none">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-titulo text-4xl sm:text-6xl md:text-7xl font-black text-branco uppercase tracking-wide leading-none"
                >
                    Desenvolvendo
                </motion.h1>

                {/* Container de altura travada para a animação acontecer dentro dele */}
                <div className="h-16 sm:h-24 md:h-28 flex items-center justify-center overflow-hidden my-1">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={wordIndex}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="font-titulo text-5xl sm:text-7xl md:text-8xl font-black text-secundaria tracking-tight uppercase drop-shadow-[0_0_25px_rgba(var(--color-secundaria),0.4)]"
                        >
                            {rotatingWords[wordIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>

            {/* SUBTÍTULO */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl text-branco/70 font-principal text-base sm:text-lg leading-relaxed font-light text-balance mt-4 mb-10"
            >
                Conectamos a vanguarda do conhecimento acadêmico da <strong className="text-branco font-semibold">UFSM</strong> às demandas reais do mercado de tecnologia. Nosso código entrega performance; nossa vivência forma líderes.
            </motion.p>

            {/* BOTÕES INTERATIVOS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
            >
                {badges.map((badge, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.06, y: -2, backgroundColor: "rgba(255, 255, 255, 0.12)" }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-branco/5 border border-branco/10 text-branco font-principal text-xs tracking-wide transition-colors cursor-pointer backdrop-blur-sm"
                    >
                        <span className="text-base">{badge.icon}</span>
                        <span className="font-medium">{badge.text}</span>
                    </motion.div>
                ))}
            </motion.div>

            {/* INDICADOR DE MOUSE */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ opacity: { delay: 0.8 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
                className="mt-16 flex flex-col items-center text-branco/30 hover:text-secundaria transition-colors cursor-pointer group select-none"
                onClick={() => {
                    const secao = document.getElementById('secao-trajetoria');
                    secao?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <span className="font-principal text-[10px] uppercase tracking-[3px] mb-2 group-hover:text-branco transition-colors">Nossa Trajetória</span>
                <span className="text-lg leading-none">↓</span>
            </motion.div>

        </section>
    )
}