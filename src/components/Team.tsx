'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import './styles/Team.css'

/**
 * COMPONENTE DA EQUIPA (TIME COMPACT)
 * @description Secção que apresenta os membros organizados por diretoria.
 * Implementa as Regras de Negócio: Moldura/Tema Azul para Diretores e Branco para Membros.
 * Efeito de hover revela os ícones de redes sociais sobre a imagem.
 * @kayualins - Equipa de Projetos CompAct Jr.
 */

// Ícones SVG reutilizáveis para as redes sociais
const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="team-social-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
)
const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="team-social-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="team-social-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)

export default function Team() {
    // DADOS DA EQUIPA AGRUPADOS POR DIRETORIA
    // isDirector: true aplica a cor secundária (Azul), false aplica o Branco.
    const teamData = [
        {
            department: 'PRESIDÊNCIA',
            members: [
                { id: 1, name: 'Arthur "Asan"', role: 'Presidente', isDirector: true, image: '/team-asan.jpg' }
            ]
        },
        {
            department: 'ADM-FIN',
            members: [
                { id: 2, name: 'Arthur "Pão"', role: 'Diretor ADM-FIN', isDirector: true, image: '/team-pao.jpg' },
                { id: 3, name: 'Guilherme', role: 'Gerente Administrativo', isDirector: false, image: '/team-gui1.jpg' }
            ]
        },
        {
            department: 'COMERCIAL',
            members: [
                { id: 4, name: 'Pedro', role: 'Diretor Comercial', isDirector: true, image: '/team-pedro.jpg' },
                { id: 5, name: 'Jean', role: 'Membro', isDirector: false, image: '/team-jean.jpg' },
                { id: 6, name: 'Laysla', role: 'Membro', isDirector: false, image: '/team-laysla.jpg' }
            ]
        },
        {
            department: 'GESTÃO DE PESSOAS',
            members: [
                { id: 7, name: 'Guilherme', role: 'Membro', isDirector: false, image: '/team-gui2.jpg' },
                { id: 8, name: 'Djulia', role: 'Membro', isDirector: false, image: '/team-djulia.jpg' }
            ]
        },
        {
            department: 'GESTÃO DE PROJETOS',
            members: [
                { id: 9, name: 'Jonas', role: 'Diretor Projetos', isDirector: true, image: '/team-jonas.jpg' },
                { id: 10, name: 'Fabrício', role: 'Membro', isDirector: false, image: '/team-fabricio.jpg' }
            ]
        },
        {
            department: 'MARKETING',
            members: [
                { id: 11, name: 'Bianca', role: 'Diretora Marketing', isDirector: true, image: '/team-bianca.jpg' },
                { id: 12, name: 'Maria Carolina', role: 'Membro', isDirector: false, image: '/team-maria.jpg' }
            ]
        }
    ]

    return (
        <section id="equipe" className="team-section">

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* CABEÇALHO */}
                <header className="team-header">
                    <h2 className="team-main-title">Time Compact</h2>
                </header>

                {/* LISTA DE DIRETORIAS */}
                <div className="team-departments-list">
                    {teamData.map((dept, deptIndex) => (
                        <motion.div
                            key={deptIndex}
                            className="team-row"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: deptIndex * 0.1 }}
                        >

                            {/* TÍTULO DA DIRETORIA (No desktop fica à direita, no mobile fica no topo) */}
                            <div className="team-dept-title-col">
                                <h3 className="team-dept-title">{dept.department}</h3>
                            </div>

                            {/* CARTÕES DOS MEMBROS */}
                            <div className="team-cards-col">
                                {dept.members.map((member) => (
                                    <div
                                        key={member.id}
                                        // Aplica dinamicamente a classe baseada na Regra de Negócio
                                        className={`team-card ${member.isDirector ? 'director' : 'member'}`}
                                    >
                                        <div className="team-card-inner">

                                            {/* ÁREA DA FOTO E HOVER DAS REDES SOCIAIS */}
                                            <div className="team-image-wrapper">
                                                {/* Placeholder. Substituir os src no array pelos ficheiros reais */}
                                                <div className="w-full h-full bg-branco/10 flex items-center justify-center">
                                                    <span className="text-branco/30 text-xs">Foto</span>
                                                </div>

                                                {/* BARRA DE REDES SOCIAIS (Revelada no Hover) */}
                                                <div className="team-social-bar">
                                                    <a href="#" aria-label="Instagram"><InstagramIcon /></a>
                                                    <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
                                                    <a href="#" aria-label="GitHub"><GithubIcon /></a>
                                                </div>
                                            </div>

                                            {/* ÁREA DE TEXTO (Nome e Cargo) */}
                                            <div className="team-info">
                                                <h4 className="team-name">{member.name}</h4>
                                                <p className="team-role">{member.role}</p>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}