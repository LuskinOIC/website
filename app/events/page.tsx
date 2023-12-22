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
      {/* MOBILE Search Box */}
      <div className="mx-auto flex flex-col md:ml-16 md:justify-center">
        {/* Todo: Add back arrow */}
        <p className="mb-4 mt-6 hidden text-lg text-[#0076AD] md:ml-4 md:block">
          Back to Browse
        </p>
        {/* Todo: add search box */}
        <div className="md:hidden">
          <h1>insert search box</h1>
        </div>
        <h1 className="mb-2 ml-12 mt-8 text-xl font-bold uppercase text-[#0076AD] md:mb-4 md:ml-4 md:text-3xl md:font-normal md:capitalize">
          Events
        </h1>
        <div className="flex flex-col flex-wrap md:flex-row">
          {events.map((eventObj) => (
            <MinimalCard
              key={eventObj.slug}
              cardContent={adaptEventToMinimalCardType(eventObj)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
