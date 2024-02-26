import Image from "next/image";
import { PhysicianBioType } from "@/app/constants/types";
import { Title3 } from "@/app/components/ui/Typography/Title";
import Link from "next/link";

export default function PhysicianCard({
  physician,
}: {
  physician: PhysicianBioType;
}) {
  return (
    <Link
      href={`/physicians/${physician.slug}`}
      className="md:min-h-[273px] bg-[#0076AD] rounded-lg md:border md:bg-card md:text-card-foreground shadow-sm hover:shadow-lg"
    >
      <div className="flex flex-row md:flex-col items-center ">
        <Image
          src={physician.portrait.fields.file.url}
          width={219}
          height={273}
          alt={physician.portrait.fields.description}
          className="w-28 h-28 p-1.5 md:w-auto md:h-auto"
        />
        <Title3 className="md:px-2 md:py-4 text-center md:leading-none text-white md:text-black">
          {physician.name}
        </Title3>
      </div>
    </Link>
  );
}