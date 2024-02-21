import BlogCardsRow from "../components/BlogCardsRow";
import BackToBrowse from "../components/ui/BackToBrowse";
// import SearchBar from "../components/ui/SearchBar";
import PageSectionContainer from "../components/PageSection/PageSectionContainer";
import { BlogCardsRowType } from "../constants/types";
import { getPatientStories } from "../utils/contentful";

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
