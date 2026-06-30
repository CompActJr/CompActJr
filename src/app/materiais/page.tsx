import Header from '../../components/Header'
import BackgroundGlow from '../../components/BackgroundGlow'
import MaterialsContent from '../../components/MaterialsContent'
import Footer from '../../components/Footer'

export const metadata = {
    title: 'Materiais Educativos',
    description: 'Acesse e-books e materiais gratuitos para expandir e melhorar seu negócio, desenvolvidos pela CompAct Jr.',
}

export default function MateriaisPage() {
    return (
        <main className="relative min-h-screen bg-preto overflow-x-clip text-branco selection:bg-secundaria selection:text-branco">
            <Header />
            <BackgroundGlow />

            <MaterialsContent />

            <Footer />
        </main>
    )
}