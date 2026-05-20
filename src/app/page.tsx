import { Metadata } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Indicators from '../components/Indicators'

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
    title: 'Desenvolvimento de Software e Sistemas Web em Santa Maria',
    description: 'A CompAct Jr. oferece soluções em TI, sites profissionais e softwares sob medida. Aumente a eficiência do seu negócio com a melhor Empresa Júnior de TI.',
    keywords: ['Empresa Júnior TI', 'Desenvolvimento Web', 'Santa Maria', 'Sistemas sob medida', 'Aplicativos', 'CompAct Jr'],
    openGraph: {
        title: 'CompAct Jr. | Soluções em TI que Transformam Negócios',
        description: 'Desenvolvimento profissional de softwares e sites com a qualidade de uma Empresa Júnior de excelência.',
        url: 'https://compactjr.com.br',
        siteName: 'CompAct Jr.',
        images: [
            {
                url: '/og-image.jpg', // A equipe de design deverá criar esta imagem de 1200x630px depois
                width: 1200,
                height: 630,
                alt: 'Capa de apresentação gráfica da CompAct Jr.',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
}

export default function Home() {
    return (
        <main className="relative bg-preto min-h-screen">

            {/* CONTAINER DE LUZES (ISOLAMENTO)
                A classe inset-0 faz essa div ter o tamanho exato da página.
                O overflow-hidden atua como uma "tesoura", cortando qualquer luz que tente
                vazar da tela, resolvendo de vez o problema de barras de rolagem fantasmas. */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="glow-purple top-[-10%] left-[-20%]"></div>
                <div className="glow-blue top-[20%] right-[-10%]"></div>
                <div className="glow-purple top-[80%] left-[-15%] opacity-30"></div>
            </div>

            <div className="relative z-10">
                <Header />
                <Hero />
                <Indicators />

                <div className="h-[50vh]"></div>
            </div>
        </main>
    )
}