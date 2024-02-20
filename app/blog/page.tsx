import {
  BlogCardsRowType,
  OptionType,
  PageSectionType,
} from "@/app/constants/types";
import {
  getPageByType,
  getNewsPosts,
  getEvents,
  getPatientStories,
} from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";
import BlogSearchArea from "./components/BlogSearchArea";
import PageSection from "../components/PageSection/PageSection";

export default async function Blog() {
  const page = await getPageByType(PAGE_TYPES.BLOG);
  const news = (await getNewsPosts(8)) as unknown as BlogCardsRowType[];
  const events = (await getEvents(8)) as unknown as BlogCardsRowType[];
  const patientStories = (await getPatientStories(
    8,
  )) as unknown as BlogCardsRowType[];

  const dropdownOptions: OptionType[] = [
    { label: "News", value: "news", targetID: "news" },
    { label: "Events", value: "events", targetID: "events" },
    {
      label: "Patient Stories",
      value: "patient-stories",
      targetID: "patient-stories",
    },
  ];

  return (
    <main>
      {page.pageSections.map((pageSection: PageSectionType) => (
        <PageSection key={pageSection.fields.title} section={pageSection} />
      ))}
      <BlogSearchArea
        page={page}
        news={news}
        events={events}
        patientStories={patientStories}
        dropdownOptions={dropdownOptions}
      />
    </main>
  );
}
