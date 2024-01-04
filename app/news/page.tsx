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
      <BlogCardsRow title="news" cards={news} variant="full" />
    </main>
  );
}
