'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TiltCard from './TiltCard'
import './styles/Services.css'

/**
 * COMPONENTE DE SERVIÇOS (Cascata Orgânica 3D)
 * @description Apresenta a carta de serviços com profundidade de perspectiva,
 * entregáveis detalhados e ancoragem direta de cases de sucesso reais.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

interface ServiceItem {
    id: string;
    kicker: string;
    title: string;
    description: string;
    deliverables: string[];
    featuredCase: { name: string; url: string };
    theme: 'light' | 'accent' | 'dark';
    alignment: string;
}

const servicesData: ServiceItem[] = [
    {
        id: 'web',
        kicker: 'Presença & Escala',
        title: 'Desenvolvimento Web',
        description: 'Plataformas de altíssima performance, otimizadas para conversão de tráfego pago e ranqueamento orgânico (SEO) no Google.',
        deliverables: [
            'Landing Pages de altíssima conversão',
            'Sistemas institucionais com painel de gestão',
            'E-commerces e vitrines virtuais sob medida'
        ],
        featuredCase: {
            name: 'Totem Vestibulares',
            url: 'https://totemvestibulares.compactjr.com/'
        },
        theme: 'light',
        alignment: 'md:mr-auto lg:ml-10',
    },
    {
        id: 'automacao',
        kicker: 'Eficiência Operacional',
        title: 'Automação & Chatbots',
        description: 'Assistentes virtuais inteligentes que atendem, qualificam e vendem para o seu cliente 24 horas por dia, 7 dias por semana.',
        deliverables: [
            'Robôs de atendimento para WhatsApp e Instagram',
            'Integração de dados com CRMs e planilhas',
            'Fluxos de triagem com Inteligência Artificial'
        ],
        featuredCase: {
            name: 'CompAct Bot (Solução Interna)',
            url: '/#contato'
        },
        theme: 'accent',
        alignment: 'md:ml-auto lg:mr-10 md:-mt-24',
    },
    {
        id: 'mobile',
        kicker: 'Inovação & Retenção',
        title: 'Aplicativos Mobile',
        description: 'Coloque o seu modelo de negócio no bolso do seu usuário através de aplicações nativas rápidas, intuitivas e estáveis.',
        deliverables: [
            'Apps híbridos para Android e iOS (React Native)',
            'Sistemas operacionais de uso interno/logística',
            'Design de Interface e Experiência (UI/UX)'
        ],
        featuredCase: {
            name: 'Conecta App',
            url: 'https://conecta.compactjr.com/'
        },
        theme: 'dark',
        alignment: 'mx-auto md:-mt-12',
    }
]

const CheckIcon = () => (
    <svg className="w-4 h-4 mt-0.5 shrink-0 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
)

export default function Services() {
    return (
        <section id="servicos" className="services-section">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <header className="services-header">
                    <span className="font-principal text-sm text-secundaria font-bold uppercase tracking-[4px] block mb-2">O que fazemos</span>
                    <h2 className="services-main-title">Nossas Soluções</h2>
                </header>

                <div className="services-cascade">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className={`w-full max-w-xl ${service.alignment}`}
                            style={{ perspective: '1200px' }}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                        >
                            <TiltCard className={`service-card ${service.theme}`}>

                                {/* O miolo com 'translateZ(35px)' gera o efeito holográfico ao inclinar */}
                                <div className="service-card-content select-none">

                                    <div className="flex flex-col mb-6">
                                        <span className="service-kicker">{service.kicker}</span>
                                        <h3 className="service-title">{service.title}</h3>
                                        <p className="service-description">{service.description}</p>
                                    </div>

                                    <div className="pt-6 border-t border-current/10 mb-8">
                                        <span className="font-principal text-xs uppercase tracking-widest font-bold opacity-50 block mb-3">Principais Entregáveis:</span>
                                        <ul className="service-deliverables-list">
                                            {service.deliverables.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2.5 font-principal text-sm md:text-base">
                                                    <CheckIcon />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-2">
                                        <Link
                                            href={service.featuredCase.url}
                                            className="service-case-pill group"
                                            // stopPropagation impede que arrastar o botão acione o tilt da Vercel
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="font-bold">Case de Sucesso:</span> {service.featuredCase.name}
                                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
                                        </Link>
                                    </div>

                                </div>

                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}