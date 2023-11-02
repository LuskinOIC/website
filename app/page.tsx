import PageSection from "@/components/PageSection";
import { getPage } from "@/utils/contentful";
import { PageSectionType } from "@/constants/types";

// This is the root page to the website.
export default async function Home() {
  const page = await getPage();

  return (
    <main>
      {page.sections.map((section: PageSectionType) => (
        <PageSection key={section.fields.title} section={section} />
      ))}
    </main>
  );
}
