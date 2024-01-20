import BlogCardsRow from "../components/BlogCardsRow";
import BackToBrowse from "../components/ui/BackToBrowse";
// import SearchBar from "../components/ui/SearchBar";
import { BlogCardsRowType } from "../constants/types";
import { getPatientStories } from "../utils/contentful";

// TODO: Replace SearchBar with a dedicated SearchAreaPatientStories component
export default async function PatientStories() {
  const patients = (await getPatientStories()) as unknown as BlogCardsRowType[];
  return (
    <main className="flex flex-col px-[5%] md:justify-center">
      <BackToBrowse />
      {/* <SearchBar /> */}
      <BlogCardsRow type="patient-stories" cards={patients} />
    </main>
  );
}
