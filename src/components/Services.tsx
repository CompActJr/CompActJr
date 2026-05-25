'use client'
import React from 'react'
import { motion } from 'framer-motion'
import TiltCard from './TiltCard' // Importando o nosso novo componente genérico
import './styles/Services.css'

/**
 * COMPONENTE DE SERVIÇOS (Layout orgânico)
 * @description Cards assimétricos utilizando o TiltCard para interação 3D.
 * @author Equipe de Projetos CompAct Jr.
 */
export default function Services() {
    const services = [
        {
            id: 'sites',
            title: 'Sites',
            description: 'Sites Profissionais e Responsivos',
            details: [],
            theme: 'light',
            alignment: 'md:mr-auto lg:ml-10',
        },
        {
            id: 'chatbots',
            title: 'Chatbots',
            description: 'Automatize atendimentos em sites, Whatsapp e redes sociais',
            details: [
                'Ofereça respostas rápidas com interação humanizada',
                'Integre ao seu sistema ou banco de dados'
            ],
            theme: 'accent',
            alignment: 'md:ml-auto lg:mr-10 md:-mt-24',
        },
        {
            id: 'apps',
            title: 'Aplicativos',
            description: 'Leve sua ideia para a palma da sua mão',
            details: [],
            theme: 'dark',
            alignment: 'mx-auto md:-mt-12',
        }
    ]

    return (
        <section id="servicos" className="services-section">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <header className="services-header">
                    <h2 className="services-main-title">Nossos Serviços</h2>
                </header>

                <div className="services-cascade">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={`w-full max-w-lg ${service.alignment}`}
                            // A REGRA DE OURO DO 3D: O Pai precisa ter perspectiva!
                            style={{ perspective: '1200px' }}
                            // Animação de entrada na rolagem da página (separada do 3D)
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        >
                            {/* ENVOLVEMOS O CARTÃO NO NOSSO COMPONENTE REUTILIZÁVEL */}
                            <TiltCard className={`service-card ${service.theme}`}>

                                {/* pointer-events-none é crucial aqui para evitar bugs de cálculo do rato */}
                                <div className="service-card-content pointer-events-none">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>

                                    {service.details.length > 0 && (
                                        <ul className="service-details-list">
                                            {service.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}