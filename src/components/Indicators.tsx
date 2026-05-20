'use client'
import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image' // Mantido para uso futuro com logos reais
import './Indicators.css'

/**
 * COMPONENTE DE INDICADORES E APOIADORES (SOCIAL PROOF)
 * @description Seção que exibe parceiros estratégicos em um carrossel infinito e
 * métricas de autoridade (anos de mercado, projetos, etc) em cartões.
 * @author Equipe de Projetos CompAct Jr.
 */

/**
 * COMPONENTE INTERNO: CountUpNumber
 * @description Executa uma animação de contagem progressiva (de 0 até o número alvo)
 * apenas quando o elemento entra no campo de visão do usuário (viewport).
 * @param {number} target - O número final da contagem.
 * @param {string} suffix - Texto anexado após o número (ex: '+', '%').
 */
const CountUpNumber = ({ target, suffix = '' }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0)
    // ref: Conecta o elemento HTML real ao IntersectionObserver
    const ref = useRef<HTMLSpanElement>(null)
    // hasAnimated: Garante que a animação ocorra apenas uma vez, evitando repetições caso o usuário suba e desça a página
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        // IntersectionObserver é a API nativa do navegador para detectar elementos na tela,
        // sendo muito mais performática que escutar eventos de scroll puros.
        const observer = new IntersectionObserver(
            (entries) => {
                // Se o elemento estiver visível e ainda não tiver sido animado
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    let start = 0
                    const duration = 1000 // Duração da animação em milissegundos

                    // Calcula o incremento necessário a cada frame (assumindo ~60 frames por segundo / 16ms por frame)
                    const step = target / (duration / 16)

                    const timer = setInterval(() => {
                        start += step
                        if (start >= target) {
                            setCount(target)
                            clearInterval(timer) // Encerra o loop ao atingir o alvo
                        } else {
                            setCount(Math.floor(start)) // Atualiza o estado com números inteiros
                        }
                    }, 16) // 16ms equivale a aproximadamente 60 quadros por segundo

                    // Cleanup da função
                    return () => clearInterval(timer)
                }
            },
            { threshold: 0.5, once: true } // Dispara quando 50% do elemento estiver visível
        )

        // Inicia a observação do elemento
        if (ref.current) {
            observer.observe(ref.current)
        }

        // Cleanup do observer ao desmontar o componente
        return () => observer.disconnect()
    }, [target, hasAnimated])

    return <span ref={ref}>{count}{suffix}</span>
}

export default function Indicators() {
    // Dicionário de Apoiadores
    const supporters = [
        { name: 'Caduceu Jr', src: '/caduceu-logo.png' },
        { name: 'Totem Vestibulares', src: '/totem-logo.png' },
        { name: 'FEJERS', src: '/fejers-logo.png' },
    ]

    // Dicionário de Métricas
    // Separar o 'number' do 'suffix' é essencial para o funcionamento do CountUpNumber
    const stats = [
        { number: 10, label: 'anos de mercado', suffix: '+' },
        { number: 30, label: 'projetos entregues', suffix: '+' },
        { number: 50, label: 'membros ativos', suffix: '+' },
        { number: 25, label: 'clientes satisfeitos', suffix: '+' },
    ]

    return (
        <section className="indicators-section">
            <div className="container mx-auto max-w-7xl relative z-10">

                {/* FAIXA DE APOIADORES */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="supporters-banner"
                >
                    <div className="supporters-carousel-container">
                        <div className="supporters-carousel-track">
                            {/* Duplicação do array para criar o efeito de scroll infinito sem quebras */}
                            {[...supporters, ...supporters, ...supporters].map((supporter, index) => (
                                <div key={index} className="supporter-logo-wrapper">
                                    <div className="supporter-placeholder">
                                        <span className="font-titulo text-sm text-preto/50 font-bold uppercase">{supporter.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="supporters-title-container">
                        <h2 className="supporters-title">NOSSOS APOIADORES</h2>
                    </div>
                </motion.div>

                {/* GRADE DE INDICADORES (STATS) COM CONTAGEM ANIMADA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="stats-grid"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <h3 className="stat-number">
                                <CountUpNumber target={stat.number} suffix={stat.suffix} />
                            </h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}