'use client'
import React, { PointerEvent, ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
    children: ReactNode
    className?: string
}

/**
 * COMPONENTE REUTILIZÁVEL: TILT CARD 3D
 * @description Adiciona um efeito físico de "rastreio".
 * - Desktop: Acompanha o rato em tempo real.
 * - Mobile: Inclina na direção exata do toque (Tap to Tilt).
 * @kayualins - Equipe de Projetos CompAct Jr.
 */
export default function TiltCard({ children, className = '' }: TiltCardProps) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 300 }

    // Limites de inclinação em graus
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig)
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig)

    // Função matemática isolada para calcular as coordenadas X e Y
    const updateRotation = (clientX: number, clientY: number, element: HTMLElement) => {
        const rect = element.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        const mouseX = (clientX - rect.left) / width - 0.5
        const mouseY = (clientY - rect.top) / height - 0.5

        x.set(mouseX)
        y.set(mouseY)
    }

    // DESKTOP: Acompanha o movimento contínuo
    const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== 'mouse') return // Ignora se for dedo
        updateRotation(e.clientX, e.clientY, e.currentTarget)
    }

    // MOBILE: Inclina ao toque inicial
    const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
        if (e.pointerType === 'mouse') return // Ignora se for rato
        updateRotation(e.clientX, e.clientY, e.currentTarget)
    }

    // MOBILE: Restaura quando levanta o dedo
    const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
        if (e.pointerType === 'mouse') return
        x.set(0)
        y.set(0)
    }

    // DESKTOP: Restaura quando o rato sai do cartão
    const handlePointerLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            onPointerMove={handlePointerMove}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
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