// Next components
import Image from "next/image";
// Types
import { CardLayoutProps } from "@/app/constants/types";
// Custom components
import { TitleComponent } from "@/app/components/ui/Typography/Title";
import { renderRichTextToReactComponent } from "@/app/utils/rich-text";
import Button from "@/app/components/ui/Button";
import { Text1, Text2 } from "@/app/components/ui/Typography/Text";
//Icons
import phone from "@/public/phone.svg";
import mapPin from "@/public/map-pin.svg";
import clock from "@/public/clock.svg";

// This component is primary used for the Specialties sections.
export default function CardLayout({
  title,
  bold,
  titleSize,
  // description,
  imageUrl,
  imageAlt,
  //TEMP description declaration in Contentful
  longText,
}: CardLayoutProps) {
  const descriptionContent = renderRichTextToReactComponent(longText);
  return (
    <>
      {/* DESKTOP */}
      <section className="hidden md:grid grid-cols-2 gap-20 border rounded shadow-md w-9/12 xlg:w-6/12 mx-auto my-10 p-20">
        <div className="grid gap-5">
          <TitleComponent title={title} bold={bold} titleSize={titleSize} />
          <div className="text-xl">{descriptionContent}</div>
          <Button href="/" text="SAVE MY SPOT" />
          <div className="flex flex-col gap-3">
            <div className="flex gap-5">
              <Image src={clock} alt="clock" />
              <Text2>
                Monday - Friday: 8am - 4pm
                <br />
                Closed: Saturday and Sunday
              </Text2>
            </div>
            <div className="flex gap-5">
              <Image src={phone} alt="phone" />
              <Text2>(213) 742-1162</Text2>
            </div>
            <div className="flex gap-5">
              <Image src={mapPin} alt="mapPin" />
              <Text2>
                403 West Adams Boulevard
                <br />
                Los Angeles, CA 90007
              </Text2>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-5 gap-5">
          {imageUrl && (
            <div className="relative w-full row-span-3 mb-6">
              <Image
                className="rounded"
                src={`https:${imageUrl}`}
                alt="My image"
                layout="cover"
                fill
              />
            </div>
          )}
          <div className="flex flex-col gap-3 row-span-2">
            <Text1 className="">
              Walk-ins welcome. No appointment necessary.
            </Text1>
            {/* TO DO: PROVIDE FORMS FOR DOWNLOAD */}
            {/* <Text1 className="underline">Urgent Care Registration Form - English</Text1>
            <Text1 className="underline">Urgent Care Registration Form - Spanish</Text1> */}
          </div>
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
          <div>{descriptionContent}</div>
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
// -Correct type declarations
// -Fix description declaration in Contentful for rich text
