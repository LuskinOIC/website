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
      <div className="text-sky-700 text-xl font-normal font-['Arial'] leading-[30px] px-5 md:px-24 py-4 md:py-10">
        {title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-24">
        {physicians.map((physician) => (
          <Link key={physician.name} href={`/physicians/${physician.slug}`}>
            <div className="border rounded-lg p-4 shadow-md border-zinc-500 md:border-black md:border-opacity-10 grid md:grid-cols-2 gap-12">
              <div className="">
                <Image
                  src={physician.portrait.fields.file.url}
                  alt=""
                  width={physician.portrait.fields.file.details.image.width}
                  height={physician.portrait.fields.file.details.image.height}
                />
              </div>
              <div className="">
                <h2 className="text-lg font-bold">{physician.name}</h2>
                <h5>Specializes in:</h5>
                <div className="md:text-md md:mb-4  md:pl-4 text-base">
                  {renderRichTextToReactComponent(
                    physician.specialties as unknown as Document,
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
