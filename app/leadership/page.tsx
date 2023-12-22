import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType } from "@/app/constants/types";
import { getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";

export default async function Leadership() {
  const page = await getPageByType(PAGE_TYPES.LEADERSHIP);
  return (
    <main>
      {page.pageSections.map((section: PageSectionType) => (
        <PageSection key={section.fields.title} section={section} />
      ))}
    </main>
  );
}
