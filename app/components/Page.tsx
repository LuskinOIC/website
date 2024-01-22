import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType, PageType } from "@/app/constants/types";

interface PagePropsType {
  page: PageType;
}

// A resuable component that renders a page with sections.
export default function Page({ page }: PagePropsType) {
  return (
    <main>
      {page.pageSections.map((pageSection: PageSectionType) => (
        <PageSection key={pageSection.fields.title} section={pageSection} />
      ))}
    </main>
  );
}
