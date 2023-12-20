import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType } from "@/app/constants/types";
import { getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";

// This is the root page to the website.
export default async function Home() {
  const page = await getPageByType(PAGE_TYPES.LANDING_PAGE);
  return (
    <main>
      {page.pageSection.map((section: PageSectionType) => (
        <PageSection key={section.fields.title} section={section} />
      ))}
    </main>
  );
}
