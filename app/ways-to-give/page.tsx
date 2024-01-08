import PageSection from "../components/PageSection/PageSection";
import { PageSectionType } from "../constants/types";
import { PAGE_TYPES } from "../constants/entries";
import { getPageByType } from "../utils/contentful";

// This page represents the "ways to give" page.
export default async function WaysToGive() {
  const page = await getPageByType(PAGE_TYPES.WAYS_TO_GIVE);

  return (
    <main>
      {page.pageSections.map((pageSection: PageSectionType) => (
        <PageSection key={pageSection.fields.title} section={pageSection} />
      ))}
    </main>
  );
}
