import Image from "next/image";
// Types
import { MultiImageType } from "@/app/constants/types";

type GalleryImagesProps = {
  section: MultiImageType["fields"]["images"];
};

const styles = {
  gridContainer: "grid lg:grid-cols-3 gap-4 pt-6 lg:pt-10",
  postsItem: "relative w-full h-[300px] rounded-xl",
  fullSpan: "lg:col-span-3",
  oneColumn: "lg:col-span-1",
  twoColumn: "lg:col-span-2",
  imageContainer: "w-full h-full overflow-hidden rounded-xl",
  image: "w-full h-full object-cover rounded-xl",
};

const getClassNames = (index: number, isLast: boolean) => {
  if (isLast && index % 2 != 0) {
    return styles.fullSpan;
  }

  switch (index % 7) {
    case 0:
      return styles.fullSpan;
    case 1:
      return styles.oneColumn;
    case 2:
      return styles.twoColumn;
    case 3:
      return styles.twoColumn;
    case 4:
      return styles.oneColumn;
    case 5:
      return styles.oneColumn;
    case 6:
      return styles.twoColumn;
    default:
      return "";
  }
};

export default function GalleryImages({ section }: GalleryImagesProps) {
  return (
    <div className={styles.gridContainer}>
      {section &&
        section.map((image, index: number) => (
          <div
            key={index}
            className={`${styles.postsItem} ${getClassNames(
              index,
              index === section.length - 1,
            )}`}
          >
            <div className={styles.imageContainer}>
              <Image
                src={image.fields.file.url}
                alt={image.fields.file.fileName}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                className={styles.image}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
