import { NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * ROTA DE API: ENVIO DE E-MAIL (BACK-END)
 * @description Endpoint seguro (Route Handler) para processar o formulário de contato via Resend.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

// FORÇA O NEXT.JS A NÃO PRÉ-RENDERIZAR ESSA ROTA NO BUILD (Evita falhas de compilação)
export const dynamic = 'force-dynamic';

// Inicialização com chave fantasma para o bypass do 'npm run build'
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_bypass_for_build');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nome, empresa, email, telefone, mensagem } = body;

        // Validação de Integridade
        if (!nome || !email || !telefone || !mensagem) {
            return NextResponse.json(
                { error: 'Parâmetros insuficientes. Preencha todos os campos obrigatórios.' },
                { status: 400 }
            );
        }

        // Disparo via SDK
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['kauawho@gmail.com'], // O e-mail de destino configurado no painel do Resend
            subject: `Novo Lead do Site: ${nome} ${empresa ? `(${empresa})` : ''}`,
            html: `
                <div style="font-family: sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
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

        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (error) {
        console.error('Erro na comunicação com o provedor Resend:', error);
        return NextResponse.json(
            { error: 'Erro interno do servidor ao processar o envio.' },
            { status: 500 }
        );
    }
}