import BlogCardsRow from "../components/BlogCardsRow";
import BackToBrowse from "../components/ui/BackToBrowse";
import SearchBar from "../components/ui/SearchBar";
import { BlogCardsRowType } from "../constants/types";
import { getPatientStories } from "../utils/contentful";

export default async function PatientStories() {
  const patients = (await getPatientStories()) as unknown as BlogCardsRowType[];
  return (
    <main className="mx-auto flex flex-col md:ml-16 md:justify-center">
      <BackToBrowse />
      <SearchBar />
      <div className="flex flex-col flex-wrap md:flex-row">
        <BlogCardsRow type="patient-stories" cards={patients} />
      </div>
    </main>
  );
}
