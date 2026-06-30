import { NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * ROTA DE API: CAPTURA DE LEADS (BACK-END)
 * @description Processa o formulário de download de materiais ricos e envia os dados
 * para a equipe de projetos/comercial via e-mail transacional.
 * @kayualins Equipe de Projetos CompAct Jr.
 */

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_bypass_for_build');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nome, email, whatsapp, empresa, cargo, material } = body;

        // Validação de Integridade: Todos os campos são necessários para nutrição de lead
        if (!nome || !email || !whatsapp || !empresa || !cargo) {
            return NextResponse.json(
                { error: 'Dados incompletos. Por favor, preencha todos os campos.' },
                { status: 400 }
            );
        }

        // Disparo via SDK do Resend
        const data = await resend.emails.send({
            // Remetente oficial (domínio configurado no painel)
            from: 'Acme <onboarding@resend.dev>',
            // Destino (Usa variável de ambiente para ser flexível sem mudar código)
            to: [process.env.DESTINATION_EMAIL || 'kauawho@gmail.com'],

            subject: `Novo Lead: E-book ${material || 'Material Educativo'}`,

            html: `
                <div style="font-family: sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #00A7DB;">Nova Conversão de Lead - CompAct Jr</h2>
                    <p>Um visitante acaba de baixar um material educativo pelo site.</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Material:</strong> ${material || 'Não especificado'}</p>
                    <p><strong>Nome:</strong> ${nome}</p>
                    <p><strong>Cargo:</strong> ${cargo}</p>
                    <p><strong>Empresa:</strong> ${empresa}</p>
                    <p><strong>E-mail:</strong> ${email}</p>
                    <p><strong>WhatsApp:</strong> ${whatsapp}</p>
                    <br />
                    <p style="color: #666; font-size: 0.9em;">Este é um lead qualificado gerado via Landing Page de Materiais.</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (error) {
        console.error('Erro ao processar lead:', error);
        return NextResponse.json(
            { error: 'Erro interno ao processar lead.' },
            { status: 500 }
        );
    }
}