import { getSpecialties } from "@/app/utils/contentful";
import FullCardLayout from "@/app/components/PageSection/FullCardLayout";
import SearchBar from "@/app/components/ui/SearchBar";

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <main>
      <SearchBar />

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
