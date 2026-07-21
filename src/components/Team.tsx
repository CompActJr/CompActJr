'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import './styles/Team.css'

/**
 * COMPONENTE DA EQUIPE (TIME COMPACT)
 * @description Secção que apresenta os membros organizados por diretoria consumindo do Sanity CMS.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

// Tipagem dos dados
interface Member {
    _id: string;
    name: string;
    role: string;
    isDirector: boolean;
    image: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
}

interface DepartmentGroup {
    department: string;
    members: Member[];
}

interface TeamProps {
    teamData: DepartmentGroup[];
}

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="team-social-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
)
const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="team-social-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="team-social-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)

export default function Team({ teamData }: TeamProps) {
    return (
        <section id="equipe" className="team-section">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <header className="team-header">
                    <h2 className="team-main-title">Time Compact</h2>
                </header>

                <div className="team-departments-list">
                    {teamData.map((dept, deptIndex) => (
                        <motion.div
                            key={dept.department}
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
                                        key={member._id}
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

                                                <div className="team-social-bar">
                                                    {member.instagram && (
                                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de ${member.name}`}>
                                                            <InstagramIcon />
                                                        </a>
                                                    )}

                                                    {member.linkedin && (
                                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`}>
                                                            <LinkedInIcon />
                                                        </a>
                                                    )}

                                                    {member.github && (
                                                        <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${member.name}`}>
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