import { getEvents } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
import BackToBrowse from "../components/ui/BackToBrowse";
import SearchBar from "../components/ui/SearchBar";
import BlogCardsRow from "../components/BlogCardsRow";

export default async function Events() {
  const events = (await getEvents()) as unknown as BlogCardsRowType[];
  return (
    <main>
      <div className="flex flex-col px-[5%] md:justify-center">
        <BackToBrowse />
        <SearchBar />
        <BlogCardsRow type="events" cards={events} />
      </div>
    </main>
  );
}
