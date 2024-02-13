import { PageSectionType } from "@/app/constants/types";
import Image from "next/image";
import Link from "next/link";
import renderRichTextToReactComponent from "../utils/rich-text";

const styles = {
  wrapper: "w-full md:h-48",
  container:
    "flex flex-col py-4 gap-y-2  md:flex-row md:w-4/5 h-full mx-auto justify-evenly items-center",
  bannerSection: "flex-1/3 flex justify-center",
  btnContainer: "px-6 py-3 text-white rounded-lg",
};

export default function EventBanner({ section }: { section: PageSectionType }) {
  const eventBanner = section.fields.eventBanner;
  const eventBannerImage = eventBanner.fields.image;
  // console.log(eventBanner);

  return (
    <section className={`${styles.wrapper} bg-[#0076AD] text-white`}>
      <div className={styles.container}>
        <Image
          className={styles.bannerSection}
          src={eventBannerImage.fields.file.url}
          alt={eventBanner.fields.title}
          width={212}
          height={120}
        />
        <div className={`hidden md:block ${styles.bannerSection}`}>
          {renderRichTextToReactComponent(eventBanner.fields.content)}
        </div>
        <div className={`${styles.bannerSection}`}>
          <Link
            href={eventBanner.fields.buttonLink}
            className={`${styles.bannerSection} ${styles.btnContainer} bg-blue-500 `}
          >
            VIEW EVENT
          </Link>
        </div>
      </div>
    </section>
  );
}
