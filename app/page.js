import events from "@/data/events.json"
import EventCard from "@/components/EventCard"

export default function Home() {
  return (
    <main>
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl text-primary mb-6">
          Genderse Kroegentocht organiseert events in Genderen
        </h1>

        <p className="mb-8 text-lg">
          Gezelligheid, bier en samen feestvieren 🍻
        </p>

        <a
          href="#events"
          className="bg-accent text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Bekijk events
        </a>
      </section>

      <section id="events" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl text-primary mb-8">
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