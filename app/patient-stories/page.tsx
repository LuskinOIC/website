import BlogCardsRow from "../components/BlogCardsRow";
import BackToBrowse from "../components/ui/BackToBrowse";
// import SearchBar from "../components/ui/SearchBar";
import { BlogCardsRowType } from "../constants/types";
import { getPatientStories } from "../utils/contentful";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";

export function generateMetadata() {
  return {
    title: "Patient Stories - Luskin Orthopaedic Institute for Children",
    description:
      "Read patient stories from children who have experienced the world class treatment and care from Luskin Orthopaedic Institute for Children.",
  };
}

// TODO: Replace SearchBar with a dedicated SearchAreaPatientStories component
export default async function PatientStories() {
  const patients = (await getPatientStories()) as unknown as BlogCardsRowType[];
  return (
    <PageSectionContainer>
      <BackToBrowse />
      {/* <SearchBar /> */}
      <BlogCardsRow type="patient-stories" cards={patients} />
    </PageSectionContainer>
  );
}
