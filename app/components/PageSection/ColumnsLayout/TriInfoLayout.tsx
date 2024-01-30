import { Document } from "@contentful/rich-text-types";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import { CardType, TriCardContent } from "@/app/constants/types";

const divider = "divide-x pl-10";
export default function TriInfo({ section }: any) {
  const cardContents: TriCardContent[] = [];
  // console.log(section);
  section.map((sec: any) => {
    // console.log(sec.fields.cardContent.fields);
    cardContents.push(sec.fields.cardContent.fields);
  });
  console.log(cardContents.length - 1);
  return (
    <div className="flex justify-center gap-32 bg-blue-400">
      {cardContents.map((cardContent: TriCardContent, i: number) => (
        <div
          key={i}
          className={`${i > 0 && i < cardContents.length ? divider : ""}`}>
          <h1>{cardContent.title}</h1>
          <p>{}</p>
          {cardContent.richContent &&
            renderRichTextToReactComponent(cardContent.richContent)}
        </div>
      ))}
    </div>
  );
}

// 3 columns containing title and unordered lists
// 2 borders, one between first and 2nd, then 2nd and 3rd

// div containing 3 divs and 2 span

//
