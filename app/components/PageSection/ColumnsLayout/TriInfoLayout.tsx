import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { TriCardContent } from "@/app/constants/types";

// const divider =
//   "border-[#825AA4] border-b-[3px] md:border-b-0 md:border-r-[3px]";

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

// function justifyContent(index: number) {
//   if (index === 0) return "justify-start";
//   if (index === 1) return "justify-center";
//   if (index === 2) return "justify-end";
// }

export default function TriInfo({ section }: any) {
  const cardContents: TriCardContent[] = [];
  const cardSection = section.fields.cardLayout;
  cardSection.map((sec: any) => {
    cardContents.push(sec.fields.cardContent.fields);
  });

  if (cardContents.length < 3) {
    return "Tri-Info page section requires 3 card layout entries";
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 justify-stretch py-6 md:py-12">
      {cardContents.map((cardContent: TriCardContent, i: number) => (
        <div key={i} className="col-span-1">
          <div className="w-full">
            <h1
              className={`py-3 ${
                cardContent.bold ? "font-semibold" : "font-normal"
              } ${cardContent.titleSize} ${titleSizes(cardContent.titleSize)}`}
            >
              {cardContent.title}
            </h1>
            <div className="pb-1 leading-relaxed md:pb-5">
              {cardContent.richContent &&
                renderRichTextToReactComponent(cardContent.richContent)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
