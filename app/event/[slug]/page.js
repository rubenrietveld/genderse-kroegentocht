import events from "@/data/events.json"
import { notFound } from "next/navigation"

// Belangrijk in Next 16
export const dynamicParams = true

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }))
}

export default async function EventPage({ params }) {
  const { slug } = await params

  const event = events.find((e) => e.slug === slug)

  if (!event) return notFound()

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl text-primary mb-6">
          {event.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8 text-lg">

          <p>📅 {event.date}</p>
          <p>⏰ {event.time}</p>
          <p>📍 {event.location}</p>
          <p className="font-semibold text-accent">
            €{event.price} p.p.
          </p>

        </div>

        <p className="mb-8 leading-relaxed">
          {event.longDescription}
        </p>

        {!event.soldOut ? (
          <a
            href={event.signupUrl}
            target="_blank"
            className="bg-accent text-white px-8 py-4 rounded-full hover:opacity-90 transition inline-block"
          >
            Aanmelden
          </a>
        ) : (
          <p className="text-red-600 font-bold text-lg">
            Dit event is uitverkocht.
          </p>
        )}

      </div>
    </main>
  )
}