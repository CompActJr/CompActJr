// src/app/blog/page.tsx

/**
 * PÁGINA: BLOG & INSIGHTS
 * @description Rota de conteúdo técnico, estudos de caso e artigos de opinião.
 * Configurada como Server Component puro para indexação de SEO de cauda longa.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

import Header from '../../components/Header'
import BackgroundGlow from '../../components/BackgroundGlow'
import Watermark from '../../components/Watermark'
import Footer from '../../components/Footer'
import BlogShowcase from '../../components/BlogShowcase'
import { client } from '../../sanity/lib/client'

export const metadata = {
    title: 'Blog & Artigos de Tecnologia | CompAct Jr.',
    description: 'Insights de engenharia de software, Inteligência Artificial, guias de conversão e os bastidores do desenvolvimento dos nossos sistemas.',
}

const queryBlog = `*[_type == "artigoBlog" && ativo == true] | order(_createdAt desc) {
  _id,
  "slug": slug.current,
  title,
  excerpt,
  category,
  readTime,
  date,
  author,
  "image": image.asset->url,
  featured
}`

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
    const artigosDoSanity = await client.fetch(queryBlog)

    return (
        <main className="relative min-h-screen bg-preto overflow-x-clip text-branco selection:bg-secundaria selection:text-branco">
            <Header />
            <BackgroundGlow />
            <Watermark />

            <div className="relative z-10 pb-32">
                <BlogShowcase articlesData={artigosDoSanity} />
            </div>

            <Footer />
        </main>
    )
}