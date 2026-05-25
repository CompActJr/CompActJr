'use client'
import React, { PointerEvent, ReactNode } from 'react' // Adicionado PointerEvent
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
    children: ReactNode
    className?: string
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 300 }
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig)
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig)

    // Substituímos MouseEvent por PointerEvent
    const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
        // A MÁGICA DE PROTEÇÃO: Se não for um rato (for touch/mobile), ignora!
        if (e.pointerType !== 'mouse') return

        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        const mouseX = (e.clientX - rect.left) / width - 0.5
        const mouseY = (e.clientY - rect.top) / height - 0.5

        x.set(mouseX)
        y.set(mouseY)
    }

    const handlePointerLeave = (e: PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== 'mouse') return
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            // Usamos os eventos de Pointer nativos do React
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className={className}
        >
            {children}
        </motion.div>
    )
}