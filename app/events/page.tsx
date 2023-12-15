import { getEvents } from "@/app/utils/contentful";
import { MinimalCardType, EventCardType } from "@/app/constants/types";
import MinimalCard from "@/app/components/MinimalCard";

export function adaptEventToMinimalCardType(
  event: EventCardType,
): MinimalCardType {
  return {
    title: event.eventName,
    cardPhoto: event.eventPhoto,
    summary: event.eventSummary,
  };
}

export default async function Events() {
  const events = (await getEvents()) as unknown as EventCardType[];

  return (
    <main className="">
      <h1 className="text-xl">Events</h1>
      <div className="grid grid-cols-1 place-items-center">
        {events.map((eventObj) => (
          <MinimalCard
            key={eventObj.slug}
            cardContent={adaptEventToMinimalCardType(eventObj)}
          />
        ))}
      </div>
    </main>
  );
}
