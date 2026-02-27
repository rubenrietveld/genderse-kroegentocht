import Link from "next/link"

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-2xl text-primary mb-2">
        {event.title}
      </h3>

      <p className="text-sm mb-1">📅 {event.date}</p>
      <p className="text-sm mb-1">📍 {event.location}</p>
      <p className="text-sm mb-3 font-semibold">
        €{event.price} p.p.
      </p>

      {event.soldOut && (
        <p className="text-red-600 font-bold">UITVERKOCHT</p>
      )}

      <Link
        href={`/event/${event.slug}`}
        className="inline-block mt-4 bg-accent text-white px-4 py-2 rounded-full hover:opacity-90 transition"
      >
        Bekijk event
      </Link>
    </div>
  )
}