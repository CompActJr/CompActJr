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
                    src="/logo-compact.png"
                    alt="Marca d'água CompAct Jr"
                    width={400}
                    height={400}
                    className="object-contain w-full h-full"
                />
            </div>
        </div>
    )
}