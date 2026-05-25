'use client'
import React, { MouseEvent, ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
    children: ReactNode
    className?: string
}

/**
 * COMPONENTE REUTILIZÁVEL: TILT CARD 3D
 * @description Adiciona um efeito físico de "rastreio do rato" (3D Hover Tracking)
 * a qualquer elemento filho passado para ele.
 * * IMPORTANTE: O container pai que envolve este componente DEVE ter a propriedade
 * CSS `perspective: 1200px` para que a profundidade 3D funcione.
 */
export default function TiltCard({ children, className = '' }: TiltCardProps) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Configuração da mola (suavidade e velocidade do retorno)
    const springConfig = { damping: 25, stiffness: 300 }

    // Limites de inclinação: 15 graus para cima/baixo e esquerda/direita
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig)
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig)

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        // Converte a posição do rato numa escala de -0.5 a 0.5
        const mouseX = (e.clientX - rect.left) / width - 0.5
        const mouseY = (e.clientY - rect.top) / height - 0.5

        x.set(mouseX)
        y.set(mouseY)
    }

    const handleMouseLeave = () => {
        // Retorna ao centro (0 graus) suavemente quando o rato sai
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.98 }} // Efeito de afundar no clique
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d'
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}