import { getEvents } from "@/app/utils/contentful";
import { EventCardType } from "@/app/constants/types";
import MinimalCard from "@/app/components/MinimalCard";
import BackToBrowse from "../components/ui/BackToBrowse";
import SearchBar from "../components/ui/SearchBar";

export default async function Events() {
  const events = (await getEvents()) as unknown as EventCardType[];
  return (
    <main className="">
      <div className="mx-auto flex flex-col md:ml-16 md:justify-center">
        <BackToBrowse />
        <SearchBar />
        <div className="flex flex-col flex-wrap md:flex-row">
          {events.map((eventObj) => (
            <MinimalCard
              key={eventObj.slug}
              cardContent={{
                title: eventObj.eventName,
                cardPhoto: eventObj.eventPhoto,
                summary: eventObj.eventSummary,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
