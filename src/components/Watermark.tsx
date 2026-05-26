import React from 'react'
import Image from 'next/image'
import './styles/Watermark.css'

/**
 * COMPONENTE DE MARCA D'ÁGUA (WATERMARK)
 * @description Renderiza a logo da empresa ao fundo de uma seção.
 * Utiliza posicionamento sticky para acompanhar o scroll do usuário dentro dos limites da seção pai.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */
export default function Watermark() {
    return (
        <div className="watermark-wrapper">
            <div className="watermark-sticky-container">
                <Image
                    src="/logos/logo-compact.webp"
                    alt="Marca d'água CompAct Jr"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
}