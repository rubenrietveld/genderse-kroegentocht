import events from "@/data/events.json"
import EventCard from "@/components/EventCard"

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative text-white">

        {/* Achtergrond */}
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-primary/80" />

        <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
            Genderse Kroegentocht
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Gezellige evenementen in Genderen.
            Biercantus, kroegentocht en samen proosten. 🍻
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#events"
              className="bg-accent px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Bekijk events
            </a>

            <a
              href="/over-ons"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-primary transition"
            >
              Over ons
            </a>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl text-primary mb-10 text-center">
          Aankomende events
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>

    </main>
  )
}