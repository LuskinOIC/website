import PageSection from "@/app/components/PageSection/PageSection";
import {
  PageSectionType,
  BlogCardsRowType,
  OptionType,
} from "@/app/constants/types";
import {
  getPageByType,
  getNewsPosts,
  getEvents,
  getPatientStories,
} from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";
import BlogCardsRow from "../components/BlogCardsRow";
import Dropdown from "../components/ui/Dropdown";

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
      <div className="mb-12 md:hidden px-5">
        <p className="px-1 pb-4">Choose a section you would like to review</p>
        <Dropdown placeHolder="News" options={dropdownOptions} />
      </div>
      <BlogCardsRow type="news" cards={news} />
      <BlogCardsRow type="events" cards={events} />
      <BlogCardsRow type="patient-stories" cards={patientStories} />
    </main>
  );
}
