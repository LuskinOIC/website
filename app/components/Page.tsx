import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType, PageType } from "@/app/constants/types";
import { getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";

interface PagePropsType {
  page: PageType;
}

export default async function Page({ page } : PagePropsType) {
  return (
    <main>
      {page.pageSections.map((pageSection: PageSectionType) => (
        <PageSection
          key={pageSection.fields.title}
          section={pageSection}
        />
      ))}
    </main>
  );
}
