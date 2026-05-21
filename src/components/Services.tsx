'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import './Services.css'

/**
 * COMPONENTE DE SERVIÇOS (Layout orgânico com efeito 3D)
 * @description Cards assimétricos (esquerda, direita, centro) com perspectiva e rotação ao hover.
 * @kayualins Equipe de Projetos CompAct Jr.
 */
export default function Services() {
    // CONFIGURAÇÃO DOS CARDS: título, descrição, tema, posição e ângulo 3D no hover
    const services = [
        {
            id: 'sites',
            title: 'Sites',
            description: 'Sites Profissionais e Responsivos',
            details: [],
            theme: 'light',
            alignment: 'md:mr-auto lg:ml-10',                 // Alinha à esquerda
            hover3D: { rotateY: 8, rotateX: 5, scale: 1.05 }  // Gira lateral direita para trás
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
            alignment: 'md:ml-auto lg:mr-10 md:-mt-24',      // Direita e sobreposição para cima
            hover3D: { rotateY: -12, rotateX: 5, scale: 1.05 } // Gira lateral esquerda para trás
        },
        {
            id: 'apps',
            title: 'Aplicativos',
            description: 'Leve sua ideia para a palma da sua mão',
            details: [],
            theme: 'dark',
            alignment: 'mx-auto md:-mt-12',                  // Centralizado, com margem negativa
            hover3D: { rotateX: 10, scale: 1.05 }            // Inclina para trás sem rotação lateral
        }
    ]

    return (
        <section id="servicos" className="services-section">

            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                {/* CABEÇALHO (oculto visualmente no mobile, mantido para SEO/hierarquia) */}
                <header className="services-header sr-only md:not-sr-only">
                    <h2 className="services-main-title">Nossos Serviços</h2>
                </header>

                {/* CARDS EM CASCATA (esquerda → direita → centro) */}
                <div className="services-cascade">
                    {services.map((service, index) => (
                        // perspective no wrapper é obrigatória para o efeito 3D funcionar corretamente
                        <div
                            key={service.id}
                            className={`w-full max-w-lg ${service.alignment}`}
                            style={{ perspective: '1200px' }}
                        >
                            <motion.div
                                className={`service-card ${service.theme}`}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,    // Stagger effect suave
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    ...service.hover3D,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                            >
                                <div className="service-card-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>

                                    {/* Lista de detalhes (exibida apenas quando houver itens) */}
                                    {service.details.length > 0 && (
                                        <ul className="service-details-list">
                                            {service.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}