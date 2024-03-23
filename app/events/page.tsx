import { getEvents } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
import BackToBrowse from "../components/ui/BackToBrowse";
import BlogCardsRow from "../components/BlogCardsRow";

export function generateMetadata() {
  return {
    title:
      "Attend an Luskin Orthopaedic Institute for Children Event - Luskin Orthopaedic Institute for Children",
    description:
      "Find an event to become involved with or attend on behalf of the Luskin Orthopaedic Institue for Children.",
  };
}

// TODO: Replace SearchBar with a dedicated SearchAreaEvents component
export default async function Events() {
  const events = (await getEvents()) as unknown as BlogCardsRowType[];
  return (
    <div>
      <div className="flex flex-col px-[5%] md:justify-center">
        <BackToBrowse />
        {/* <SearchBar /> */}
        <BlogCardsRow type="events" cards={events} />
      </div>
    </div>
  );
}
