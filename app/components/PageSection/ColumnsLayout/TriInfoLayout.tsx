import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { TriCardContent } from "@/app/constants/types";

const divider = "w-0.5 bg-[#825AA4]";

export default function TriInfo({ section }: any) {
  const cardContents: TriCardContent[] = [];
  // console.log(section);
  section.map((sec: any) => {
    // console.log(sec.fields.cardContent.fields);
    cardContents.push(sec.fields.cardContent.fields);
  });
  console.log(cardContents.length - 1);
  return (
    <div className="flex justify-center gap-20 py-10">
      {cardContents.map((cardContent: TriCardContent, i: number) => (
        <div key={i} className="flex max-w-xs">
          <div>
            <h1
              className={`my-2 text-lg ${
                cardContent.bold ? "font-semibold" : ""
              }`}
            >
              {cardContent.title}
            </h1>
            <div className="pb-5">
              {cardContent.richContent &&
                renderRichTextToReactComponent(cardContent.richContent)}
            </div>
          </div>
          <div className={`ml-16 ${i < 2 ? divider : ""}`}></div>
        </div>
      ))}
    </div>
  );
}

// 3 columns containing title and unordered lists
// 2 borders, one between first and 2nd, then 2nd and 3rd

// div containing 3 divs and 2 span

//
