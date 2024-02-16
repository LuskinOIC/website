import { getConditionTerms } from "@/app/utils/contentful";
import { PageSectionType, SpecialtyType } from "../constants/types";
// import SearchBar from "@/app/components/ui/SearchBar";
import { Title3 } from "../components/ui/Typography/Title";
import RelatedSpecialtiesComponent from "./RelatedSpecialties";
import Button from "@/app/components/ui/Button";

export type ConditionsType = {
  slug: string;
  term: string;
  definition: string;
  relatedSpecialties: SpecialtyType[];
  learnMore: PageSectionType[];
};

export default async function ConditionsIndexLayout() {
  const conditions = (await getConditionTerms()) as unknown as ConditionsType[];

  return (
    <main className="flex flex-cols gap-5">
      {/* <SearchBar /> */}
      <div className="">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          // <button key={letter} onClick={() => setFilterLetter(letter)}>
          <button key={letter} className="flex flex-cols px-2">
            {letter}
          </button>
        ))}
      </div>
      <div className="grid grid-col">
        {conditions.map((condition) => (
          <div
            key={condition.slug}
            className="grid grid-row-3 border rounded px-[27px] py-[30px]"
          >
            <Title3 className="text-[#0076AD] md:leading-0 py-0">
              {" "}
              {condition.term}{" "}
            </Title3>
            <p> {condition.definition} </p>

            <div className="flex flex-rows">
              {condition.relatedSpecialties && (
                <RelatedSpecialtiesComponent
                  relatedSpecialties={condition.relatedSpecialties}
                />
              )}
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
    </main>
  );
}
//Main letter header (eg: A, B)
//Filter by first letter
//Place in main letter section
//Get information on term
//ID for anchoring the page to that term
//display name
//display definition
//display specialties
//IF there is a 'learn more' option, there is a learn more button
//Each term needs an ID

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

// function App() {
//   return (
//     <div>
//       <h1>Page Title</h1>
// <nav>
//   <a href="#section1">Go to Section 1</a>
//   <a href="#section2">Go to Section 2</a>
// </nav>
// <div id="section1" className="scroll-mt-5">
//   <h2>Section 1</h2>
//   <p>This is the content of Section 1.</p>
// </div>
// <div id="section2" className="scroll-mt-5">
//   <h2>Section 2</h2>
//   <p>This is the content of Section 2.</p>
// </div>
//     </div>
//   );
// }
