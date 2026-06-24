'use client'
import React from 'react'
import Image from 'next/image'
import './styles/Watermark.css'

/**
 * COMPONENTE DE MARCA D'ÁGUA (WATERMARK)
 * @description Renderiza a logo da empresa ou um texto tipográfico gigante ao fundo.
 * Utiliza posicionamento sticky para acompanhar o scroll do usuário.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */

interface WatermarkProps {
    text?: string;
}

export default function Watermark({ text }: WatermarkProps) {
    return (
        <div className="watermark-wrapper pointer-events-none">
            {/* O flex center garante que o texto fique perfeitamente no meio da tela */}
            <div className="watermark-sticky-container flex items-center justify-center">
                {text ? (
                    <span className="text-[8vw] lg:text-[8vw] font-principal font-black text-branco/30 uppercase whitespace-nowrap select-none">
                        {text}
                    </span>
                ) : (
                    <Image
                        src="/logos/logo-compact.webp"
                        alt="Marca d'água CompAct Jr"
                        fill
                        className="object-contain opacity-45"
                    />
                )}
            </div>
        </div>
    )
}