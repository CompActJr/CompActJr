'use client'
import React from 'react'
import { motion } from 'framer-motion'
import './styles/ServicesAlternativa.css'

/**
 * COMPONENTE DE SERVIÇOS (SERVICES SECTION)
 * @description Exibe as principais soluções da empresa utilizando um layout de grid
 * dinâmico. Foca em interatividade via hover e hierarquia visual clara.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */
export default function ServicesAlternativa() {
    // Definição dos dados dos serviços para facilitar manutenção
    const services = [
        {
            id: 'sites',
            title: 'Sites',
            description: 'Sites Profissionais e Responsivos',
            details: ['Design Moderno', 'Otimização SEO', 'Velocidade de Carregamento'],
            theme: 'light', // Fundo branco, texto escuro
            gridClass: 'service-card-lg'
        },
        {
            id: 'chatbots',
            title: 'Chatbots',
            description: 'Automatize atendimentos em sites, WhatsApp e redes sociais.',
            details: [
                'Respostas rápidas e humanizadas',
                'Integração com bancos de dados',
                'Disponibilidade 24/7'
            ],
            theme: 'accent', // Fundo azul secundário, texto escuro
            gridClass: 'service-card-md'
        },
        {
            id: 'apps',
            title: 'Aplicativos',
            description: 'Leve sua ideia para a palma da sua mão',
            details: ['Android & iOS', 'Interfaces Intuitivas', 'Alta Performance'],
            theme: 'dark', // Fundo marinho, texto claro
            gridClass: 'service-card-sm'
        }
    ]

    return (
        <section id="servicos" className="services-section">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* CABEÇALHO DA SEÇÃO */}
                <header className="services-header">
                    <span className="services-kicker">O que fazemos</span>
                    <h2 className="services-main-title">Serviços Oferecidos</h2>
                </header>

                {/* GRADE DE SERVIÇOS (LAYOUT ASSIMÉTRICO) */}
                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={`service-card ${service.theme} ${service.gridClass}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2,
                                ease: "easeOut"
                            }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="service-card-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>

                                <ul className="service-details-list">
                                    {service.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Elemento decorativo de fundo (opcional, simula o logo no protótipo) */}
                            <div className="service-decoration"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}