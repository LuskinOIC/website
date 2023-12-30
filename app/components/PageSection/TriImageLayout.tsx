// Next components
import Image from "next/image";
// Types
import { TriImageType } from "@/app/constants/types";

export default function TriImageLayout({
  section,
}: {
  section: TriImageType[];
}) {
  return(
    <section className="flex">
      {/* map over images array from TriImageType */}
      {/* display image */}
      {section.map((image: any, i: number) => {
        return(
          <div
            key={i}
            className="">
            <Image 
              src={image.fields.file.url}
              alt={image.fields.title}
              // style={}
              width={500}
              height={500}
            />
          </div>
        )
      })}
    </section>
  )
}