import Image from "next/image";
import { PhysicianBioType } from "../constants/types";
import { Title3 } from "./ui/Typography/Title";

export default function PhysicianCard({
  physician,
}: {
  physician: PhysicianBioType;
}) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col items-center h-min px-5 py-5">
        <Image
          src={physician.portrait.fields.file.url}
          width={219}
          height={273}
          alt={physician.portrait.fields.description}
        />
        <Title3 className="leading-[30px]">{physician.name}</Title3>
      </div>
    </div>
  );
}
