"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: `${email}`, // No início use este e-mail de teste
      to: "aislan199@gmail.com",
      subject: `Novo contato de ${name}`,
      replyTo: email,
      html: `
        <h1>Novo Contato do Site</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}