'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image' // 💡 Importante para otimização de imagens
import './Header.css'

export default function Header() {
    const [rolou, setRolou] = useState(false)
    const [menuAberto, setMenuAberto] = useState(false)

    useEffect(() => {
        const monitorarScroll = () => setRolou(window.scrollY > 20)
        window.addEventListener('scroll', monitorarScroll)
        return () => window.removeEventListener('scroll', monitorarScroll)
    }, [])

    return (
        <>
            <header className={`header-container ${rolou ? 'header-scroll-active' : 'header-scroll-inactive'}`}>
                {/* 💡 EXPLICAÇÃO TÉCNICA: Usamos max-w-5xl para os links não "fugirem" da logo em monitores grandes */}
                <div className="container mx-auto px-6 max-w-3xl flex justify-between items-center">

                    {/* NAVEGAÇÃO ESQUERDA */}
                    <nav className="hidden md:flex items-center gap-12 w-1/3 justify-end">
                        <Link href="/" className="nav-link">Homepage</Link>
                        <Link href="#portfolio" className="nav-link nav-link-muted">Portfólio</Link>
                    </nav>

                    {/* LOGO CENTRALIZADA */}
                    <div className="flex justify-center items-center w-auto px-10 z-[70]">
                        <Link href="/" className="relative flex items-center justify-center">
                            {/* 🎨 ÁREA DO MARKETING: Substitua o src pelo caminho da sua imagem da logo */}
                            <div className="logo-image-container">
                                <Image
                                    src="/logo-compact.png"
                                    alt="CompAct Jr. Logo"
                                    width={50} // Valor de referência
                                    height={50} // Valor de referência
                                    priority
                                    className="object-contain"
                                    style={{ width: 'auto', height: 'auto' }}
                                />
                            </div>
                        </Link>
                    </div>

                    {/* NAVEGAÇÃO DIREITA */}
                    <nav className="hidden md:flex items-center gap-12 w-1/3 justify-start">
                        <Link href="#sobre" className="nav-link nav-link-muted">Quem Somos</Link>
                        <Link href="#blog" className="nav-link nav-link-muted">Blog</Link>
                        <button className="btn-contato ml-4">CONTATO</button>
                    </nav>

                    {/* MENU BURGER (Apenas Mobile) */}
                    <div
                        className={`menu-burger ${menuAberto ? 'burger-open' : ''}`}
                        onClick={() => setMenuAberto(!menuAberto)}
                    >
                        <span className="burger-line line-1"></span>
                        <span className="burger-line line-2"></span>
                        <span className="burger-line line-3"></span>
                    </div>

                </div>
            </header>

            {/* OVERLAY MOBILE (Mantido) */}
            <div className={`mobile-menu-overlay ${menuAberto ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <nav className="flex flex-col items-center gap-8">
                    <Link href="/" onClick={() => setMenuAberto(false)} className="nav-link nav-link-mobile text-secundaria">Homepage</Link>
                    <Link href="#portfolio" onClick={() => setMenuAberto(false)} className="nav-link nav-link-mobile">Portfólio</Link>
                    <Link href="#sobre" onClick={() => setMenuAberto(false)} className="nav-link nav-link-mobile">Quem Somos</Link>
                    <Link href="#blog" onClick={() => setMenuAberto(false)} className="nav-link nav-link-mobile">Blog</Link>
                    <button className="btn-contato text-lg px-12 py-4">CONTATO</button>
                </nav>
            </div>
        </>
    )
}