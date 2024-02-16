import { getConditionTerms } from "@/app/utils/contentful";
import { PageSectionType, SpecialtyType } from "../constants/types";
// import SearchBar from "@/app/components/ui/SearchBar";

// TODO: Replace SearchBar with a dedicated search component
export type ConditionsType = {
  term: string;
  definition: string;
  relatedSpecalties: SpecialtyType[];
  learnMore: PageSectionType[];
};

export default async function ConditionsIndexLayout() {
  const conditions = (await getConditionTerms()) as unknown as ConditionsType[];
  // console.log(conditions[0])

  return (
    <main>
      {/* <SearchBar /> */}
      <div className="">
        {conditions.map((condition) => {
          const conditionTerm = condition.term;
          return <div key={conditionTerm}> {conditionTerm} </div>;
        })}
      </div>
    </main>
  );
}
