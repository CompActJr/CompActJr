import React from 'react'
import Watermark from './Watermark'

/**
 * COMPONENTE ENVOLTÓRIO COM MARCA D'ÁGUA
 * @description Adiciona a marca d'água (logo flutuante) como fundo fixo a qualquer seção filha.
 * @kayualins Equipe de Projetos CompAct Jr.
 */
export default function SectionsWithWatermark({ children }: { children: React.ReactNode }) {
    return (
        // Container relativo permite que o Watermark (absolute) se posicione dentro dele
        <div className="relative">
            {/* Marca d'água única, compartilhada entre todas as seções que usarem este wrapper */}
            <Watermark />
            {/* Camada de conteúdo com z-index superior para ficar acima da marca d'água */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}