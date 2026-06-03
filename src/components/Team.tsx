'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import './styles/Team.css'

/**
 * COMPONENTE DA EQUIPA (TIME COMPACT)
 * @description Secção que apresenta os membros organizados por diretoria.
 * Implementa renderização condicional para redes sociais: o ícone só aparece
 * se a URL correspondente estiver preenchida no objeto do membro.
 * @kayualins Equipa de Projetos CompAct Jr.
 */

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="team-social-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
)
const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="team-social-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="team-social-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)

export default function Team() {
    // ESTRUTURA DE DADOS OTIMIZADA PARA MANUTENÇÃO
    // Para adicionar ou remover redes, basta preencher ou apagar a string dentro do objeto "socials".
    // id's disponíveis: 6, 14, 31
    const teamData = [
        {
            department: 'PRESIDÊNCIA',
            members: [
                {
                    id: 1,
                    name: 'Arthur Lorenço',
                    role: 'Presidente',
                    isDirector: true,
                    image: '/timeCompact/arthur.webp',
                    socials: {
                        instagram: 'https://instagram.com/Asan_haha',
                        linkedin: 'https://linkedin.com/in/arthur-lorenço',
                        github: 'https://github.com/ArthurLorenco'
                    }
                }
            ]
        },
        {
            department: 'ADM-FIN',
            members: [
                {
                    id: 2,
                    name: 'Arthur Etges',
                    role: 'Diretor ADM-FIN',
                    isDirector: true,
                    image: '/timeCompact/pao.webp',
                    socials: {
                        instagram: 'https://instagram.com/arthur_etges',
                        linkedin: 'https://br.linkedin.com/in/arthur-leitão-etges-b3244a35a',
                        github: 'https://github.com/ArthurLeitaoEtges'
                    }
                },
                {
                    id: 3,
                    name: 'Guilherme Martini',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/guilherme.webp',
                    socials: {
                        instagram: 'https://instagram.com/guinndrt',
                        linkedin: 'https://www.linkedin.com/in/guilherme-martini-7645513b4',
                        github: 'https://github.com/guigalmesh'
                    }
                },
                {
                    id: 4,
                    name: 'Miguel Santos',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/miguel.webp',
                    socials: {
                        instagram: 'https://instagram.com/miguelmockk_'
                    }
                },
                {
                    id: 5,
                    name: 'Angelo Tonetto',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/angelo.webp',
                    socials: {
                        instagram: 'https://instagram.com/angelo_rt_'
                    }
                },
            ]
        },
        {
            department: 'COMERCIAL',
            members: [
                {
                    id: 7,
                    name: 'Pedro Miranda',
                    role: 'Diretor Comercial',
                    isDirector: true,
                    image: '/timeCompact/pedroh.webp',
                    socials: {
                        instagram: 'https://instagram.com/pedrohwm',
                        linkedin: 'https://www.linkedin.com/in/pedrohwm/',
                    }
                },
                {
                    id: 8,
                    name: 'Jean Guerra',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/jeanr.webp',
                    socials: {
                        instagram: 'https://instagram.com/jeanlucasrighi',
                        linkedin: 'https://www.linkedin.com/in/jean-lucas-righi-guerra-5b20b6311/',
                        github: 'https://github.com/JeanLRG'
                    }
                },
                {
                    id: 9,
                    name: 'Anne Dornelles',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/anne.webp',
                    socials: {
                        instagram: 'https://instagram.com/annegdornelles',
                        linkedin: 'https://www.linkedin.com/in/anne-gabrielle-rufino-dornelles-6b1231337/',
                        github: 'https://github.com/annegdornelles'
                    }
                },
                {
                    id: 10,
                    name: 'Laysla Pires',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/laysla.webp',
                    socials: {
                        instagram: 'https://instagram.com/layslatpr',
                    }
                },
                {
                    id: 11,
                    name: 'Leonardo Nielsen',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/leonardo.webp',
                    socials: {
                        instagram: 'https://instagram.com/leon_cns',
                        github: 'https://github.com/Leon-CN'
                    }
                },
                {
                    id: 12,
                    name: 'Gabriel de Azeredo',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/gabriel.webp',
                    socials: {
                        instagram: 'https://www.instagram.com/_gabriel_chant',
                        linkedin: 'https://www.linkedin.com/in/gabriel-de-azeredo-reginato-040a51404/',
                    }
                },
                {
                    id: 13,
                    name: 'Pedro de Bastos',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/pedrob.webp',
                    socials: {
                        instagram: 'https://instagram.com/_pedrodebastos',
                        linkedin: 'https://www.linkedin.com/in/pedro-de-bastos/',
                    }
                },
                {
                    id: 15,
                    name: 'Kauan Forgiarini',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/kauan.webp',
                    socials: {
                        instagram: 'https://instagram.com/kauaanmf',
                        linkedin: 'https://www.linkedin.com/in/kauan-forgiarini/',
                        github: 'https://github.com/KauanForgiarini'
                    }
                }
            ]
        },
        {
            department: 'GESTÃO DE PESSOAS',
            members: [
                {
                    id: 16,
                    name: 'Mariana Borges',
                    role: 'Diretora de GP',
                    isDirector: true,
                    image: '/timeCompact/maga.webp',
                    socials: {
                        instagram: 'https://instagram.com/marianacb.zip',
                        linkedin: 'https://www.linkedin.com/in/mariana-ciervo-borges-15b07626a/',
                        github: 'https://github.com/MarianaCiervoB',
                    }
                },
                {
                    id: 17,
                    name: 'Lenno Rhoden',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/lenno.webp',
                    socials: {
                        instagram: 'https://instagram.com/lenno_rhoden',
                        linkedin: 'https://www.linkedin.com/in/lenno-rhoden-a475b62b1/',
                        github: 'https://github.com/Lenno-R'
                    }
                },
                {
                    id: 18,
                    name: 'Ramon Studier',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/ramon.webp',
                    socials: {
                        instagram: 'https://instagram.com/ramonnsf',
                        github: 'https://github.com/RamonStudierF'
                    }
                },
                {
                    id: 19,
                    name: 'Thiago Brandão',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/thiagob.webp',
                    socials: {
                        github: 'https://github.com/Thiagobrandaogb'
                    }
                },
                {
                    id: 20,
                    name: 'Dinei Giustina',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/dinei.webp',
                    socials: {
                        instagram: 'https://www.instagram.com/dinei_della_giustina/',
                        linkedin: 'https://www.linkedin.com/in/dinei-jo%C3%A3o-della-giustina/',

                    }
                },
                {
                    id: 21,
                    name: 'Pedro Menezes',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/pedrom.webp',
                    socials: {
                        instagram: 'https://instagram.com/pedro_vitalis',
                        linkedin: 'https://www.linkedin.com/in/pedrovitalis/',
                        github: 'https://github.com/pedrovitalis'
                    }
                }
            ]
        },
        {
            department: 'GESTÃO DE PROJETOS',
            members: [
                {
                    id: 22,
                    name: 'Jonas Silva',
                    role: 'Diretor Projetos',
                    isDirector: true,
                    image: '/timeCompact/jonas.webp',
                    socials: {
                        instagram: 'https://instagram.com/jonas_lara',
                        linkedin: 'https://www.linkedin.com/in/jonas-silva-de-lara',
                        github: 'https://github.com/Jonas-SLara'
                    }
                },
                {
                    id: 23,
                    name: 'Kauâ Lima',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/kayua.webp',
                    socials: {
                        instagram: 'https://instagram.com/kayualins',
                        linkedin: 'https://www.linkedin.com/in/kayualins',
                        github: 'https://github.com/kayualins'
                    }
                },
                {
                    id: 24,
                    name: 'Zaluar dos Santos',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/zaluar.webp',
                    socials: {
                        instagram: 'https://instagram.com/zaluar_srj',
                        github: 'https://github.com/zaluar05'
                    }
                },
                {
                    id: 25,
                    name: 'Fabrício Duarte',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/fabricio.webp',
                    socials: {
                        instagram: 'https://instagram.com/faduzera1',
                        linkedin: 'https://www.linkedin.com/in/fabricioduarte12/',
                        github: 'https://github.com/fabricioduarte12'
                    }
                },
                {
                    id: 26,
                    name: 'Matheus Ferraz',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/matheus.webp',
                    socials: {
                        instagram: 'https://instagram.com/ferrazs_silva',
                        linkedin: 'https://www.linkedin.com/in/matheus-ferrazs/',
                        github: 'https://github.com/Silvaferraz/'
                    }
                },
                {
                    id: 27,
                    name: 'Maria Marczinski',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/mariav.webp',
                    socials: {
                        instagram: 'https://instagram.com/mariavitoriamarczinski',
                        linkedin: 'https://www.linkedin.com/in/maria-vitoria-marczinski',
                        github: 'https://github.com/Marczinski'
                    }
                },
                {
                    id: 28,
                    name: 'Jean Hoefling',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/jeans.webp',
                    socials: {
                        instagram: 'https://instagram.com/jean_hoefling',
                        linkedin: 'https://www.linkedin.com/in/jean-hoefling-548555336/',
                        github: 'https://github.com/jeanhoefling'
                    }
                },
                {
                    id: 29,
                    name: 'Gabriela Rosa',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/gabriela.webp',
                    socials: {
                        instagram: 'https://instagram.com/gabrielavrosa_',
                        linkedin: 'https://www.linkedin.com/in/gabriela-vitória-da-rosa-soares-804459261',
                        github: 'https://github.com/gabsculture'
                    }
                }
            ]
        },
        {
            department: 'MARKETING',
            members: [
                {
                    id: 30,
                    name: 'Bianca Dias',
                    role: 'Diretora Marketing',
                    isDirector: true,
                    image: '/timeCompact/bianca.webp',
                    socials: {
                        instagram: 'https://instagram.com/_biagd'
                    }
                },
                {
                    id: 32,
                    name: 'Helena Cardoso',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/helena.webp',
                    socials: {
                        instagram: 'https://instagram.com/len.scards',
                        linkedin: 'https://www.linkedin.com/in/helena-cardoso-9b2b9b200/',
                        github: 'https://github.com/HelenaCard'
                    }
                },
                {
                    id: 33,
                    name: 'Maria Meier',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/mariac.webp',
                    socials: {
                        instagram: 'https://instagram.com/ck_iwi_',
                        linkedin: 'https://www.linkedin.com/in/maria-carolina-meier-da-silva-366976375/',
                        github: 'https://github.com/MCarolMeier'
                    }
                },
                {
                    id: 34,
                    name: 'Alice Godoi',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/alice.webp',
                    socials: {
                        instagram: 'https://instagram.com/ec-ila'
                    }
                },
                {
                    id: 35,
                    name: 'Vítor Oliveira da Silva',
                    role: 'Membro',
                    isDirector: false,
                    image: '/timeCompact/vitor.webp',
                    socials: {
                        instagram: 'https://instagram.com/vi_oliveira.s'
                    }
                }
            ]
        }
    ]
    return (
        <section id="equipe" className="team-section">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <header className="team-header">
                    <h2 className="team-main-title">Time Compact</h2>
                </header>

                <div className="team-departments-list">
                    {teamData.map((dept, deptIndex) => (
                        <motion.div
                            key={deptIndex}
                            className="team-row"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: deptIndex * 0.1 }}
                        >

                            <div className="team-dept-title-col">
                                <h3 className="team-dept-title">{dept.department}</h3>
                            </div>

                            <div className="team-cards-col">
                                {dept.members.map((member) => (
                                    <div
                                        key={member.id}
                                        className={`team-card ${member.isDirector ? 'director' : 'member'}`}
                                    >
                                        <div className="team-card-inner">

                                            <div className="team-image-wrapper">
                                                <Image
                                                    src={member.image}
                                                    alt={`Foto de ${member.name}`}
                                                    fill
                                                    sizes="(max-width: 640px) 130px, (max-width: 1024px) 150px, 160px"
                                                    className="object-cover"
                                                    loading="lazy"
                                                />

                                                {/* BARRA DE REDES SOCIAIS COM RENDERIZAÇÃO CONDICIONAL */}
                                                <div className="team-social-bar">

                                                    {/* Só renderiza se a chave 'instagram' existir e tiver valor */}
                                                    {member.socials?.instagram && (
                                                        <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de ${member.name}`}>
                                                            <InstagramIcon />
                                                        </a>
                                                    )}

                                                    {/* Só renderiza se a chave 'linkedin' existir e tiver valor */}
                                                    {member.socials?.linkedin && (
                                                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`}>
                                                            <LinkedInIcon />
                                                        </a>
                                                    )}

                                                    {/* Só renderiza se a chave 'github' existir e tiver valor */}
                                                    {member.socials?.github && (
                                                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${member.name}`}>
                                                            <GithubIcon />
                                                        </a>
                                                    )}

                                                </div>
                                            </div>

                                            <div className="team-info">
                                                <h4 className="team-name">{member.name}</h4>
                                                <p className="team-role">{member.role}</p>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}