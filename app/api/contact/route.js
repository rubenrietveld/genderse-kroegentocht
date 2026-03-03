import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: "Genderse Kroegentocht <onboarding@resend.dev>",
      to: "gendersekroegentocht@gmail.com",
      subject: `Nieuw contactformulier bericht van ${name}`,
      reply_to: email,
      html: `
        <h2>Nieuw bericht via de website</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Er ging iets mis." }, { status: 500 });
  }
}