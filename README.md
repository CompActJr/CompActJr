# CompAct Jr. - Site Institucional e Plataforma Corporativa

Projeto oficial do ecossistema web da CompAct Jr., desenvolvido para atuar como o principal canal de conversão, vitrine institucional e portal de conteúdos da Empresa Júnior. A aplicação foi construída com foco em altíssima performance, SEO técnico avançado, integração com Headless CMS e microinterações de interface fluidas.

**Links Oficiais:**
*   **Ambiente de Produção:** [https://www.compactjr.com](https://www.compactjr.com/)
*   **Repositório Oficial:** [GitHub - CompActJr](https://github.com/CompActJr/CompActJr)

---

## 1. Stack Tecnológico
A base tecnológica foi escolhida visando escalabilidade, autonomia de edição para a equipe de Marketing e modernidade no ecossistema web:

*   **Framework:** Next.js (App Router)
*   **Biblioteca de UI:** React
*   **Linguagem:** TypeScript
*   **Gerenciamento de Conteúdo:** Sanity CMS (Embedded Studio) e GROQ
*   **Estilização:** Tailwind CSS v4 (Híbrido com CSS Modular)
*   **Animações:** Framer Motion
*   **Back-end e Transacional:** Next.js Route Handlers e Resend SDK

---

## 2. Arquitetura e Padrões de Projeto

### 2.1. Integração com Headless CMS (Sanity)
O projeto utiliza a arquitetura de **Studio Embutido**, hospedando o painel administrativo (`/CompStudio`) e o site no mesmo servidor.
* A comunicação de dados é feita através de consultas **GROQ** injetadas diretamente em Server Components.
* Utiliza-se `Promise.all` para chamadas paralelas (ex: carregar Histórico e Equipe simultaneamente), garantindo que a conexão com o banco não crie gargalos de carregamento (TTFB).

### 2.2. Server Components vs Client Components
A arquitetura respeita o fluxo de renderização do Next.js App Router:
*   As rotas de página (`page.tsx`) atuam estritamente como *Server Components*. Isso garante a pré-renderização no servidor e o ranqueamento de ponta em motores de busca.
*   A interatividade (Framer Motion, modais, filtros) foi delegada aos componentes filhos (`src/components/`), que utilizam a diretiva `'use client'`.

### 2.3. Padronização de Estilos (Clean JSX)
Para evitar a poluição visual de dezenas de classes utilitárias no JSX, adotou-se o isolamento de CSS:
*   Cada componente complexo possui seu próprio arquivo `.css` pareado.
*   As classes utilitárias são agrupadas utilizando a diretiva `@apply` do Tailwind.

### 2.4. Resolução de Conflitos de Viewport (Scroll Horizontal)
Foi adotada uma solução estrutural no container `<main>` para sanar o vazamento de animações em dispositivos móveis e navegadores Safari:
*   Substituição de unidades relativas de tela (`w-screen`) por contenção estrita (`w-full max-w-[100vw]`).
*   Utilização de `overflow-x-clip` para ocultar o vazamento horizontal sem criar um novo contexto de formatação, preservando a propriedade `position: sticky` do componente Watermark.

---

## 3. Módulos Dinâmicos e Componentes (Driven by CMS)
Abaixo, o registro técnico das soluções implementadas com integração ao banco de dados:

*   **Blog & Insights:** Motor de publicações com roteamento paramétrico (`[slug]/page.tsx`). O conteúdo é escrito no CMS em Rich Text e traduzido para marcação React segura (livre de XSS) através do `@portabletext/react`, injetando tipografia do Tailwind nativamente.
*   **Materiais Educativos (Captura de Leads):** Arquitetura restrita. O PDF hospedado no Sanity nunca é exposto no DOM. O front-end envia os dados do lead para a `/api/materiais` e, apenas após o sucesso (HTTP 200), converte o arquivo via **Blob JavaScript**, forçando o download silencioso na máquina do usuário.
*   **Portfólio (Cases de Sucesso):** Galeria interativa (Bento Grid) com filtragem assíncrona. Utiliza `next/image` com *Remote Patterns* configurados no `next.config.mjs` para otimização de imagens vindas da CDN do Sanity.
*   **Team (Liderança):** Motor de inteligência de estado gerido no servidor. O Next.js recebe o array bruto do banco, agrupa os membros hierarquicamente por Diretoria e exclui diretorias vazias do DOM antes de enviar o HTML para o navegador.
*   **History (Linha do Tempo):** Régua cronológica matemática. A linha do tempo lê os anos mais altos e baixos do banco de dados e utiliza `Math.min` / `Math.max` para se dimensionar elasticamente de forma automática.
*   **Clientes e Parceiros (Social Proof):** Carrosséis horizontais de loop infinito unificados em um único Schema de banco de dados (`clienteParceiro`). O servidor separa o array matematicamente (via chave seletora) para alimentar os carrosséis adequados na interface.
*   **Links Bio (Árvore de Links):** Página mobile-first gerenciável pelo marketing, com proteção SEO (`noindex`) nativa para evitar canibalização das buscas orgânicas da Home.

---

## 4. Otimização Avançada para Motores de Busca (SEO)
A infraestrutura técnica foi preparada para indexação orgânica de alto desempenho:

*   **SEO Dinâmico (generateMetadata):** As rotas de blog interceptam os dados do banco antes da tela existir, injetando *OpenGraph Tags* perfeitas (Foto de capa, Resumo, Autor e Título do artigo) no `<head>` para previews ricos em redes sociais como WhatsApp e LinkedIn.
*   **Sitemap Híbrido Automático:** O arquivo `sitemap.ts` varre as rotas estáticas institucionais e faz uma requisição paralela ao Sanity, gerando dinamicamente as URLs e as datas de modificação (`_updatedAt`) de todos os artigos publicados para o Googlebot.
*   **Robots.txt:** Configurado com liberação de mapeamento global, mas com políticas ativas de `Disallow` nas rotas de sistema (`/api/`) e no painel de administração (`/CompStudio`) por motivos de segurança e integridade de indexação.
*   **Metadados Base:** O RootLayout possui o domínio oficial ancorado na propriedade `metadataBase`, garantindo a validação de URLs relativas do Next.js.

---

## 5. Guia de Instalação Local
Para clonar e executar o projeto em ambiente de desenvolvimento:

1. **Clone o repositório:**
```bash
git clone [https://github.com/CompActJr/CompActJr.git](https://github.com/CompActJr/CompActJr.git)
cd CompActJr
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configuração de Variáveis de Ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto para conectar ao banco de dados e habilitar o disparo de e-mails:
```text
# Disparo Transacional
RESEND_API_KEY="re_chave_de_teste_aqui"

# Headless CMS (Sanity)
NEXT_PUBLIC_SANITY_PROJECT_ID="id_do_projeto_aqui"
NEXT_PUBLIC_SANITY_DATASET="production"
```

4. **Inicie o servidor local:**
```bash
npm run dev
```
Acesse `http://localhost:3000` (Visão do Cliente) ou `http://localhost:3000/CompStudio` (Painel Administrativo) no seu navegador.

