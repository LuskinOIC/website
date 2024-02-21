import PageSection from "@/app/components/PageSection/PageSection";
import { BlogCardsRowType, PageSectionType } from "@/app/constants/types";
import { getNewsPosts, getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";
import BlogCardsRow from "@/app/components/BlogCardsRow";
import PageSectionContainer from "../components/PageSection/PageSectionContainer";

export default async function CorporatePartnership() {
  const page = await getPageByType(PAGE_TYPES.CORPORATE_PARTNERSHIP);
  const news = (await getNewsPosts(4)) as unknown as BlogCardsRowType[];
  return (
    <main>
      {page.pageSections.map((section: PageSectionType) => (
        <PageSection key={section.fields.title} section={section} />
      ))}

      <PageSectionContainer>
        <BlogCardsRow type="news" cards={news} />
      </PageSectionContainer>
    </main>
  );
}
