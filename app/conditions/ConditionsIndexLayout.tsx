import { getConditionTerms } from "@/app/utils/contentful";
import ConditionDetails from "@/app/conditions/ConditionDetails";
import { ConditionsType } from "@/app/constants/types";
import { Title1 } from "@/app/components/ui/Typography/Title";
// import SearchBar from "@/app/components/ui/SearchBar";

type GroupedConditions = {
  [key: string]: ConditionsType[];
};

const styles = {
  conditionsContainer: "flex flex-cols md:justify-around mx-auto",
  lettersContainer:
    "hidden md:block h-fit bg-[#F1F1F1] text-[24px] p-4 rounded mr-12",
  letter:
    "flex flex-cols justify-center p-1 bold hover:text-[#0076AD] hover:underline",
  greyedOutLetter: "text-gray-400 pointer-events-none",
  termsContainer:
    "flex-grow grid grid-cols-1 gap-5 overflow-auto max-h-[calc(73rem)] p-4",
};

export default async function ConditionsIndexLayout() {
  const conditions = (await getConditionTerms()) as unknown as ConditionsType[];

  function groupTermsByFirstLetter(
    conditions: ConditionsType[],
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
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letters = Object.keys(groupedConditions).join("").toUpperCase();

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
        {alphabet.split("").map((letter) => {
          const isLetterPresent = letters.includes(letter);
          return (
            <a
              href={`#${letter}`}
              key={letter}
              className={`${styles.letter} ${
                !isLetterPresent ? styles.greyedOutLetter : ""
              }`}
            >
              {letter}
            </a>
          );
        })}
      </div>
      <div className={styles.termsContainer}>{GlossarySection()}</div>
    </section>
  );
}
