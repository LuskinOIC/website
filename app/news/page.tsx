import { getNewsPosts } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
import SearchBar from "@/app/components/ui/SearchBar";
import BackToBrowse from "../components/ui/BackToBrowse";
import BlogCardsRow from "../components/BlogCardsRow";

export default async function News() {
  const news = (await getNewsPosts()) as unknown as BlogCardsRowType[];
  return (
    <main className="grid mx-auto w-4/5">
      <BackToBrowse />
      <SearchBar />
      <h1 className="mb-2 mt-8 text-xl font-bold text-[#0076AD] md:mb-4 md:text-3xl md:font-normal">
        News
      </h1>
      <div className="flex flex-col flex-wrap md:flex-row">
        <BlogCardsRow title="news" cards={news} variant="full" />
      </div>
    </main>
  );
}
