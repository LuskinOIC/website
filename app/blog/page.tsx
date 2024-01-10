import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType, BlogCardsRowType } from "@/app/constants/types";
import { getPageByType, getNewsPosts, getEvents } from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";
import BlogCardsRow from "../components/BlogCardsRow";

export default async function Blog() {
  const page = await getPageByType(PAGE_TYPES.BLOG);
  const news = (await getNewsPosts(8)) as unknown as BlogCardsRowType[];
  const events = (await getEvents(8)) as unknown as BlogCardsRowType[];

  return (
    <main>
      {page.pageSections.map((pageSection: PageSectionType) => (
        <PageSection key={pageSection.fields.title} section={pageSection} />
      ))}
      <div className="mx-5 md:mx-[5%]">
        <BlogCardsRow type="events" cards={events} />
        <BlogCardsRow type="news" cards={news} />
      </div>
    </main>
  );
}
