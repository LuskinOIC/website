import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType } from "@/app/constants/types";
import { getLandingPage } from "@/app/utils/contentful";

// This is the root page to the website.
export default async function Home() {
  const page = await getLandingPage();
  return (
    <main>
      {page.sections.map((section: PageSectionType) => (
        <PageSection key={section.fields.title} section={section} />
      ))}
    </main>
  );
}
