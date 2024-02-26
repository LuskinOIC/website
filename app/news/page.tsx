import { getNewsPosts } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
// import SearchBar from "@/app/components/ui/SearchBar";
import BackToBrowse from "../components/ui/BackToBrowse";
import BlogCardsRow from "../components/BlogCardsRow";

// TODO: Replace SearchBar with a dedicated SearchAreaNews component
export default async function News() {
  const news = (await getNewsPosts()) as unknown as BlogCardsRowType[];
  return (
    <div className="flex flex-col px-[5%] md:justify-center">
      <BackToBrowse />
      {/* <SearchBar /> */}
      <BlogCardsRow type="news" cards={news} />
    </div>
  );
}
