import type { Metadata } from "next";
import { Carrois_Gothic, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

/**
 * EXPLICAÇÃO TÉCNICA (Capacitação da Equipe):
 * Este é o Layout Raiz (RootLayout). Tudo o que for inserido aqui será replicado em
 * TODAS as páginas do site. Este arquivo deve ser usado para:
 * 1. Otimização e injeção de fontes globais.
 * 2. Metadados padrão (fallback), caso alguma página esqueça de declarar os seus.
 * 3. Scripts globais de rastreamento no futuro (ex: Google Analytics, Pixel do Facebook).
 */

// Fonte Principal do Manual [Pág. 11]
const carrois = Carrois_Gothic({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-carrois",
});

// Fonte para Títulos e Impacto [Pág. 11]
const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

// Fonte Auxiliar Moderna [Pág. 11]
const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

// METADADOS GLOBAIS (Fallback)
// O objeto template garante que todas as páginas tenham o nome da EJ no final da aba.
export const metadata: Metadata = {
    title: {
        template: '%s | CompAct Jr.',
        default: 'CompAct Jr. | Soluções em TI',
    },
    description: "A primeira Empresa Júnior de TI do Rio Grande do Sul. Especialistas em desenvolvimento de software e sistemas web.",
    metadataBase: new URL('https://project-nextjs-one-rose.vercel.app/'), // Substituir pelo domínio oficial quando em produção
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br" className="scroll-smooth">
        <body
            className={`
                ${carrois.variable} 
                ${montserrat.variable} 
                ${poppins.variable} 
                antialiased bg-preto text-branco overflow-x-hidden
            `}
        >
        {children}
        </body>
        </html>
    );
}