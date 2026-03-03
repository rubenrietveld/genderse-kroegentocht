import { InstagramIcon, FacebookIcon } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | Genderse Kroegentocht",
  description:
    "Neem contact op met de organisatie van de Genderse Kroegentocht.",
};

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl text-primary mb-8">Contact</h1>

      <div className="space-y-6 text-lg">
        <p>
          Heb je vragen over een evenement, tickets of samenwerking?
          Neem gerust contact met ons op.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-8">
          <ContactForm />

          <div className="space-y-3 pt-4 border-t">
            <p className="font-semibold">📱 Volg ons:</p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://instagram.com/gendersekroegentocht"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition"
              >
                <InstagramIcon size={20} />
                Instagram
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition"
              >
                <FacebookIcon size={20} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}