'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './styles/MaterialsContent.css'

/**
 * COMPONENTE MATERIAIS EDUCATIVOS (Biblioteca e Captura de Leads)
 * @description Renderiza a vitrine de e-books e gerencia o envio de leads.
 * @kayualins - Equipe de Projetos CompAct Jr.
 */

interface MaterialItem {
    _id: string;
    titulo: string;
    resumo: string;
    imagemUrl: string;
    pdfUrl: string;
}

interface MaterialsContentProps {
    materiaisData: MaterialItem[];
}

export default function MaterialsContent({ materiaisData }: MaterialsContentProps) {
    const [selectedItem, setSelectedItem] = useState<MaterialItem | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        whatsapp: '',
        empresa: '',
        cargo: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const forceDownload = async (url: string, filename: string) => {

        const formattedName = `${filename.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.pdf`;

        try {
            const response = await fetch(url);

            if (!response.ok) throw new Error("Erro na rede ao buscar o PDF");

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = formattedName;

            document.body.appendChild(a);
            a.click();

            // Limpa a memória do navegador para aquele link temporário
            window.URL.revokeObjectURL(blobUrl);
            document.body.removeChild(a);

        } catch (error) {
            console.error("Erro ao gerar Blob, usando fallback nativo:", error);

            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = `${url}?dl=${formattedName}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/materiais', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    material: selectedItem?.titulo
                }),
            })

            if (response.ok) {
                setFormData({ nome: '', email: '', whatsapp: '', empresa: '', cargo: '' })

                if (selectedItem?.pdfUrl) {
                    await forceDownload(selectedItem.pdfUrl, selectedItem.titulo);
                }

                setSelectedItem(null)
                alert("Material enviado com sucesso! O download começará em breve.")
            } else {
                throw new Error("Falha no envio")
            }
        } catch (error) {
            console.error("Erro ao enviar lead:", error)
            alert("Ocorreu um erro ao processar seu download. Tente novamente.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="materials-section">
            <div className="materials-hero">
                <motion.div className="materials-kicker">
                    Biblioteca de E-books
                </motion.div>

                <motion.h1 className="materials-title">
                    Acesse materiais gratuitos para <span className="materials-title-highlight">expandir</span> seu negócio.
                </motion.h1>
            </div>

            <div className="materials-grid">
                {materiaisData.map((item, index) => (
                    <motion.div
                        key={item._id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="materials-card group"
                    >
                        <div className="materials-card-img-wrapper">
                            <div className="materials-card-overlay" />
                            <img src={item.imagemUrl} alt={item.titulo} className="materials-card-img object-cover" />
                        </div>

                        <div className="materials-card-content">
                            <h3 className="materials-card-title">{item.titulo}</h3>
                            <p className="materials-card-desc">{item.resumo}</p>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedItem(item)}
                                className="materials-card-btn"
                            >
                                Fazer Download
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="modal-overlay-bg"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="modal-content"
                        >
                            <button onClick={() => setSelectedItem(null)} className="modal-close-btn">✕</button>

                            <h3 className="modal-title">Baixar Material</h3>
                            <p className="modal-subtitle">{selectedItem.titulo}</p>

                            <form onSubmit={handleSubmit} className="modal-form">
                                <div className="modal-input-group">
                                    <label className="modal-label">Nome completo</label>
                                    <input name="nome" value={formData.nome} onChange={handleChange} type="text" required className="modal-input" />
                                </div>

                                <div className="modal-input-group">
                                    <label className="modal-label">E-mail</label>
                                    <input name="email" value={formData.email} onChange={handleChange} type="email" required className="modal-input" />
                                </div>

                                <div className="modal-input-group">
                                    <label className="modal-label">WhatsApp</label>
                                    <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} type="tel" required className="modal-input" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="modal-input-group">
                                        <label className="modal-label">Empresa</label>
                                        <input name="empresa" value={formData.empresa} onChange={handleChange} type="text" required className="modal-input" />
                                    </div>
                                    <div className="modal-input-group">
                                        <label className="modal-label">Cargo</label>
                                        <input name="cargo" value={formData.cargo} onChange={handleChange} type="text" required className="modal-input" />
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="modal-submit-btn"
                                >
                                    {isSubmitting ? 'Enviando...' : 'Baixar Gratuitamente'}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}