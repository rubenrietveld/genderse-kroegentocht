import events from "@/data/events.json";

export default function sitemap() {
  const baseUrl = "https://gendersekroegentocht.nl";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: new Date(),
    },
  ];

  const eventPages = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...eventPages];
}