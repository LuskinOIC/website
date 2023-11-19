import { getSpecialties } from "@/app/utils/contentful";
import FullCardLayout from "@/app/components/PageSection/FullCardLayout";

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <main>
      <div className="flex justify-center my-4">
        <div className="relative w-2/3">
          <input
            type="text"
            placeholder="Search..."
            className="pl-4 pr-20 py-2 rounded-l-md border border-r-0 w-full"
          />
          <button className="absolute right-0 top-0 px-4 py-2 bg-blue-500 text-white rounded-r-md border border-blue-500">
            Search
          </button>
        </div>
      </div>

      <div>
        {specialties.map((specialty) => (
          <FullCardLayout
            key={specialty.id}
            title={specialty.name}
            bold={false}
            titleSize="text-2xl"
            description={specialty.description}
            imageUrl={specialty.image.fields.file.url}
            imageAlt={specialty.image.fields.description}
            imageWidth={specialty.image.fields.file.details.image.width}
            imageHeight={specialty.image.fields.file.details.image.height}
          />
        ))}
      </div>
    </main>
  );
}
