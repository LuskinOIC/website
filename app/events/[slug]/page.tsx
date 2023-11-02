import { getEvents, getEventBySlug } from "@/app/utils/contentful";

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((evt) => ({ slug: evt.slug }));
}

export default async function Event({ params }: { params: { slug: string } }) {
  const orgEvent = await getEventBySlug(params.slug);

  return (
    <main>
      <h1>Event = {orgEvent.eventName}</h1>
    </main>
  );
}
