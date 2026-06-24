'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import './styles/Header.css'

/**
 * COMPONENTE HEADER (Navegação Principal)
 * @description O cabeçalho do site. Ele é responsivo, possui fundo dinâmico e um menu mobile customizado.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */
export default function Header() {
    const [rolou, setRolou] = useState(false)
    const [menuAberto, setMenuAberto] = useState(false)
    const [isDark, setIsDark] = useState(true)

    const pathname = usePathname()

    useEffect(() => {
        const monitorarScroll = () => setRolou(window.scrollY > 20)
        window.addEventListener('scroll', monitorarScroll)
        return () => window.removeEventListener('scroll', monitorarScroll) // Previne memory leak
    }, [])

    // Intercepta cliques em links da própria página para rolar suavemente ao topo
    const handleSamePageScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
        if (pathname === targetPath) {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    // Garante que o menu mobile feche sozinho ao rolar para o topo
    const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
        setMenuAberto(false)
        handleSamePageScroll(e, targetPath)
    }

    return (
        <>
            <header className={`header-container ${rolou ? 'header-scroll-active' : 'header-scroll-inactive'}`}>
                {/* Grid 3 colunas no mobile fixa a logo no centro absoluto; no desktop vira flex-between */}
                <div className="container mx-auto px-6 max-w-7xl h-full grid grid-cols-3 items-center lg:flex lg:justify-between">

                    {/* COLUNA ESQUERDA: Homepage | Quem Somos */}
                    <nav className="hidden lg:flex items-center lg:gap-6 xl:gap-10 lg:w-[45%] xl:w-[40%] justify-end shrink-0">
                        <Link href="/" onClick={(e) => handleSamePageScroll(e, '/')} className="nav-link">Homepage</Link>
                        <Link href="/sobre" onClick={(e) => handleSamePageScroll(e, '/sobre')} className="nav-link">Quem Somos</Link>
                    </nav>

                    {/* LOGO CENTRAL */}
                    <div className="flex justify-center items-center col-start-2 lg:col-auto lg:px-2 xl:px-10 z-[70] shrink-0">
                        <Link href="/" onClick={(e) => handleSamePageScroll(e, '/')} className="relative block">
                            <Image
                                src="/logos/logo-compact.webp"
                                alt="CompAct Jr. Logo"
                                width={50}
                                height={40}
                                priority
                                style={{ width: 'auto', height: 'auto' }}
                                className="object-contain logo-img"
                            />
                        </Link>
                    </div>

                    {/* COLUNA DIREITA: Portfólio | Blog + CTA */}
                    <div className="hidden lg:flex items-center lg:gap-5 xl:gap-10 lg:w-[45%] xl:w-[40%] justify-start shrink-0">
                        <nav className="flex items-center lg:gap-4 xl:gap-8">
                            <Link href="/portfolio" onClick={(e) => handleSamePageScroll(e, '/portfolio')} className="nav-link">Portfólio</Link>
                            <Link href="/blog" onClick={(e) => handleSamePageScroll(e, '/blog')} className="nav-link">Blog</Link>
                        </nav>

                        <div className="flex items-center lg:gap-3 xl:gap-6 border-l border-branco/10 lg:pl-3 xl:pl-6 shrink-0">
                            <Link href="/#contato">
                                <button className="btn-contato">CONTATO</button>
                            </Link>

                            <div className="header-extra-icons">
                                {/* Funcionalidade futura: Seletor de Idioma
                                <button className="icon-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                                </button>
                                */}

                                {/* Funcionalidade futura: Dark/Light Mode
                                <motion.button
                                    onClick={() => setIsDark(!isDark)}
                                    className="icon-btn hover:scale-110 transition-transform"
                                    aria-label="Alternar Tema"
                                    whileTap={{ rotate: 90 }}
                                >
                                    {isDark ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                                    )}
                                </motion.button>
                                */}
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden flex items-center justify-end col-start-3 z-[100]">
                        <div className={`menu-burger ${menuAberto ? 'burger-open' : ''}`} onClick={() => setMenuAberto(!menuAberto)}>
                            <span className="burger-line line-1" />
                            <span className="burger-line line-2" />
                            <span className="burger-line line-3" />
                        </div>
                    </div>

                </div>
            </header>

            {/* OVERLAY MOBILE */}
            <div className={`mobile-menu-overlay ${menuAberto ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <button
                    onClick={() => setMenuAberto(false)}
                    className="absolute top-8 right-6 text-branco/50 hover:text-secundaria transition-colors p-2 cursor-pointer z-[100]"
                    aria-label="Fechar menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>

                {/* Sequência Mobile Exata */}
                <nav className="flex flex-col items-center gap-8 mt-10">
                    <Link href="/" onClick={(e) => handleMobileNav(e, '/')} className="nav-link nav-link-mobile text-secundaria">Homepage</Link>
                    <Link href="/sobre" onClick={(e) => handleMobileNav(e, '/sobre')} className="nav-link nav-link-mobile">Quem Somos</Link>
                    <Link href="/portfolio" onClick={(e) => handleMobileNav(e, '/portfolio')} className="nav-link nav-link-mobile">Portfólio</Link>
                    <Link href="/blog" onClick={(e) => handleMobileNav(e, '/blog')} className="nav-link nav-link-mobile">Blog</Link>

                    <div className="flex items-center gap-8 my-2">
                        {/* Funcionalidade futura: Idioma */}
                        {/* Funcionalidade futura: Tema */}
                    </div>

                    <Link href="/#contato" onClick={() => setMenuAberto(false)}>
                        <button className="btn-contato text-lg px-12 py-4 mt-2">CONTATO</button>
                    </Link>
                </nav>
            </div>
        </>
    )
}