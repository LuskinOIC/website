import { getPhysicians } from "@/app/utils/contentful";
import SearchBar from "@/app/components/ui/SearchBar";
import { PhysicianBioType } from "@/app/constants/types";
import Image from "next/image";
import renderRichTextToReactComponent from "../utils/rich-text";
import { Document } from "@contentful/rich-text-types";

export default async function Physicians() {
  // TEMP fix for linter
  const physicians = (await getPhysicians()) as unknown as PhysicianBioType[];

  return (
    <main>
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {physicians.map((physician) => (
          <div
            key={physician.name}
            className="border rounded-lg p-4 shadow-md flex"
          >
            <div className="flex-none w-1/3 mr-4">
              <Image
                src={physician.portrait.fields.file.url}
                alt=""
                width={physician.portrait.fields.file.details.image.width}
                height={physician.portrait.fields.file.details.image.height}
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-bold">{physician.name}</h2>
              <h5> Specializes in: </h5>
              <div className="md:text-md mb-4 pl-4 text-base">
                {renderRichTextToReactComponent(
                  physician.specialties as unknown as Document,
                )}
              </div>
              <p>For Patients: {physician.appointmentNumber}</p>
              <p>For Physicians: {physician.physicianNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
