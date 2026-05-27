import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializa o Resend com a chave do .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nome, empresa, email, telefone, mensagem } = body;

        // Validação simples dos campos obrigatórios do seu formulário
        if (!nome || !email || !telefone || !mensagem) {
            return NextResponse.json(
                { error: 'Preencha todos os campos obrigatórios.' },
                { status: 400 }
            );
        }

        // Dispara o e-mail
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>', // Deve ser este no Modo de Teste
            to: ['kauawho@gmail.com'], // O SEU E-MAIL AQUI
            subject: `Novo Lead do Site: ${nome} ${empresa ? `(${empresa})` : ''}`,
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

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Erro no Resend:', error);
        return NextResponse.json(
            { error: 'Erro ao enviar e-mail. Tente novamente mais tarde.' },
            { status: 500 }
        );
    }
}