import PageSection from "@/app/components/PageSection/PageSection";
import { BlogCardsRowType, PageSectionType } from "@/app/constants/types";
import { getNewsPosts, getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";
import BlogCardsRow from "../components/BlogCardsRow";

export default async function CorporateSponsorship() {
  const page = await getPageByType(PAGE_TYPES.CORPORATE_SPONSORSHIP);
  const news = (await getNewsPosts(4)) as unknown as BlogCardsRowType[];
  return (
    <main>
      {page.pageSections.map((section: PageSectionType) => (
        <PageSection key={section.fields.title} section={section} />
      ))}
      <section className="flex justify-center">
        <BlogCardsRow type="news" cards={news} />
      </section>
    </main>
  );
}
