// Types
import { ColumnType } from "@/app/constants/types";
// Custom components
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import SectionContent from "@/app/components/PageSection/ColumnsLayout/SectionContent";

export default function VideoWithText({ section }: { section: ColumnType }) {
  const orderClass = section.fields.reverseOrder ? "md:order-1" : "";
  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";
  return (
    <section className={`block ${bgColor} py-5`}>
      <div className="md:mx-auto md:flex flex-col md:flex-row gap-4 md:gap-x-14 items-center">
        <div className={`mx-auto md:w-full md:basis-1/2 ${orderClass}`}>
          {section.fields.video && (
            <div className="aspect-video">
              <iframe
                src={section.fields.video}
                title={`Video for ${section.fields.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>
        <div className="basis-1/2 px-5">
          <SectionContent section={section} />
        </div>
      </div>
    </section>
  );
}
