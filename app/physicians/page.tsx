import Link from "next/link";
import Image from "next/image";
//LOCAL COMPONENTS
import { getPhysicians } from "@/app/utils/contentful";
import SearchBar from "@/app/components/ui/SearchBar";
import { PhysicianBioType } from "@/app/constants/types";
//TYPES
import renderRichTextToReactComponent from "../utils/rich-text";
import { Document } from "@contentful/rich-text-types";

export default async function Physicians() {
  const physicians = (await getPhysicians()) as unknown as PhysicianBioType[];

  return (
    <main>
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {physicians.map((physician) => (
          <Link key={physician.name} href={`/physicians/${physician.slug}`}>
            <div className="border rounded-lg p-4 shadow-md border-zinc-500 md:border-black md:border-opacity-10  flex flex-col md:flex-row items-center gap-5">
              <div className="flex-none w-2/3 md:w-1/3 h-auto">
                <Image
                  src={physician.portrait.fields.file.url}
                  alt=""
                  width={physician.portrait.fields.file.details.image.width}
                  height={physician.portrait.fields.file.details.image.height}
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="text-lg font-bold">{physician.name}</h2>
                <h5> Specializes in: </h5>
                <div className="md:text-md md:mb-4  md:pl-4 text-base">
                  {renderRichTextToReactComponent(
                    physician.specialties as unknown as Document,
                  )}
                </div>
                <p>For Patients: {physician.appointmentNumber}</p>
                <p>For Physicians: {physician.physicianNumber}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
