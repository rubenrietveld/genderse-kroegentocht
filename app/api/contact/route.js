import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Mail naar jullie
    await resend.emails.send({
      from: "Genderse Kroegentocht <info@gendersekroegentocht.nl>",
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

    // Bevestiging naar verzender
    await resend.emails.send({
      from: "Genderse Kroegentocht <info@gendersekroegentocht.nl>",
      to: email,
      subject: "We hebben je bericht ontvangen 🍻",
      html: `
        <h2>Bedankt voor je bericht, ${name}!</h2>
        <p>We hebben je bericht goed ontvangen en nemen zo snel mogelijk contact met je op.</p>
        <p>Proost! 🍻</p>
        <p><strong>Genderse Kroegentocht</strong></p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Er ging iets mis." }, { status: 500 });
  }
}