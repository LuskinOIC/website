import PageSection from "@/app/components/PageSection";
import { getPage } from "@/app/utils/contentful";
import { PageSectionType } from "@/app/constants/types";

// This is the root page to the website.
export default async function Home() {
  const page = await getPage();

  return (
    <main className="px-2.5">
      {page.sections.map((section: PageSectionType) => (
        <PageSection key={section.fields.title} section={section} />
      ))}
    </main>
  );
}
