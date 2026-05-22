'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import './styles/Hero.css'

/**
 * COMPONENTE HERO SECTION
 * @description A primeira seção do site (acima da dobra). Responsável pela primeira impressão,
 * apresentando a proposta de valor principal da empresa e a chamada para ação (CTA).
 * @kayualins - Equipe de Projetos CompAct Jr.
 */
export default function Hero() {
    return (
        <section id="hero" className="hero-section">

            {/* EFEITOS DE LUZ DE FUNDO (GLOWS)
                A separação em divs individuais permite posicionamento flexível e controle de
                intensidade independente para o roxo (esquerda) e o azul (direita). */}
            <div className="hero-glow-purple"></div>
            <div className="hero-glow-blue"></div>

            <div className="hero-content">
                {/* ANIMAÇÃO DE ENTRADA DO TÍTULO
                    Utilizamos o framer-motion para deslocar o eixo Y (y: 30 para y: 0) e
                    alterar a opacidade simultaneamente, criando um efeito de surgimento suave. */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="hero-title">
                        Soluções inteligentes para <br className="hidden md:block" /> transformar o seu negócio
                    </h1>

                    {/* ANIMAÇÃO DO SUBTÍTULO
                        O uso do 'delay: 0.2' cria uma animação em cascata (staggered animation),
                        fazendo o subtítulo aparecer logo após o título, guiando o olhar do usuário. */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="hero-subtitle"
                    >
                        Desenvolvemos softwares, websites e aplicativos com qualidade profissional e preço acessível.
                    </motion.p>

                    {/* ANIMAÇÃO DO BOTÃO
                        O delay maior (0.4) garante que a chamada para ação seja o último elemento
                        a aparecer, consolidando a hierarquia de leitura. */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <Link href="#contato" className="hero-btn" scroll={true}>
                            Entre em contato conosco
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}