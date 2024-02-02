import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { TriCardContent } from "@/app/constants/types";

const divider =
  "border-[#825AA4] border-b-[3px] md:border-b-0 md:border-r-[3px] mb-8 md:mb-0 md:mr-12";

const titleSizes = (titleSize: string) => {
  switch (titleSize) {
    case "Title Large":
      return "text-[28px] md:text-[32px]";
    case "Title Medium":
      return "text-xl md:text-2xl";
    case "Title Small":
      return "text-xl";
  }
};

export default function TriInfo({ section }: any) {
  const cardContents: TriCardContent[] = [];
  section.map((sec: any) => {
    cardContents.push(sec.fields.cardContent.fields);
  });

  if (cardContents.length < 3)
    return "Tri-Info page section requires 3 card layout entries";
  return (
    <div className="mx-4 grid py-10 md:mx-10 md:grid-cols-3 md:justify-around">
      {cardContents.map((cardContent: TriCardContent, i: number) => (
        <div
          key={i}
          className={`flex justify-center mx-6 ${i < 2 ? divider : ""}`}
        >
          <div className="w-4/5">
            <h1
              className={`py-3 ${
                cardContent.bold ? "font-semibold" : "font-normal"
              } ${cardContent.titleSize} ${titleSizes(cardContent.titleSize)}`}
            >
              {cardContent.title}
            </h1>
            <div className="pb-11 leading-relaxed md:pb-5">
              {cardContent.richContent &&
                renderRichTextToReactComponent(cardContent.richContent)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
