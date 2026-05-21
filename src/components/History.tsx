'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import './History.css'

/**
 * COMPONENTE NOSSA HISTÓRIA (Timeline interativa com carrossel)
 * @description Linha do tempo com régua cronológica e cartões animados (blur, escala, posição).
 * @kayualins - Equipe de Projetos CompAct Jr.
 */
export default function History() {
    // ESTADO: índice do cartão ativo (central)
    const [activeIndex, setActiveIndex] = useState(2)

    // DADOS DOS MARCOS HISTÓRICOS (ano, título, descrição, imagem)
    const historyData = [
        {
            year: 2019,
            title: 'O Início de Tudo',
            description: 'A CompAct Jr. dá os seus primeiros passos com um grupo de alunos focados em transformar o ecossistema universitário.',
            image: '/historia-2019.jpg'
        },
        {
            year: 2022,
            title: 'Reestruturação',
            description: 'Novos processos e a adoção de metodologias ágeis preparam a empresa para desafios maiores e projetos mais complexos no mercado.',
            image: '/historia-2022.jpg'
        },
        {
            year: 2025,
            title: 'Voltamos com tudo!',
            description: 'Com planejamento, engajamento e muita vontade de crescer, os primeiros resultados começaram a aparecer, projetos em andamento, cultura interna fortalecida e um novo sentimento de pertencimento. A chama está acesa novamente. Em 2025, provamos que a CompAct não apenas voltou - ela voltou para fazer história.',
            image: '/historia-2025.jpg'
        },
        {
            year: 2026,
            title: 'Crescimento Exponencial',
            description: 'Consolidação como referência no Movimento Empresa Júnior, entregando soluções tecnológicas de alto impacto para a sociedade.',
            image: '/historia-2026.jpg'
        }
    ]

    // RÉGUA: gera anos contínuos de 2015 a 2028 (inclui anos sem história)
    const startYear = 2015
    const endYear = 2028
    const rulerYears = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)

    // Função para centralizar o cartão ao clicar em um ano da régua
    const handleYearClick = (clickedYear: number) => {
        const dataIndex = historyData.findIndex(data => data.year === clickedYear)
        if (dataIndex !== -1) setActiveIndex(dataIndex)
    }

    return (
        <section id="historia" className="history-section">
            <div className="history-container">

                {/* CABEÇALHO */}
                <header className="history-header">
                    <h2 className="history-main-title pb-30">Nossa História</h2>
                </header>

                {/* CARROSSEL PRINCIPAL (cartões com animação de offset) */}
                <div className="history-carousel-viewport">
                    <div className="history-carousel-track">
                        <AnimatePresence initial={false}>
                            {historyData.map((item, index) => {
                                const offset = index - activeIndex   // Distância do centro (-2 a +2)
                                const isActive = offset === 0

                                return (
                                    <motion.div
                                        key={item.year}
                                        className={`history-card ${isActive ? 'active' : 'inactive'}`}
                                        initial={false}
                                        animate={{
                                            x: `${offset * 110}%`,          // Move lateralmente
                                            scale: isActive ? 1 : 0.75,
                                            opacity: isActive ? 1 : 0.6,
                                            filter: isActive ? 'blur(0px)' : 'blur(8px)',
                                            zIndex: isActive ? 10 : 0
                                        }}
                                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <div className="history-bg-year">{item.year}</div>

                                        <div className="history-card-content">
                                            {/* TEXTO (ano, título, descrição) */}
                                            <div className="history-text-area">
                                                <h3 className="history-year-title">{item.year}</h3>
                                                <h4 className="history-subtitle">{item.title}</h4>
                                                <p className="history-description">{item.description}</p>
                                            </div>
                                            {/* IMAGEM ILUSTRATIVA */}
                                            <div className="history-image-area">
                                                <Image
                                                    src={item.image}
                                                    alt={`Imagem do ano ${item.year}`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>
                </div>

            </div>

            {/* RÉGUA CRONOLÓGICA (base fixa com anos e marcadores) */}
            <div className="history-ruler-wrapper">
                <div className="history-ruler-track">
                    {rulerYears.map((year) => {
                        const hasStory = historyData.some(data => data.year === year)
                        const isCurrentActive = historyData[activeIndex].year === year

                        return (
                            <div
                                key={year}
                                className="history-ruler-tick-group"
                                onClick={() => hasStory ? handleYearClick(year) : null}
                                style={{ cursor: hasStory ? 'pointer' : 'default' }}
                            >
                                {/* Traços menores (subdivisões visuais) */}
                                <div className="ruler-minor-ticks">
                                    <span className="minor-tick"></span>
                                    <span className="minor-tick"></span>
                                    <span className="minor-tick"></span>
                                </div>

                                {/* Traço principal e indicador animado (se ativo) */}
                                <div className={`ruler-major-tick ${isCurrentActive ? 'active-tick' : ''}`}>
                                    {isCurrentActive && (
                                        <motion.div layoutId="ruler-indicator" className="ruler-indicator-arrow"></motion.div>
                                    )}
                                </div>

                                {/* Texto do ano (estilo opaco para anos sem história, destacado se ativo) */}
                                <span className={`ruler-year-text ${hasStory ? 'text-branco font-bold' : 'text-branco/30'} ${isCurrentActive ? 'text-secundaria scale-125' : ''}`}>
                                    {year}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}