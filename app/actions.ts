"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validação básica de segurança
  if (!name || !email || !message) {
    return { success: false, error: "Preencha todos os campos." };
  }

  try {
    await resend.emails.send({
      // 1. Se não tiver domínio próprio verificado, use: "onboarding@resend.dev"
      // 2. Se tiver domínio (ex: contato@aceagrimensura.com.br), use ele aqui
      from: "Ace Site <onboarding@resend.dev>", 
      to: "aislancesarag@gmail.com",
      subject: `Novo contato de ${name}`,
      replyTo: email, // Isso permite que, ao clicar em "Responder", o e-mail vá para o cliente
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h1>Novo Contato do Site</h1>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <hr />
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return { success: false, error: "Falha ao enviar a mensagem. Tente novamente." };
  }
}