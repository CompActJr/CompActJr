'use client' // Permite animações ou interações futuras (opcional)
import React from 'react'

/**
 * COMPONENTE BACKGROUND GLOW (Efeitos Luminosos de Fundo)
 * @description Camada de elementos decorativos (manchas roxas e azuis) que flutuam atrás do conteúdo principal.
 * @author kayualins - Equipe de Projetos CompAct Jr.
 */

interface GlowProps {
    purplePosition?: string   // Classes Tailwind para posicionar a mancha roxa
    bluePosition?: string     // Classes Tailwind para posicionar a mancha azul
    secondPurplePosition?: string // Posição da segunda mancha roxa (mais suave)
    purpleOpacity?: string    // Opacidade personalizada para a segunda mancha roxa
}

export default function BackgroundGlow({
                                           purplePosition = "top-[-10%] left-[-20%]",
                                           bluePosition = "top-[20%] right-[-10%]",
                                           secondPurplePosition = "top-[80%] left-[-15%]",
                                           purpleOpacity = "opacity-30"
                                       }: GlowProps) {
    return (
        // Container absoluto que cobre toda a tela (inset-0), sem interação de clique (pointer-events-none)
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Mancha roxa principal (maior, mais intensa) */}
            <div className={`glow-purple ${purplePosition}`}></div>

            {/* Mancha azul (contraste) */}
            <div className={`glow-blue ${bluePosition}`}></div>

            {/* Segunda mancha roxa (inferior, com opacidade reduzida para profundidade) */}
            <div className={`glow-purple ${secondPurplePosition} ${purpleOpacity}`}></div>
        </div>
    )
}