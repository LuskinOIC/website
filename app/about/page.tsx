import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType, AboutPageType } from "@/app/constants/types";
import { getAboutPage } from "../utils/contentful";

// TODO: Move grid components to their final homes.
export default async function About() {
  const page: AboutPageType = await getAboutPage();
  return (
    <main>
      {page.pageSections.map((pageSection: PageSectionType) => (
        <PageSection key={pageSection.fields.title} section={pageSection} />
      ))}
    </main>
  );
}
