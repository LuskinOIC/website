import { PageSectionType } from "../constants/types";
import Image from "next/image";

export default function TwoColumn({ section }: { section: PageSectionType }) {
  //NOTES
  section = {
    fields: {
      columnTitle: "Sample Title",
      columnImage: "https://picsum.photos/500/400",
      columnSubTitle: "Sample Subtitle",
      columnParagraph:
        "Designed for physicians who have successfully completed an orthopaedic surgery residency program, OIC offers a unique experience for fellows as a non-profit outpatient orthopedic institution that also works in affiliation with UCLA. ",
      button: {
        text: "Click Me",
        link: "destination-path",
      },
    },
  };
  ///section.fields.(columnTitle, columnImage, columnSubTitle, columnParagraph,button)
  return (
    <section className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 md:justify-items-center py-4 md:py-6 md:px-30 lg:px-40">
      <div className="rounded-[10px] md:max-w-[550px] shadow border border-black border-opacity-10 pb-8 md:p-6 overflow-hidden">
        <div className="relative w-full h-[240px] md:h-[400px] md:rounded-[10px] overflow-hidden">
          <Image
            src="https://picsum.photos/500/400"
            alt="Place Holder Content"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
        <div className="md:h-min-[242px] px-10 md:px-0 flex-col ">
          <div className="font-arial leading-150 py-4 ">
            <h1 className="text-2xl lg:text-3xl">
              {section.fields.columnTitle}
            </h1>
            <h2 className="text-xl">{section.fields.columnSubTitle}</h2>
          </div>
          <p className="text-xl font-normal leading-[30px] py-4">
            {section.fields.columnParagraph}{" "}
          </p>
        </div>
      </div>
      <div className="rounded-[10px] md:max-w-[550px] shadow border border-black border-opacity-10 pb-8 md:p-6 overflow-hidden">
        <div className="relative w-full h-[240px] md:h-[400px] md:rounded-[10px] overflow-hidden">
          <Image
            src="https://picsum.photos/500/400"
            alt="Place Holder Content"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
        <div className="md:h-min-[242px] px-10 md:px-0 flex-col ">
          <div className="font-arial leading-150 py-4 ">
            <h1 className="text-2xl lg:text-3xl">
              {section.fields.columnTitle}
            </h1>
            <h2 className="text-xl">{section.fields.columnSubTitle}</h2>
          </div>
          <p className="text-xl font-normal leading-[30px] py-4">
            {section.fields.columnParagraph}{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
