import { OptionType } from "@/app/constants/types";
import {
  getNewsPosts,
  getEvents,
  getPatientStories,
  getInsightsPosts,
} from "@/app/utils/contentful";
// import BlogCardsRow from "../components/BlogCardsRow";
import Dropdown from "../components/ui/Dropdown";
import translations from "@/public/locales/en.json";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
import BlogIndex from "./components/BlogIndex";

export function generateMetadata() {
  return {
    title: "LuskinOIC Blog",
    description:
      "Read the LuskinOIC blog to browse patient stories, explore insights, news & events as they relate to the Luskin Orthopaedic Institute for Children.",
  };
}

export default async function Blog() {
  // TO DO: REPLACE TYPE
  const news = (await getNewsPosts()) as any;
  const patientStories = (await getPatientStories()) as any;
  const insights = (await getInsightsPosts()) as any;
  const events = (await getEvents()) as any;

  const blogData = {
    news,
    patientStories,
    insights,
    events,
  };

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

      <PageSectionContainer showTopMargin={true}>
        <BlogIndex blogData={blogData} />
      </PageSectionContainer>
    </div>
  );
}
