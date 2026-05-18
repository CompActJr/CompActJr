import type { Metadata } from "next";
import { Carrois_Gothic, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

/**
 * 💡 EXPLICAÇÃO TÉCNICA (Capacitação):
 * O Next.js otimiza as fontes baixando-as no momento do build.
 * Usamos 'variable' para criar nomes que o CSS entenda (ex: var(--font-carrois)).
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

export const metadata: Metadata = {
    /* 🎨 ÁREA DO MARKETING: Título e Descrição que aparecem no Google */
    title: "CompAct Jr. | Soluções em TI",
    description: "A primeira Empresa Júnior de TI do Rio Grande do Sul. Especialistas em desenvolvimento de software e sistemas web.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
        <body
            className={`
          ${carrois.variable} 
          ${montserrat.variable} 
          ${poppins.variable} 
          antialiased bg-preto text-branco
        `}
        >
        {/* O 'children' é onde o Next.js renderiza o conteúdo da page.tsx */}
        {children}
        </body>
        </html>
    );
}