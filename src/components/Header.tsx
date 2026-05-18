'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion' // Para animações suaves nos ícones
import './Header.css'

export default function Header() {
    const [rolou, setRolou] = useState(false)
    const [menuAberto, setMenuAberto] = useState(false)
    const [isDark, setIsDark] = useState(true) // Estado inicial do tema

    useEffect(() => {
        const monitorarScroll = () => setRolou(window.scrollY > 20)
        window.addEventListener('scroll', monitorarScroll)
        return () => window.removeEventListener('scroll', monitorarScroll)
    }, [])

    return (
        <>
            <header className={`header-container ${rolou ? 'header-scroll-active' : 'header-scroll-inactive'}`}>
                <div className="container mx-auto px-6 max-w-3xl flex justify-between items-center">

                    {/* LADO ESQUERDO: Navegação */}
                    <nav className="hidden md:flex items-center gap-10 w-1/3 justify-end">
                        <Link href="/" className="nav-link">Homepage</Link>
                        <Link href="#portfolio" className="nav-link nav-link-muted">Portfólio</Link>
                    </nav>

                    {/* CENTRO: Logo */}
                    <div className="flex justify-center items-center px-10 z-[70]">
                        <Link href="/" className="relative flex items-center justify-center">
                            <div className="logo-image-container">
                                <Image
                                    src="/logo-compact.png"
                                    alt="CompAct Jr. Logo"
                                    width={80}
                                    height={50}
                                    priority
                                    style={{ width: 'auto', height: 'auto' }}
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* LADO DIREITO: Links + Botão + Ações */}
                    <div className="hidden md:flex items-center gap-10 w-1/3 justify-start">
                        <nav className="flex items-center gap-8">
                            <Link href="#sobre" className="nav-link nav-link-muted">Quem Somos</Link>
                            <Link href="#blog" className="nav-link nav-link-muted">Blog</Link>
                        </nav>

                        {/* GRUPO DE AÇÕES (Botão + Ícones) */}
                        <div className="flex items-center gap-6 border-l border-branco/10 pl-6">
                            <button className="btn-contato">CONTATO</button>

                            {/* ÍCONES AUXILIARES */}
                            <div className="header-extra-icons">
                                {/* Linguagem */}
                                <button className="icon-btn" title="Mudar Idioma">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                                </button>

                                {/* Tema (Com animação simples do Framer Motion) */}
                                <motion.button
                                    className="icon-btn"
                                    onClick={() => setIsDark(!isDark)}
                                    whileTap={{ rotate: 90 }}
                                    title="Alternar Tema"
                                >
                                    {isDark ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                                    )}
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE BURGER */}
                    <div className={`menu-burger ${menuAberto ? 'burger-open' : ''}`} onClick={() => setMenuAberto(!menuAberto)}>
                        <span className="burger-line line-1"></span>
                        <span className="burger-line line-2"></span>
                        <span className="burger-line line-3"></span>
                    </div>

                </div>
            </header>

            {/* OVERLAY MOBILE */}
            <div className={`mobile-menu-overlay ${menuAberto ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <nav className="flex flex-col items-center gap-8">
                    <Link href="/" onClick={() => setMenuAberto(false)} className="nav-link nav-link-mobile text-secundaria">Homepage</Link>
                    <Link href="#portfolio" onClick={() => setMenuAberto(false)} className="nav-link nav-link-mobile">Portfólio</Link>
                    <Link href="#sobre" onClick={() => setMenuAberto(false)} className="nav-link nav-link-mobile">Quem Somos</Link>
                    <Link href="#blog" onClick={() => setMenuAberto(false)} className="nav-link nav-link-mobile">Blog</Link>
                    <div className="flex gap-4 mt-4">
                        <button className="icon-btn scale-150 p-4">EN</button>
                        <button className="icon-btn scale-150 p-4">🌙</button>
                    </div>
                    <button className="btn-contato text-lg px-12 py-4 mt-4">CONTATO</button>
                </nav>
            </div>
        </>
    )
}