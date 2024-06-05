import { OptionType } from "@/app/constants/types";
import {
  getNewsPosts,
  // getEvents,
  // getPatientStories,
  // getInsightsPosts,
} from "@/app/utils/contentful";
// import BlogCardsRow from "../components/BlogCardsRow";
import Dropdown from "../components/ui/Dropdown";
import translations from "@/public/locales/en.json";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
import BlogSelector from "@/app/blog/components/BlogSelector";
import NewsGallery from "./components/Gallery";

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
  // const news = (await getNewsPosts(8)) as unknown as BlogCardsRowType[];
  // const insights = (await getInsightsPosts(8)) as unknown as BlogCardsRowType[];
  // const events = (await getEvents(8)) as unknown as BlogCardsRowType[];
  // const patientStories = (await getPatientStories(
  //   8,
  // )) as unknown as BlogCardsRowType[];

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

  // console.log(news[0].blogCard)

  return (
    <div>
      <div className="mb-12 md:hidden px-5">
        <p className="px-1 pb-4">{translations.blog.sectionReviewText}</p>
        <Dropdown placeHolder="News" options={dropdownOptions} />
      </div>
      <PageSectionContainer showTopMargin={true}>
        <BlogSelector />
      </PageSectionContainer>
      <PageSectionContainer showTopMargin={true}>
        <NewsGallery news={news} />
      </PageSectionContainer>

      {/* <PageSectionContainer>
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
      </PageSectionContainer> */}
    </div>
  );
}
