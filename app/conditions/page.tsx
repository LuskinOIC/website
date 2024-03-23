import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType } from "@/app/constants/types";
import { PAGE_TYPES } from "@/app/constants/entries";
import { getPageByType } from "@/app/utils/contentful";

export function generateMetadata() {
  return {
    title: "Health Information Library - LuskinOIC",
    description:
      "LuskinOIC Health Information Library summarizes common reasons patients visit our specialists & provides an overview of common musculoskeletal conditions and injuries.",
  };
}

export default async function Conditions() {
  const page = await getPageByType(PAGE_TYPES.CONDITIONS);
  return (
    <main>
      {page.pageSections.map((section: PageSectionType) => (
        <PageSection key={section.fields.title} section={section} />
      ))}
    </main>
  );
}
