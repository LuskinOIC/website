// Next components
import Image from "next/image";
// Types
import { CardLayoutProps } from "@/app/constants/types";
// Custom components
import { TitleComponent } from "@/app/components/ui/Typography/Title";
import { renderRichTextToReactComponent } from "@/app/utils/rich-text";
import Button from "@/app/components/ui/Button";
import { Text1 } from "@/app/components/ui/Typography/Text";
//Images
import phone from "@/public/phone.svg";
import mapPin from "@/public/map-pin.svg";

// This component is primary used for the Specialties sections.
export default function CardLayout({
  title,
  bold,
  titleSize,
  // description,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  //TEMP description declaration in Contentful
  longText = "",
}: CardLayoutProps) {
  const descriptionContent = renderRichTextToReactComponent(longText);
  return (
    <>
      {/* DESKTOP */}
      <section className="hidden md:grid grid-cols-2 gap-20 border rounded shadow-md w-4/5 mx-auto my-10 p-20">
        <div className="">
          <TitleComponent title={title} bold={bold} titleSize={titleSize} />
          {descriptionContent}
        </div>

        <div className="">
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
          <Button href="/" text="SAVE MY SPOT" />
        </div>
      </section>

      {/* MOBILE */}
      <section className="grid md:hidden gap-2 border border-zinc-300 rounded shadow-md mx-2 my-5">
        <div className="">
          {imageUrl && (
            <div className="w-full">
              <Image
                className=""
                src={`https:${imageUrl}`}
                alt={imageAlt}
                sizes="100vw"
                width={0}
                height={0}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          )}
        </div>
        <div className="grid gap-4 justify-items-start pl-5 pr-12 py-6">
          <TitleComponent title={title} bold={bold} titleSize={titleSize} />
          {descriptionContent}
          <Button className="my-3" href="/" text="SAVE MY SPOT" />
          <Text1>
            Monday - Friday: 8am - 4pm
            <br />
            Closed: Saturday and Sunday
          </Text1>
          <Text1>Walk-ins welcome. No appointment necessary.</Text1>
          <div className="flex gap-5">
            <Image src={phone} alt="phone" className="" />
            <Text1>(213) 742-1162</Text1>
          </div>
          <div className="flex gap-5">
            <Image src={mapPin} alt="phone" className="" />
            <Text1>
              403 West Adams Boulevard
              <br />
              Los Angeles, CA 90007
            </Text1>
          </div>
        </div>
      </section>
    </>
  );
}

// To DO:
// -combine styling changes to not have to render two different SpeechRecognitionResult
// -Image in contentful should have straight edges
// -Correct type declarations
// -Fix description declaration in Contentful for rich text
