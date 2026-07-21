'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import './styles/History.css'

/**
 * COMPONENTE NOSSA HISTÓRIA (Timeline interativa com carrossel)
 * @description Linha do tempo com régua cronológica e cartões animados (blur, escala, posição).
 * @kayualins - Equipe de Projetos CompAct Jr.
 */

interface HistoryItem {
    _id: string;
    year: number;
    title: string;
    description: string;
    image: string;
}

interface HistoryProps {
    historyData: HistoryItem[];
}

export default function History({ historyData }: HistoryProps) {
    // Inicia focado no ÚLTIMO ano cadastrado dinamicamente
    const [activeIndex, setActiveIndex] = useState(Math.max(0, historyData.length - 1))

    // Prevenção de quebra caso o CMS esteja vazio
    if (!historyData || historyData.length === 0) return null;

    // RÉGUA DINÂMICA: Descobre qual é o menor e o maior ano cadastrado no banco
    const minYear = Math.min(...historyData.map(d => d.year))
    const maxYear = Math.max(...historyData.map(d => d.year))

    // Garante que a régua comece no mínimo em 2015 e vá até pelo menos o último ano + 2
    const startYear = Math.min(2015, minYear)
    const endYear = Math.max(2028, maxYear + 2)
    const rulerYears = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)

    const handleYearClick = (clickedYear: number) => {
        const dataIndex = historyData.findIndex(data => data.year === clickedYear)
        if (dataIndex !== -1) setActiveIndex(dataIndex)
    }

    return (
        <section id="historia" className="history-section">
            <div className="history-container">

                <header className="history-header">
                    <h2 className="history-main-title pb-30">Nossa História</h2>
                </header>

                <div className="history-carousel-viewport">
                    <div className="history-carousel-track">
                        <AnimatePresence initial={false}>
                            {historyData.map((item, index) => {
                                const offset = index - activeIndex
                                const isActive = offset === 0

                                return (
                                    <motion.div
                                        key={item._id}
                                        className={`history-card ${isActive ? 'active' : 'inactive'}`}
                                        initial={false}
                                        animate={{
                                            x: `${offset * 110}%`,
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
                                            <div className="history-text-area">
                                                <h3 className="history-year-title">{item.year}</h3>
                                                <h4 className="history-subtitle">{item.title}</h4>
                                                <p className="history-description">{item.description}</p>
                                            </div>
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
                                <div className="ruler-minor-ticks">
                                    <span className="minor-tick"></span>
                                    <span className="minor-tick"></span>
                                    <span className="minor-tick"></span>
                                </div>

                                <div className={`ruler-major-tick ${isCurrentActive ? 'active-tick' : ''}`}>
                                    {isCurrentActive && (
                                        <motion.div layoutId="ruler-indicator" className="ruler-indicator-arrow"></motion.div>
                                    )}
                                </div>

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