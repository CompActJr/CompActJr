import { NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * ROTA DE API: ENVIO DE E-MAIL (BACK-END)
 * @description Rota responsável por receber os dados do formulário de contato do front-end
 * e processar o envio do e-mail transacional utilizando o SDK do Resend.
 *
 * Decisões de Arquitetura:
 * - Utiliza o padrão Route Handlers do Next.js (App Router) para criar um endpoint seguro.
 * - A chave de API do Resend é injetada via Variáveis de Ambiente (.env) para garantir a
 *   segurança e integridade das credenciais (evitando exposição no client-side).
 *
 * @kayualins Equipe de Projetos CompAct Jr.
 */

// Inicialização do client do Resend isolada fora do handler da rota.
// A chave RESEND_API_KEY deve estar configurada obrigatoriamente na Vercel e no .env.local.
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_bypass_for_build');
/**
 * Método POST
 * @param {Request} request - O objeto da requisição HTTP recebida do front-end.
 * @returns {NextResponse} Retorna um JSON com status HTTP 200 (Sucesso) ou códigos de erro padrão.
 */
export async function POST(request: Request) {
    try {
        // Extrai e converte o corpo da requisição (payload) do formato textual para JSON legível
        const body = await request.json();
        const { nome, empresa, email, telefone, mensagem } = body;

        // Validação de Integridade de Dados:
        // Garante que a requisição não processe envios maliciosos ou parciais.
        // O campo 'empresa' não está na verificação pois é de preenchimento opcional no front-end.
        if (!nome || !email || !telefone || !mensagem) {
            return NextResponse.json(
                { error: 'Parâmetros insuficientes. Preencha todos os campos obrigatórios.' },
                { status: 400 } // HTTP 400: Bad Request
            );
        }

        // Configuração e Disparo via SDK do Resend
        const data = await resend.emails.send({

            // Em Modo de Teste (sem domínio verificado na plataforma), o remetente deve ser o padrão imposto pela API.
            from: 'Acme <onboarding@resend.dev>',

            // Endereço de destino previamente autorizado no painel de controle do Resend.
            to: ['kauawho@gmail.com'],

            // Assunto dinâmico: Exibe o nome da empresa entre parênteses apenas se o campo foi submetido.
            subject: `Novo Lead do Site: ${nome} ${empresa ? `(${empresa})` : ''}`,

            // Estrutura visual da mensagem injetada em formato HTML.
            // Utiliza-se 'max-width' e estilo inline para garantir a compatibilidade e formatação
            // nativa em clientes de e-mail restritos (como Outlook e Gmail).
            html: `
                <div style="font-family: sans-serif; color: #333; line-height: 1.6; max-w: 600px; margin: 0 auto;">
                    <h2 style="color: #0047FF;">Novo Lead - CompAct Jr</h2>
                    <p>Você recebeu uma nova mensagem pelo site.</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Nome:</strong> ${nome}</p>
                    <p><strong>Empresa:</strong> ${empresa || 'Não informada'}</p>
                    <p><strong>E-mail:</strong> ${email}</p>
                    <p><strong>Telefone/WhatsApp:</strong> ${telefone}</p>
                    <br />
                    <p><strong>Mensagem:</strong></p>
                    <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
                        ${mensagem}
                    </p>
                </div>
            `,
        });

        // Retorno da resposta bem-sucedida para o client-side (aciona a tela de sucesso do formulário)
        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (error) {
        // Tratamento de Exceções:
        // Captura falhas de comunicação com a API externa para evitar o crash total da aplicação.
        console.error('Erro na comunicação com o provedor Resend:', error);

        return NextResponse.json(
            { error: 'Erro interno do servidor ao tentar processar o envio de e-mail.' },
            { status: 500 } // HTTP 500: Internal Server Error
        );
    }
}