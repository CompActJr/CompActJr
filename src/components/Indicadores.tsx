'use client'
import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './styles/Indicadores.css'

/**
 * COMPONENTE DE INDICADORES (Social Proof / Métricas)
 * @description Seção que exibe números animados (anos, projetos, membros, clientes) em cartões.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */

/**
 * COMPONENTE INTERNO: CountUpNumber
 * @description Contagem progressiva de 0 até o número alvo quando entra na viewport.
 * @param {number} target - Número final da contagem.
 * @param {string} suffix - Texto após o número (ex: '+', '%').
 */
const CountUpNumber = ({ target, suffix = '' }: { target: number; suffix: string }) => {
    // ESTADOS DO COMPONENTE
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)      // Referência do elemento observado
    const [hasAnimated, setHasAnimated] = useState(false) // Garante animação única

    // EFEITO: Configura o IntersectionObserver para iniciar contagem ao visualizar
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    let start = 0
                    const duration = 1000 // 1 segundo
                    const step = target / (duration / 16) // Incremento por frame (~60fps)

                    const timer = setInterval(() => {
                        start += step
                        if (start >= target) {
                            setCount(target)
                            clearInterval(timer)
                        } else {
                            setCount(Math.floor(start))
                        }
                    }, 16)

                    return () => clearInterval(timer)
                }
            },
            { threshold: 0.5 } // Dispara quando 50% do card estiver visível
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target, hasAnimated])

    return <span ref={ref}>{count}{suffix}</span>
}

export default function Indicadores() {
    // DADOS ESTÁTICOS DAS MÉTRICAS (número + sufixo + legenda)
    const stats = [
        { number: 10, label: 'anos de mercado', suffix: '+' },
        { number: 30, label: 'projetos entregues', suffix: '+' },
        { number: 50, label: 'membros ativos', suffix: '+' },
        { number: 25, label: 'clientes satisfeitos', suffix: '+' },
    ]

    return (
        <section className="indicators-section">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* GRADE DE CARTÕES COM ANIMAÇÃO DE ENTRADA (Framer Motion) */}
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