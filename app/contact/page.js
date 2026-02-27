export const metadata = {
  title: "Contact | Genderse Kroegentocht",
  description:
    "Neem contact op met de organisatie van de Genderse Kroegentocht.",
}

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl text-primary mb-8">
        Contact
      </h1>

      <div className="space-y-6 text-lg">
        <p>
          Heb je vragen over een evenement, tickets of samenwerking?
          Neem gerust contact met ons op.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:gendersekroegentocht@gmail.com"
              className="text-accent underline"
            >
              gendersekroegentocht@gmail.com
            </a>
          </p>

          <p>
            📱 Instagram:{" "}
            <a
              href="https://instagram.com/gendersekroegentocht"
              target="_blank"
              className="text-accent underline"
            >
              @gendersekroegentocht
            </a>
          </p>

          <p>
            📍 Locatie evenementen:
            Dorpshuis Genderen
          </p>
        </div>
      </div>
    </main>
  )
}