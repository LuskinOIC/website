import { PageSectionType } from "@/app/constants/types";
import Image from "next/image";
import Link from "next/link";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import translations from "@/public/locales/en.json";

const styles = {
  wrapper: "w-full md:h-48",
  container:
    "flex flex-col py-4 gap-y-2  md:flex-row md:w-4/5 h-full mx-auto justify-evenly items-center",
  bannerSection: "flex-1/3 flex justify-center",
  btnContainer:
    "px-6 py-3 text-base md:text-xl font-bold text-white rounded-lg",
};

const eventVariantStyles = {
  blue: "bg-[#0076AD] text-white",
  purple: "bg-[#825AA4] text-white",
  gray: "bg-[#E7F0F3] border-2 md:border-[6px] border-[#DD5061]  text-black",
};

export default function EventBanner({ section }: { section: PageSectionType }) {
  const eventBanner = section.fields.eventBanner;
  const eventBannerImage = eventBanner.fields.image;
  const imageSize = eventBannerImage.fields.file.details.image;
  const variant = eventBanner.fields.colorVariant;
  const bgColorClass =
    eventVariantStyles[variant as keyof typeof eventVariantStyles] ||
    "bg-[#0076AD]";
  const btnColorClass =
    variant === "purple"
      ? "bg-[#FF7548] hover:bg-[#EA6A33]"
      : "bg-[#DD5061] hover:bg-[#D43870]";

  return (
    <section className={`${styles.wrapper} ${bgColorClass}`}>
      <div className={styles.container}>
        <Image
          className={styles.bannerSection}
          src={eventBannerImage.fields.file.url}
          alt={eventBanner.fields.title}
          width={imageSize.width}
          height={imageSize.height}
        />
        <div className={`hidden md:block ${styles.bannerSection}`}>
          {renderRichTextToReactComponent(eventBanner.fields.content)}
        </div>
        <div className={`${styles.bannerSection}`}>
          <Link
            href={eventBanner.fields.buttonLink}
            className={`${styles.bannerSection} ${styles.btnContainer} ${btnColorClass}`}
          >
            {translations.events.viewEvent}
          </Link>
        </div>
      </div>
    </section>
  );
}
