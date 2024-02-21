import { getEvents } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
import BackToBrowse from "@/app/components/ui/BackToBrowse";
// import SearchBar from "@/app/components/ui/SearchBar";
import BlogCardsRow from "@/app/components/BlogCardsRow";
import PageSectionContainer from "@/app/components/PageSection/PageSectionContainer";

// TODO: Replace SearchBar with a dedicated SearchAreaEvents component
export default async function Events() {
  const events = (await getEvents()) as unknown as BlogCardsRowType[];
  return (
    <PageSectionContainer>
      <div className="flex flex-col px-[5%] md:justify-center">
        <BackToBrowse />
        {/* <SearchBar /> */}
        <BlogCardsRow type="events" cards={events} />
      </div>
    </PageSectionContainer>
  );
}
