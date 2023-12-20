import PageSection from "../components/PageSection/PageSection";
import { PageSectionType, PageType } from "../constants/types";
import { getWaysToGivePage } from "../utils/contentful";

// This page represents the "ways to give" page.
export default async function WaysToGive() {
  const page: PageType = await getWaysToGivePage();

  return (
    <main>
      {page.pageSections.map((pageSection: PageSectionType) => (
        <PageSection key={pageSection.fields.title} section={pageSection} />
      ))}
    </main>
  );
}
