import Header from '../../components/Header'
import BackgroundGlow from '../../components/BackgroundGlow'
import MaterialsContent from '../../components/MaterialsContent'
import Footer from '../../components/Footer'
import { client } from '../../sanity/lib/client'

export const metadata = {
    title: 'Materiais Educativos',
    description: 'Acesse e-books e materiais gratuitos para expandir e melhorar seu negócio, desenvolvidos pela CompAct Jr.',
}

const queryMateriais = `*[_type == "materialEducativo" && ativo == true] | order(_createdAt desc) {
  _id,
  titulo,
  resumo,
  "imagemUrl": imagem.asset->url,
  "pdfUrl": arquivoPdf.asset->url
}`

export const dynamic = 'force-dynamic'

export default async function MateriaisPage() {
    const materiaisDoSanity = await client.fetch(queryMateriais)

    return (
        <main className="relative min-h-screen bg-preto overflow-x-clip text-branco selection:bg-secundaria selection:text-branco">
            <Header />
            <BackgroundGlow />

            <MaterialsContent materiaisData={materiaisDoSanity} />

            <Footer />
        </main>
    )
}