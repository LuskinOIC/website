import { getEvents } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
import BackToBrowse from "../components/ui/BackToBrowse";
import SearchBar from "../components/ui/SearchBar";
import BlogCardsRow from "../components/BlogCardsRow";

export default async function Events() {
  const events = (await getEvents()) as unknown as BlogCardsRowType[];
  return (
    <main className="">
      <div className="mx-auto flex flex-col md:ml-16 md:justify-center">
        <BackToBrowse />
        <SearchBar />
        <div className="flex flex-col flex-wrap md:flex-row">
          <BlogCardsRow type="events" cards={events} />
        </div>
      </div>
    </main>
  );
}
