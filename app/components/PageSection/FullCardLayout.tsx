// Next components
import Image from "next/image";
// Types
import { CardLayoutProps } from "@/app/constants/types";
// Custom components
import { TitleComponent } from "@/app/components/ui/Typography/Title";

const styles = {
  pageSectionContent: "",
  actionButton:
    "block mx-auto text-center w-full bg-blue-500 rounded text-white p-2",
};

// This component is primary used for the Specialties sections.
export default function CardLayout({
  title,
  bold,
  titleSize,
  description,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
}: CardLayoutProps) {
  return (
    <section className="grid grid-cols-2 gap-20 border rounded shadow-md w-4/5 mx-auto my-10 p-20">
      <div className="col-span-1">
        <div className={styles.pageSectionContent}>
          <TitleComponent title={title} bold={bold} titleSize={titleSize} />

          <p>{description}</p>
        </div>
      </div>

      <div className="col-span-1">
        {imageUrl && (
          <div className="w-full mx-auto">
            <Image
              className="mx-auto"
              src={`https:${imageUrl}`}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
            />
          </div>
        )}
      </div>
    </section>
  );
}
