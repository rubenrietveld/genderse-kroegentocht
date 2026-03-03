"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Verzenden...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Bericht succesvol verzonden! 🍻");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Er ging iets mis. Probeer opnieuw.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Naam"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        className="w-full border rounded-lg p-3"
      />

      <textarea
        placeholder="Bericht"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
        rows={5}
        className="w-full border rounded-lg p-3"
      />

      <button
        type="submit"
        className="bg-accent text-white px-6 py-3 rounded-full hover:opacity-90 transition"
      >
        Verstuur bericht
      </button>

      {status && <p className="text-sm">{status}</p>}
    </form>
  );
}