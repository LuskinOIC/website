import { getNewsPosts } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
import SearchBar from "@/app/components/ui/SearchBar";
import BackToBrowse from "../components/ui/BackToBrowse";
import BlogCardsRow from "../components/BlogCardsRow";

export default async function News() {
  const news = (await getNewsPosts()) as unknown as BlogCardsRowType[];
  return (
    <main className="flex flex-col px-[5%] md:justify-center">
      <BackToBrowse />
      <SearchBar />
      <BlogCardsRow type="news" cards={news} />
    </main>
  );
}
