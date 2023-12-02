import { getEvents } from "@/app/utils/contentful";
import { EventCardType, EventType } from "@/app/constants/types";
import EventCard from "@/app/components/EventCards/EventCard";
import Image from "next/image";
import Link from "next/link";

// iterate through data model?
export default async function Events() {
  const events = (await getEvents()) as unknown as EventType[];

  return (
    <main className="">
      {/* <h1>LuskinOIC&apos;s Leadership Drives Our Mission Forward</h1> */}
      <h1 className="text-xl">Events</h1>
      <div className="flex">
        {events.map((eventObj) => (
          <EventCard event={eventObj} />
        ))}
      </div>
    </main>
  );
}
