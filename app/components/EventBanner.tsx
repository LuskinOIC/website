import { PageSectionType } from "@/app/constants/types";
import Image from "next/image";
import Link from "next/link";
import renderRichTextToReactComponent from "../utils/rich-text";

const styles = {
  bannerSection: "flex-1/3 flex justify-center items-center",
  wrapper: "w-full bg-gray-200 h-48 px-5 flex items-center",
  container: "flex flex-row w-4/5 mx-auto justify-evenly",
};

export default function EventBanner({ section }: { section: PageSectionType }) {
  const eventBanner = section.fields.eventBanner;
  const eventBannerImage = eventBanner.fields.image;
  // console.log(eventBanner);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          className={styles.bannerSection}
          src={eventBannerImage.fields.file.url}
          alt={eventBanner.fields.title}
          width={180}
          height={180}
        />
        <div className={`${styles.bannerSection}`}>
          {renderRichTextToReactComponent(eventBanner.fields.content)}
        </div>
        <div className={styles.bannerSection}>
          <Link
            href={eventBanner.fields.buttonLink}
            className={`${styles.bannerSection} px-6 py-2 bg-blue-500 text-white rounded-lg`}
          >
            VIEW EVENT
          </Link>
        </div>
      </div>
    </section>
  );
}
