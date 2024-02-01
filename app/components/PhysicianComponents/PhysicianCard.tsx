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
    <Link href={`/physicians/${physician.slug}`} className="hover:shadow-lg">
      <div className="bg-[#0076AD] rounded-lg md:border md:bg-card md:text-card-foreground shadow-sm">
        <div className="flex flex-row md:flex-col items-center h-28 md:h-auto">
          <Image
            src={physician.portrait.fields.file.url}
            width={219}
            height={273}
            alt={physician.portrait.fields.description}
            className="w-28 h-28 p-1.5 md:p-4 md:w-auto md:h-[273px]"
          />
          <Title3 className="leading-[30px] text-white md:text-black pl-3 md:px-4">
            {physician.name}
          </Title3>
        </div>
      </div>
    </Link>
  );
}
