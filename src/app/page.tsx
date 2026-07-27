import { Metadata } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Apoiadores from '../components/Apoiadores'
import Indicadores from '../components/Indicadores'
import BackgroundGlow from '../components/BackgroundGlow'
import About from '../components/About'
import Clientes from "@/src/components/Clientes";
import Services from "@/src/components/Services";
import SectionsWithWatermark from "@/src/components/SectionsWithWatermark";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import FloatingButton from "@/src/components/FloatingButton";
import Portfolio from "@/src/components/Portfolio";
import MaterialsTrailer from "@/src/components/MaterialsTrailer";
import { client } from '../sanity/lib/client'

/**
 * EXPLICAÇÃO TÉCNICA (Capacitação da Equipe):
 * Note a ausência da diretiva 'use client' no topo deste arquivo.
 * Por padrão, rotas no Next.js App Router são Server Components. Isso é OBRIGATÓRIO
 * para podermos exportar o objeto 'metadata' e permitir que o SEO e o Tráfego Pago funcionem.
 * A interatividade (JavaScript no navegador) está encapsulada e delegada apenas para
 * os componentes filhos (Header e Hero), que possuem 'use client' em seus respectivos arquivos.
 */

// METADADOS ESPECÍFICOS DA HOMEPAGE
// Focado inteiramente em SEO, indexação orgânica e conversão para Tráfego Pago.
export const metadata: Metadata = {
    title: 'Compact Jr.',
    description: 'A CompAct Jr. oferece soluções em TI, sites profissionais e softwares sob medida. Aumente a eficiência do seu negócio com a melhor Empresa Júnior de TI.',
    keywords: ['Empresa Júnior TI', 'Desenvolvimento Web', 'Santa Maria', 'Sistemas sob medida', 'Aplicativos', 'CompAct Jr', 'CompAct', 'Compact', 'Compact jr'],
    openGraph: {
        title: 'CompAct Jr. | Soluções em TI que Transformam Negócios',
        description: 'Desenvolvimento profissional de softwares e sites com a qualidade de uma Empresa Júnior de excelência.',
        url: '/', // Herdado perfeitamente da branch de SEO!
        siteName: 'CompAct Jr.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Capa de apresentação gráfica da CompAct Jr.',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
}

const queryTeaser = `*[_type == "projetoPortfolio" && ativo == true] | order(ordem asc)[0...3] {
  _id,
  client,
  title,
  category,
  "image": image.asset->url
}`

const queryParceirosClientes = `*[_type == "clienteParceiro" && ativo == true] {
  _id,
  name,
  tipo,
  url,
  "src": logo.asset->url
}`

export const dynamic = 'force-dynamic'

export default async function Home() {
    const [teaserData, parceirosClientesData] = await Promise.all([
        client.fetch(queryTeaser),
        client.fetch(queryParceirosClientes)
    ])

    const apoiadoresData = parceirosClientesData.filter((item: any) => item.tipo === 'parceiro')
    const clientesData = parceirosClientesData.filter((item: any) => item.tipo === 'cliente')

    return (
        <main className="relative bg-preto min-h-screen w-full max-w-[100vw] overflow-x-clip flex flex-col">
            <BackgroundGlow />
            <div className="relative z-10 w-full">
                <Header />
                <Hero />
                {/* Dados dinâmicos injetados com sucesso */}
                <Apoiadores apoiadoresData={apoiadoresData} />
                <Indicadores />
                <About />
                <Clientes clientesData={clientesData} />

                <SectionsWithWatermark>
                    <Services />
                </SectionsWithWatermark>

                {/* os 3 primeiros projetos aqui */}
                <Portfolio teaserProjectsData={teaserData} />

                <MaterialsTrailer />
                <Contact />
                <Footer />
            </div>
            <FloatingButton />
        </main>
    )
}