CompAct Jr. - Landing Page Corporativa
Projeto oficial da nova Landing Page da CompAct Jr., desenvolvido para atuar como o principal canal de conversão e vitrine institucional da Empresa Júnior. A aplicação foi construída com foco em altíssima performance, SEO técnico avançado e microinterações de interface fluidas.

Links Oficiais:

Ambiente de Produção (Deploy): Vercel - CompAct Jr.

Repositório Oficial: GitHub - ProjectNextjs

1. Stack Tecnológico
   A base tecnológica foi escolhida visando escalabilidade e modernidade no ecossistema web:

Framework: Next.js (App Router)

Biblioteca de UI: React

Linguagem: TypeScript

Estilização: Tailwind CSS v4 (Híbrido com CSS Modular)

Animações: Framer Motion

2. Arquitetura e Padrões de Projeto
   2.1. Server Components vs Client Components
   A arquitetura respeita o fluxo de renderização do Next.js App Router:

Os arquivos page.tsx e layout.tsx são mantidos estritamente como Server Components. Isso garante a pré-renderização no servidor, essencial para a injeção do objeto metadata e sucesso no ranqueamento de SEO (Search Engine Optimization).

A interatividade (Framer Motion, hooks de estado) foi delegada aos componentes filhos localizados na pasta src/components/, os quais utilizam a diretiva 'use client'.

2.2. Padronização de Estilos (Clean JSX)
Para evitar a poluição visual de dezenas de classes utilitárias no JSX, adotou-se o isolamento de CSS:

Cada componente possui seu próprio arquivo .css pareado (ex: Team.tsx e Team.css).

As classes utilitárias são agrupadas utilizando a diretiva @apply do Tailwind.

A integração com o Tailwind v4 é feita via @reference "../app/globals.css" no topo de cada arquivo de estilo.

2.3. Resolução de Conflitos de Viewport (Scroll Horizontal)
Foi adotada uma solução estrutural no container <main> para sanar o vazamento de animações em dispositivos móveis e navegadores Safari:

Substituição de unidades relativas de tela (w-screen) por contenção estrita (w-full max-w-[100vw]).

Utilização de overflow-x-clip em vez de overflow-hidden. Esta decisão foi crucial para ocultar o vazamento horizontal sem criar um novo contexto de formatação, preservando o funcionamento da propriedade position: sticky utilizada no componente Watermark.

Ocultação das barras de rolagem nativas nos principais navegadores injetada na camada base do Tailwind.

3. Funcionalidades e Componentes Desenvolvidos
   Abaixo, o registro técnico de todas as seções e soluções implementadas:

BackgroundGlow: Componente de câmera fixa (fixed viewport) que utiliza Framer Motion para gerar orbes luminosos dinâmicos. A fixação previne "buracos negros" durante o scroll da página.

Watermark (Single Source of Truth): Componente isolado com position: sticky aplicado como fundo em múltiplas seções, garantindo padronização e facilidade de manutenção (DRY - Don't Repeat Yourself).

Services: Layout orgânico em zigue-zague com aplicação de rotação 3D (perspective: 1200px e rotateY/X) via Framer Motion no estado de hover.

Pillars: Estrutura em escadaria horizontal (staircase grid) alcançada através de margens assimétricas no desktop, empilhando de forma responsiva no mobile.

Values: Layout flexível (4 itens no topo, 2 centralizados na base) utilizando flex-wrap e pseudo-classes. Implementação de overlay em glassmorphism e revelação de texto via utilitário .group do Tailwind.

Portfolio: Layout assimétrico em Mosaico (Bento Grid) focado na exibição de cases reais. Utiliza grid-area para destacar elementos específicos e revela informações do projeto através de efeitos de opacidade no hover.

History: Carrossel interativo baseado em cálculo de índices (Index-based Carousel). A posição (eixo X), escala e desfoque lateral (blur) de cada cartão são calculados matematicamente pela distância (offset) em relação ao índice ativo. A régua cronológica utiliza o layoutId do Framer Motion para transições fluidas do indicador.

Team: Aplicação direta de Regras de Negócio (RN). O mapeamento de dados condiciona as bordas e cores institucionais (Azul para Diretores, Branco para Membros). Inclui barra de redes sociais animada com recorte geométrico (clip-path).

Contact: Arquitetura limpa com formulário em glassmorphism ao lado de um mapa dedicado e interativo (com filtros nativos aplicados via CSS para simular Dark Mode). Inclui controle de estado de sucesso (Feedback State) através do <AnimatePresence>.

Footer: Mapa do site semântico com links âncora para todas as seções. Ocultação inteligente de blocos não essenciais e centralização automática em dispositivos móveis.

FloatingButton (FAB): Botão de ação direta (WhatsApp) com animação contínua de pulso. Um listener de janela (window.addEventListener) controla a sua renderização, garantindo que só fique visível após 400px de rolagem (preservando a introdução visual da Hero Section).

4. Otimização para Motores de Busca (SEO)
   A infraestrutura técnica foi preparada para indexação orgânica máxima:

Robots & Sitemap: Geração dinâmica configurada através dos arquivos TypeScript (src/app/robots.ts e src/app/sitemap.ts), lidos pelo Next.js em tempo de execução.

Open Graph: Preparação do ambiente para injeção automática de metadados para redes sociais através do arquivo opengraph-image.png.

Semântica e Acessibilidade: Emprego rigoroso de tags HTML5 (<section>, <header>, <nav>) e aplicação de atributos aria-label em links e botões puramente iconográficos.

5. Guia de Instalação Local
   Para clonar e executar o projeto em ambiente de desenvolvimento:

Clone o repositório:

Bash
git clone https://github.com/kayualins/ProjectNextjs.git
cd ProjectNextjs
Instale as dependências contidas no package.json:

Bash
npm install
Inicie o servidor local:

Bash
npm run dev
Acesse http://localhost:3000 no seu navegador.

6. Próximos Passos (Backlog)
   Tarefas recomendadas para futuras iterações da aplicação:

Integração de E-mail: Conectar a submissão do <Contact /> a um serviço de back-end (ex: Resend, Formspree) ou API própria para captação real de leads.

Substituição de Ativos Visuais: Inserir as fotografias finais do time e dos projetos (.webp) e alterar os textos de placeholder pelo copywriting oficial.

Gerenciamento de Conteúdo: Avaliar a futura implementação de um Headless CMS para permitir atualizações de portfólio e membros da equipe por usuários não-técnicos.