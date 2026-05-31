'use client'
import React from 'react'
import { motion } from 'framer-motion'
import TiltCard from './TiltCard'
import './styles/Values.css'

/**
 * COMPONENTE DE VALORES (Princípios da empresa)
 * @description Exibe 6 valores em grid com o TiltCard integrado.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

const renderCardIcon = (id: string) => {
    switch (id) {
        case 'etica':
            return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="value-bg-icon"><path d="M12 3v18"/><path d="M3 10a9 9 0 0 1 18 0"/><path d="M3 14a9 9 0 0 0 18 0"/><path d="M2 10h20"/><path d="M2 14h20"/></svg>;
        case 'liberdade':
            return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="value-bg-icon"><path d="M2 12s3-3 10-3 10 3 10 3-3 3-10 3-10-3-10-3Z"/><path d="M12 9v6"/></svg>;
        case 'empatia':
            return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="value-bg-icon"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
        case 'resiliencia':
            return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="value-bg-icon"><path d="M6 3v18"/><path d="M18 3v18"/><path d="M6 7h12"/><path d="M6 12h12"/><path d="M6 17h12"/></svg>;
        case 'cafe':
            return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="value-bg-icon"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>;
        case 'bem-estar':
            return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="value-bg-icon"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
        default:
            return null;
    }
};

export default function Values() {
    const valuesList = [
        { id: 'etica', title: 'Ética', description: 'Agimos com transparência, responsabilidade e integridade em todas as nossas ações.', theme: 'dark' },
        { id: 'liberdade', title: 'Liberdade', description: 'Confiamos nas pessoas e damos espaço para que tomem decisões, inovem e cresçam com responsabilidade.', theme: 'accent' },
        { id: 'empatia', title: 'Empatia', description: 'Colocamo-nos no lugar do outro para entender e ajudar nas necessidades de todos.', theme: 'accent' },
        { id: 'resiliencia', title: 'Resiliência', description: 'Adaptamo-nos às mudanças e superamos os obstáculos com determinação.', theme: 'light' },
        { id: 'cafe', title: 'Café e Foco', description: 'Energia e máxima concentração para entregar os melhores resultados possíveis.', theme: 'dark' },
        { id: 'bem-estar', title: 'Bem Estar', description: 'Prezamos pela saúde física e mental da nossa equipa em todos os momentos.', theme: 'light' }
    ];

    return (
        <section id="valores" className="values-section">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <header className="values-header">
                    <h2 className="values-main-title">Nossos Valores</h2>
                </header>

                <div className="values-grid">
                    {valuesList.map((val, index) => (
                        <motion.div
                            key={val.id}
                            className="value-card-wrapper"
                            style={{ perspective: '1200px' }}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <TiltCard className={`value-card group ${val.theme}`}>

                                {renderCardIcon(val.id)}
                                <div className="value-card-overlay"></div>

                                <div className="value-card-content pointer-events-none">
                                    <h3 className="value-title">{val.title}</h3>
                                    <p className="value-description">{val.description}</p>
                                </div>

                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}