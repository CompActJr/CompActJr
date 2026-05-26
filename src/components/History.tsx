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
export default function History() {
    // ESTADO: índice do cartão ativo (central)
    const [activeIndex, setActiveIndex] = useState(9)

    // DADOS DOS MARCOS HISTÓRICOS (ano, título, descrição, imagem)
    const historyData = [
        {
            year: 2015,
            title: 'O Início: A Inconformidade que Virou Ação',
            description: 'Tudo começou quando quatro jovens inconformados com o curso decidiram tomar a iniciativa e fundar a CompAct. Desde o princípio, a equipe construiu uma cultura de estar sempre unida e presente nos eventos do Movimento Empresa Júnior (MEJ)',
            image: '/historia/historia-2015.webp'
        },
        {
            year: 2016,
            title: 'Estruturação e o Primeiro Contrato',
            description: 'Este foi o ano de estruturar o futuro da empresa, marcado pela construção do planejamento estratégico de 3 anos e a celebração do primeiro contrato fechado. A CompAct também comemorou sua federação e marcou presença em grandes eventos da rede.',
            image: '/historia/historia-2016.webp'
        },
        {
            year: 2017,
            title: 'A Nossa Salinha e Prêmios Conquistados',
            description: 'A equipe finalmente conquistou um espaço físico, uma "salinha para chamar de nossa". O ano foi de Alto Crescimento logo no mês de maio , com a empresa ganhando prêmios e mais prêmios , o que resultou em um fim de ano perfeito',
            image: '/historia/historia-2017.webp'
        },
        {
            year: 2018,
            title: 'Reflexão e Superação de Resultados',
            description: 'Apesar de o ano ter começado de forma ótima, foi um período que exigiu parar, pensar e mudar as estratégias. Mesmo com os desafios, o fim de ano deu motivos para a equipe comemorar, alcançando a marca de 26 mil reais em faturamento.',
            image: '/historia/historia-2018.webp'
        },
        {
            year: 2019,
            title: 'Projetos Incessantes e Faturamento Histórico',
            description: 'Um ano muito ativo onde os projetos não paravam, e a CompAct também não. A empresa realizou os maiores processos seletivos da UFSM na época e marcou presença em eventos como o EDL e o Empodera. Todo o esforço culminou no dia da premiação com o maior faturamento da história até então: 43 mil reais.',
            image: '/historia/historia-2019.webp'
        },
        {
            year: 2020,
            title: 'Adaptação e Resiliência na Pandemia',
            description: 'A CompAct iniciou o ano imparável , mas precisou se reinventar rapidamente quando a UFSM suspendeu as atividades presenciais em março. A solução foi a realização do primeiro processo seletivo 100% online, demonstrando forte adaptação em um mundo perturbado.',
            image: '/historia/historia-2020.webp'
        },
        /*
        {
            year: 2021,
            title: 'O Desafio à Distância e o Retorno',
            description: 'Foi um período de grande superação, liderado por uma diretoria composta por apenas quatro membros enfrentando a realidade do trabalho à distância. Contudo, o ano também trouxe alívio com a tão aguardada volta ao formato presencial.',
            image: '/historia/historia-200.webp'
        },

        {
            year: 2022,
            title: 'A Provação Máxima',
            description: 'A história da empresa enfrentou seu momento mais crítico e desafiador: a CompAct se viu sem nenhum membro, sem processos em andamento e com o caixa zerado. Muitos questionaram se seria o fim.',
            image: '/historia/historia-200.webp'
        },
        */


        {
            year: 2023,
            title: 'O Renascimento e Novas Metas',
            description: 'Após ficar sem membros, a FEJERS, com o apoio do Politécnico e do curso de SPI, recrutou novos alunos para fazer com que a história da empresa continuasse sendo escrita. A CompAct não apenas voltou à ativa, mas retornou batendo suas metas.',
            image: '/historia/historia-2023.webp'
        },
        {
            year: 2024,
            title: 'Recordes e Retomada de Presença',
            description: 'A nova geração provou sua força ao bater o prêmio de Alto Crescimento mais rápido da história da empresa. A CompAct também voltou a marcar forte presença em eventos de peso, como LIDERA, ENEJ e EGEJ.',
            image: '/historia/historia-2024.webp'
        },
        {
            year: 2025,
            title: 'O Topo é o Limite',
            description: 'A essência e a cultura da empresa se mantêm vivas: ser formada por pessoas que não se conformam e querem sempre alcançar o topo. Seguindo esse legado, o sentimento da atual geração é claro: "agora é com a gente".',
            image: '/historia/historia-2025.webp'
        },
        {
            year: 2026,
            title: 'Crescimento Exponencial',
            description: 'Consolidação como referência no Movimento Empresa Júnior, entregando soluções tecnológicas de alto impacto para a sociedade.',
            image: '/historia/historia-2026.webp'
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