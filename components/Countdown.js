"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const eventDate = new Date("2026-05-29T20:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(eventDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft <= 0) {
    return (
      <div className="text-2xl font-bold">
        🍻 Het is zover!
      </div>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const TimeBlock = ({ value, label }) => (
    <div className="bg-white text-primary rounded-xl px-6 py-4 min-w-[90px] shadow-lg">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm uppercase tracking-wide">{label}</div>
    </div>
  );

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      <TimeBlock value={days} label="Dagen" />
      <TimeBlock value={hours} label="Uur" />
      <TimeBlock value={minutes} label="Min" />
      <TimeBlock value={seconds} label="Sec" />
    </div>
  );
}