import { getConditionTerms } from "@/app/utils/contentful";
import { PageSectionType, SpecialtyType } from "@/app/constants/types";
import ConditionDetails from "@/app/conditions/ConditionDetails";
import RelatedSpecialtiesComponent from "@/app/conditions/RelatedSpecialties";
import Button from "@/app/components/ui/Button";
// import SearchBar from "@/app/components/ui/SearchBar";

export type ConditionsType = {
  slug: string;
  term: string;
  definition: string;
  relatedSpecialties: SpecialtyType[];
  learnMore: PageSectionType[];
};

type GroupedConditions = {
  [key: string]: ConditionsType[];
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
              <div
                key={condition.slug}
                id={condition.term}
                className="grid grid-cols-5 border rounded px-[27px] py-[30px]"
              >
                <div className="col-span-4 flex flex-col gap-y-3 px-2">
                  <ConditionDetails condition={condition} />
                  {condition.relatedSpecialties && (
                    <RelatedSpecialtiesComponent
                      relatedSpecialties={condition.relatedSpecialties}
                    />
                  )}
                </div>

                <div className="col-span-1 self-end">
                  <Button
                    text="Learn More"
                    href={`/conditions/${condition.slug}/learn-more`}
                    className="uppercase"
                    variant="bluePrimary"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </>
    );
  };

  return (
    <main className="flex flex-cols gap-6 w-5/6 mx-auto">
      {/* <SearchBar /> */}
      <div className="">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          // <button key={letter} onClick={() => setFilterLetter(letter)}>
          <button key={letter} className="flex flex-cols px-2">
            {letter}
          </button>
        ))}
      </div>
      <div className="grid grid-col gap-5 w-[95%]">{GlossarySection()}</div>
    </main>
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
