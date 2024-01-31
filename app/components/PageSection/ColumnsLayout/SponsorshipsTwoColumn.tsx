// Next components
import dynamic from "next/dynamic";
// Types
import { ColumnType } from "@/app/constants/types";
// Custom components
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import SectionContent from "@/app/components/PageSection/ColumnsLayout/SectionContent";
import Slider from "@/app/components/Slider";

export default function SponsorshipsColumnLayout({
  section,
}: {
  section: ColumnType;
}) {
  const orderClass = section.fields.reverseOrder ? "md:order-1" : "";
  const textPadding = section.fields.reverseOrder
    ? "px-5 md:pl-[8%] md:pr-0 lg:pl-[10%] lg:pr-[5%]"
    : "px-5 md:pr-[5%] md:pl-0 lg:pr-[10%] lg:pl-[5%]";
  const verticalPadding = "py-5";
  const bgColor = section.fields.backgroundColor
    ? getBackgroundColor(section.fields.backgroundColor)
    : "white";

  const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

  const sponsors = section.fields.sponsorships;

  const imagesPerSlide = 3;
  const groupedImages: any[] = [];
  for (let i = 0; i < sponsors.length; i += imagesPerSlide) {
    const slide = sponsors.slice(i, i + imagesPerSlide);
    groupedImages.push(slide);
  }

  const sliderSlides = groupedImages.map((groupedImage: any, index: number) => (
    <div key={index} className="mb-4 flex justify-center">
      {groupedImage.map((s: any) => (
        <a
          key={s.sys.id}
          href={s.fields.buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${orderClass} mx-4 my-4 h-20 w-20 md:flex md:h-auto md:w-auto`}
        >
          <DynamicImage
            alt="sponsors"
            src={s.fields.logoImage.fields.file.url}
            width={s.fields.logoImage.fields.file.details.image.width}
            height={s.fields.logoImage.fields.file.details.image.height}
            className="object-contain"
          />
        </a>
      ))}
    </div>
  ));

  return (
    <section className={`block ${verticalPadding}`}>
      <div className={`${orderClass}`}>
        <div className={`flex flex-col md:flex-row ${bgColor} justify-between`}>
          <div
            id="sponsor-assets"
            className=" flex flex-wrap border md:border-0 md:w-[60%]"
          >
            <Slider slides={sliderSlides as any} />
          </div>
          <div className={`basis-1/2 px-2 ${textPadding}`}>
            <SectionContent section={section} />
          </div>
        </div>
      </div>
    </section>
  );
}
