import { getConditionTerms } from "@/app/utils/contentful";
import ConditionDetails from "@/app/conditions/ConditionDetails";
import { ConditionsType } from "@/app/constants/types";
import { Title1 } from "@/app/components/ui/Typography/Title";
// import SearchBar from "@/app/components/ui/SearchBar";

type GroupedConditions = {
  [key: string]: ConditionsType[];
};

const styles = {
  conditionsContainer: "flex flex-cols md:justify-around w-5/6 mx-auto",
  lettersContainer:
    "hidden md:block h-fit bg-[#F1F1F1] text-[24px] p-4 rounded",
  letter: "flex flex-cols p-1 bold hover:text-[#0076AD] hover:underline",
  termsContainer: "grid grid-col gap-5 md:w-[80%]",
};

export default async function ConditionsIndexLayout() {
  const conditions = (await getConditionTerms()) as unknown as ConditionsType[];

  function groupTermsByFirstLetter(
    conditions: ConditionsType[]
  ): GroupedConditions {
    return conditions.reduce((acc, condition) => {
      const firstLetter = condition.term[0].toLowerCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(condition);
      return acc;
    }, {} as GroupedConditions);
  }

  const groupedConditions = groupTermsByFirstLetter(conditions);

  const GlossarySection = () => {
    return (
      <>
        {Object.entries(groupedConditions).map(([key, conditions], index) => (
          <div key={index} id={key.toUpperCase()} className="scroll-mt-[100px]">
            <Title1>{key.toUpperCase()}</Title1>
            {conditions.map((condition: ConditionsType) => (
              <div key={condition.term}>
                <ConditionDetails condition={condition} />
              </div>
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <section className={styles.conditionsContainer}>
      {/* TO DO: Search + Glossary Index BTN */}
      {/* <SearchBar /> */}
      <div className={styles.lettersContainer}>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <a href={`#${letter}`} key={letter} className={styles.letter}>
            {letter}
          </a>
        ))}
      </div>
      <div className={styles.termsContainer}>{GlossarySection()}</div>
    </section>
  );
}
