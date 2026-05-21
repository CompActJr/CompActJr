'use client'
import React from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

/**
 * COMPONENTE DE CONTATO (CONTACT SECTION)
 * @description Seção final de conversão.
 * Layout de 2 colunas: Informações e Mapa dedicado à esquerda, Formulário Glassmorphism à direita.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
)
const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
)
const MapPinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon-small"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
)

export default function Contact() {
    return (
        <section id="contato" className="contact-section">
            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start pt-24 pb-32">

                {/* COLUNA ESQUERDA: INFORMAÇÕES E MAPA DEDICADO */}
                <motion.div
                    className="contact-info-col"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="mb-10">
                        <h2 className="contact-main-title">
                            Converse com a<br />
                            <span className="text-secundaria">CompAct Jr.</span>
                        </h2>

                        <div className="contact-address-block">
                            <div className="flex items-start gap-3">
                                <MapPinIcon />
                                <p className="contact-address-text">
                                    Av. Roraima, 1000 - CT - Sala 212<br />
                                    Campus Camobi, Santa Maria/RS<br />
                                    CEP 97105-900
                                </p>
                            </div>
                        </div>

                        <div className="contact-social-links">
                            <a href="#" className="contact-social-btn group" aria-label="WhatsApp">
                                <div className="contact-icon-wrapper"><WhatsAppIcon /></div>
                                <span className="contact-social-label">Chame no WhatsApp</span>
                            </a>
                            <a href="#" className="contact-social-btn group" aria-label="E-mail">
                                <div className="contact-icon-wrapper"><MailIcon /></div>
                                <span className="contact-social-label">Envie um E-mail</span>
                            </a>
                        </div>
                    </div>

                    {/* MAPA INTERATIVO DESOBSTRUÍDO COM ALFINETE */}
                    <div className="contact-map-box">
                        <iframe
                            /* O parâmetro q= define a busca exata, forçando o Google a colocar o alfinete vermelho. */
                            src="https://maps.google.com/maps?q=Centro+de+Tecnologia+UFSM+Santa+Maria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização CompAct Jr. no Google Maps"
                        ></iframe>
                    </div>
                </motion.div>

                {/* COLUNA DIREITA: FORMULÁRIO (GLASSMORPHISM) */}
                <motion.div
                    className="contact-form-col"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="contact-form-header">
                            <h3 className="contact-form-title">Ou preencha o formulário</h3>
                            <p className="contact-form-subtitle">Que entraremos em contato com você o mais rápido possível.</p>
                        </div>

                        <div className="contact-input-grid">
                            <div className="contact-input-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" placeholder="Seu nome completo" required />
                            </div>
                            <div className="contact-input-group">
                                <label htmlFor="empresa">Empresa</label>
                                <input type="text" id="empresa" placeholder="Nome do seu negócio" />
                            </div>
                        </div>

                        <div className="contact-input-grid">
                            <div className="contact-input-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" placeholder="seu@email.com" required />
                            </div>
                            <div className="contact-input-group">
                                <label htmlFor="telefone">Telefone</label>
                                <input type="tel" id="telefone" placeholder="(55) 90000-0000" required />
                            </div>
                        </div>

                        <div className="contact-input-group">
                            <label htmlFor="mensagem">Nos explique sua necessidade</label>
                            <textarea id="mensagem" rows={4} placeholder="Como a CompAct Jr. pode ajudar o seu negócio a crescer?" required></textarea>
                        </div>

                        <button type="submit" className="contact-submit-btn">
                            Enviar Mensagem
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    )
}