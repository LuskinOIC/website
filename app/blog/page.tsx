import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType, BlogCardsRowType } from "@/app/constants/types";
import { getPageByType, getNewsPosts } from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";
import BlogCardsRow from "../components/BlogCardsRow";

export default async function Blog() {
  const page = await getPageByType(PAGE_TYPES.BLOG);
  const news = (await getNewsPosts(8)) as unknown as BlogCardsRowType[];
  return (
    <main>
      {page.pageSections.map((pageSection: PageSectionType) => (
        <PageSection key={pageSection.fields.title} section={pageSection} />
      ))}
      <div className="grid mx-auto w-4/5">
        <BlogCardsRow type="news" cards={news} />
      </div>
    </main>
  );
}
