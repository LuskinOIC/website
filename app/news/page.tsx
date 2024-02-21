import { getNewsPosts } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
// import SearchBar from "@/app/components/ui/SearchBar";
import BackToBrowse from "../components/ui/BackToBrowse";
import BlogCardsRow from "@/app/components/BlogCardsRow";
import PageSectionContainer from "@/app/components/PageSection/PageSectionContainer";

// TODO: Replace SearchBar with a dedicated SearchAreaNews component
export default async function News() {
  const news = (await getNewsPosts()) as unknown as BlogCardsRowType[];
  return (
    <PageSectionContainer>
      {/* <SearchBar /> */}
      <BackToBrowse />
      <BlogCardsRow type="news" cards={news} />
    </PageSectionContainer>
  );
}
