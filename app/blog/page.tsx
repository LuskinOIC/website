import { BlogCardsRowType, OptionType } from "@/app/constants/types";
import {
  getNewsPosts,
  getEvents,
  getPatientStories,
  getInsightsPosts,
} from "@/app/utils/contentful";
import BlogCardsRow from "../components/BlogCardsRow";
import Dropdown from "../components/ui/Dropdown";
import translations from "@/public/locales/en.json";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";

export function generateMetadata() {
  return {
    title: "LuskinOIC Blog",
    description:
      "Read the LuskinOIC blog to browse patient stories, explore insights, news & events as they relate to the Luskin Orthopaedic Institute for Children.",
  };
}

export default async function Blog() {
  const news = (await getNewsPosts(8)) as unknown as BlogCardsRowType[];
  const insights = (await getInsightsPosts(8)) as unknown as BlogCardsRowType[];
  const events = (await getEvents(8)) as unknown as BlogCardsRowType[];
  const patientStories = (await getPatientStories(
    8,
  )) as unknown as BlogCardsRowType[];

  const dropdownOptions: OptionType[] = [
    { label: "News", value: "news", targetID: "news" },
    { label: "Insights", value: "insights", targetID: "insights" },
    { label: "Events", value: "events", targetID: "events" },
    {
      label: "Patient Stories",
      value: "patient-stories",
      targetID: "patient-stories",
    },
  ];

  return (
    <div>
      <div className="mb-12 md:hidden px-5">
        <p className="px-1 pb-4">{translations.blog.sectionReviewText}</p>
        <Dropdown placeHolder="News" options={dropdownOptions} />
      </div>

      <PageSectionContainer>
        <BlogCardsRow type="news" cards={news} />
      </PageSectionContainer>
      <PageSectionContainer>
        <BlogCardsRow type="insights" cards={insights} />
      </PageSectionContainer>
      <PageSectionContainer>
        <BlogCardsRow type="events" cards={events} />
      </PageSectionContainer>

      <PageSectionContainer>
        <BlogCardsRow type="patient-stories" cards={patientStories} />
      </PageSectionContainer>
    </div>
  );
}
