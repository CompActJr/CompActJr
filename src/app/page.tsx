'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />

            {/* 💡 Espaço para criar o scroll e testar o fundo do Header mudando de cor */}
            <div className="h-[100vh] bg-preto"></div>
        </main>
    )
}