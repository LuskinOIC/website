import React from "react";
import Link from "next/link";
import Image from "next/image";
// LOCAL COMPONENTS
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { PhysicianBioType } from "@/app/constants/types";
import { Document } from "@contentful/rich-text-types";

interface PhysiciansGridLayoutProps {
  title: string;
  physicians: PhysicianBioType[];
}

const PhysiciansGridLayout: React.FC<PhysiciansGridLayoutProps> = ({
  title,
  physicians,
}) => {
  return (
    <>
      <div className="text-sky-700 text-xl font-normal font-['Arial'] leading-[30px] mb-6">
        {title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {physicians.map((physician) => (
          <Link key={physician.name} href={`/physicians/${physician.slug}`}>
            <div className="border rounded-lg p-4 shadow-md border-zinc-500 md:border-black md:border-opacity-10 grid md:grid-cols-2 gap-12 md:h-full justify-items-center">
              <div style={{ maxWidth: "280px" }}>
                <Image
                  src={physician.portrait.fields.file.url}
                  alt=""
                  width={physician.portrait.fields.file.details.image.width}
                  height={physician.portrait.fields.file.details.image.height}
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-4 place-self-start">
                <h2 className="text-lg font-bold">{physician.name}</h2>
                <h5>Specializes in:</h5>
                <div className="md:text-md md:mb-4 text-base">
                  {renderRichTextToReactComponent(
                    physician.specialties as unknown as Document
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PhysiciansGridLayout;
