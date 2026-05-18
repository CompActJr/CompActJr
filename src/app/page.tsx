'use client'

import Header from '../components/Header'

export default function Home() {
    return (
        /* 💡 EXPLICAÇÃO TÉCNICA:
           h-[200vh] serve apenas para criar rolagem e testar se o header muda de cor. */
        <main className="min-h-[200vh]">
            <Header />

            {/* 🎨 ÁREA DO MARKETING: Espaço reservado para a Hero amanhã */}
            <div className="flex items-center justify-center pt-64">
                <p className="text-branco/20 font-principal italic">
                    [ Espaço reservado para a Hero Section ]
                </p>
            </div>
        </main>
    )
}