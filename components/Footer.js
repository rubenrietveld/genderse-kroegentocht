import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-heading">
          Genderse Kroegentocht
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/over-ons">Over ons</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}