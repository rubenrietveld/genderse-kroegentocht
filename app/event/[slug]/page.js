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
      <h1 className="text-4xl text-primary mb-6">
        {event.title}
      </h1>

      <p className="mb-2">📅 {event.date}</p>
      <p className="mb-2">⏰ {event.time}</p>
      <p className="mb-2">📍 {event.location}</p>
      <p className="mb-6 font-semibold">€{event.price} p.p.</p>

      <p className="mb-8">{event.longDescription}</p>

      {!event.soldOut ? (
        <a
          href={event.signupUrl}
          target="_blank"
          className="bg-accent text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Aanmelden
        </a>
      ) : (
        <p className="text-red-600 font-bold">
          Dit event is uitverkocht.
        </p>
      )}
    </main>
  )
}