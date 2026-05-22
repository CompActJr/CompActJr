'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import './styles/About.css'
import Link from "next/link";

/**
 * COMPONENTE QUEM SOMOS (Seção Institucional)
 * @description Apresenta a história, missão e equipe com layout assimétrico (texto + foto).
 * @kayualins - Equipe de Projetos CompAct Jr.
 */
export default function About() {
    return (
        // id="sobre" ancora a navegação do Header (link "#sobre")
        <section id="sobre" className="about-section">
            <div className="about-container">

                {/* COLUNA ESQUERDA: TEXTO COM ANIMAÇÃO (entrada pela esquerda) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="about-content"
                >
                    {/* text-wrapper contém a borda lateral branca (estilizada no CSS) */}
                    <div className="about-text-wrapper">
                        <span className="about-kicker">Quem Somos</span>
                        <h2 className="about-title">
                            Conheça nossa<br />
                            equipe & história
                        </h2>
                        <p className="about-description">
                            Somos uma empresa júnior de Tecnologia da Informação, sem fins lucrativos,
                            vinculada à UFSM, formada e gerida por estudantes universitários que desenvolvem
                            projetos de qualidade com preços acessíveis com a supervisão de professores doutores.
                            Os membros da CompAct Jr são voluntários e trabalham para ter uma experiência profissional,
                            aprendizado na prática e também por acreditarem no impacto positivo que o Movimento
                            Empresa Júnior traz e no impacto que nossos projetos causam na sociedade.
                        </p>
                    </div>

                    <Link href="#historia">
                        <button className="about-btn">saiba mais</button>
                    </Link>

                </motion.div>

                {/* COLUNA DIREITA: FOTO DA EQUIPE COM ANIMAÇÃO (entrada pela direita) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="about-image-column"
                >
                    <div className="about-image-wrapper">
                        {/* fill + object-fit faz a imagem preencher o container sem distorção */}
                        <Image
                            src="/time.png"
                            alt="Equipe da CompAct Jr segurando a bandeira"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="about-image"
                            priority={false}
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}