'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './styles/Footer.css'

/**
 * COMPONENTE DE RODAPÉ (FOOTER)
 * @description Encerramento da página. Versão otimizada com navegação espelhada do Header
 * e alinhamento centralizado na versão mobile para melhor simetria e UX.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-social-icon">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
)

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-social-icon">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
)

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-social-icon">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
)

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer-container">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="footer-main-grid">

                    {/* COLUNA 1: LOGO E DESCRIÇÃO */}
                    <div className="footer-info-col">
                        <Link href="/" className="footer-logo-link">
                            <Image
                                src="/logo-h.png"
                                alt="CompAct Jr. Logo"
                                width={250}
                                height={45}
                                className="object-contain"
                            />
                        </Link>
                        <p className="footer-brand-text">
                            Desenvolvendo soluções inteligentes em tecnologia da informação para impulsionar e transformar o seu negócio no mercado digital.
                        </p>
                    </div>

                    {/* COLUNA 2: NAVEGAÇÃO SIMPLIFICADA (Espelho do Header) */}
                    <div className="footer-links-col">
                        <h3 className="footer-col-title">Navegação</h3>
                        <nav className="footer-nav">
                            <div className="footer-nav-group">
                                <Link href="/" className="footer-link">Homepage</Link>
                                <Link href="#sobre" className="footer-link">Quem Somos</Link>
                                <Link href="#servicos" className="footer-link">Serviços</Link>
                                <Link href="#contato" className="footer-link">Contato</Link>
                            </div>
                        </nav>
                    </div>

                    {/* COLUNA 3: CONTATOS RÁPIDOS E REDES SOCIAIS */}
                    <div className="footer-social-col">
                        <h3 className="footer-col-title">Conecte-se</h3>
                        <p className="footer-contact-item">contato@compactjr.com.br</p>

                        <div className="footer-social-row">
                            <a href="#" className="footer-social-btn" aria-label="Instagram">
                                <InstagramIcon />
                            </a>
                            <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                                <LinkedInIcon />
                            </a>
                            <a href="#" className="footer-social-btn" aria-label="GitHub">
                                <GithubIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* BLOCO INFERIOR: COMPLIANCE E DIREITOS AUTORAIS */}
                <div className="footer-bottom-bar">
                    <p className="footer-copyright">
                        &copy; {currentYear} CompAct Jr. Todos os direitos reservados.
                    </p>
                    <p className="footer-legal">
                        CNPJ: 24.341.248/0001-31 | Desenvolvido com excelência acadêmica.
                    </p>
                </div>

            </div>
        </footer>
    )
}