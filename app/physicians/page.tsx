import { getPhysicians } from "@/app/utils/contentful";
import SearchBar from "@/app/components/ui/SearchBar";
import { PhysicianBioType } from "@/app/constants/types";
import Image from "next/image";

export default async function Physicians() {
  const physicians = (await getPhysicians()) as PhysicianBioType[];

  return (
    <main>
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {physicians.map((physician) => (
          <div
            key={physician.physicianName}
            className="border rounded-lg p-4 shadow-md flex"
          >
            <div className="flex-none w-1/3 mr-4">
              <Image
                src={physician.physicianPortrait.fields.file.url}
                alt=""
                width={
                  physician.physicianPortrait.fields.file.details.image.width
                }
                height={
                  physician.physicianPortrait.fields.file.details.image.height
                }
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-bold">{physician.physicianName}</h2>
              {/* Add more physician details here */}
              {/* Add other details as needed */}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
