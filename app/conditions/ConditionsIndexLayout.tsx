import { getConditionTerms } from "@/app/utils/contentful";
import ConditionDetails from "@/app/conditions/ConditionDetails";
import { ConditionsType } from "@/app/constants/types";
// import SearchBar from "@/app/components/ui/SearchBar";

type GroupedConditions = {
  [key: string]: ConditionsType[];
};

const styles = {
  conditionsContainer: "flex flex-cols gap-6 w-5/6 mx-auto",
  letter: "flex flex-cols px-2",
  termsContainer: "grid grid-col gap-5 w-[95%]",
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

  const GlossarySection = () => {
    return (
      <>
        {Object.entries(groupedConditions).map(([key, conditions], index) => (
          <div key={index}>
            <h1>{key.toUpperCase()}</h1>
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
      {/* <SearchBar /> */}
      <div className="">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          // <button key={letter} onClick={() => setFilterLetter(letter)}>
          <button key={letter} className={styles.letter}>
            {letter}
          </button>
        ))}
      </div>
      <div className={styles.termsContainer}>{GlossarySection()}</div>
    </section>
  );
}
//Main letter header (eg: A, B)
//Filter by first letter
//Place in main letter section

// import React, { useRef } from 'react';
// function App() {
//   const section1Ref = useRef(null);
//   const section2Ref = useRef(null);
//   const scrollToSection = (sectionRef) => {
//     sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//   };
//   return (
//     <div>
//       <h1>Page Title</h1>
//       <nav>
//         <button onClick={() => scrollToSection(section1Ref)}>Go to Section 1</button>
//         <button onClick={() => scrollToSection(section2Ref)}>Go to Section 2</button>
//       </nav>
//       <div ref={section1Ref} style={{ marginTop: '100vh' }}>
//         <h2>Section 1</h2>
//         <p>This is the content of Section 1.</p>
//       </div>
//       <div ref={section2Ref} style={{ marginTop: '100vh' }}>
//         <h2>Section 2</h2>
//         <p>This is the content of Section 2.</p>
//       </div>
//     </div>
//   );
// }
