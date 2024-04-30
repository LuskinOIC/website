import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType, PageType } from "@/app/constants/types";

interface PagePropsType {
  page: PageType;
}

// A resuable component that renders a page with sections.
export default function Page({ page }: PagePropsType) {
  // We want to protect against bad intermediate states where the page or sections
  // are not loaded.
  // if (!page || !page.pageSections) return null;

  return (
    <div>
      {page.pageSections.map((pageSection: PageSectionType) => (
        <PageSection key={pageSection.fields.title} section={pageSection} />
      ))}
    </div>
  );
}
