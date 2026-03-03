import Link from "next/link"

import { InstagramIcon, FacebookIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        <div className="flex gap-4">
          <a
            href="https://instagram.com/genderse_kroegentocht"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <InstagramIcon size={30} />
          </a>

          <a
            href="https://facebook.com/profile.php?id=61578227144365"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <FacebookIcon size={30} />
          </a>
        </div>

        <div className="text-xs md:text-sm">
          © {new Date().getFullYear()} Genderse Kroegentocht
        </div>

      </div>
    </footer>
  )
}