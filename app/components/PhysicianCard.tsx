import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PhysicianBioType } from "../constants/types";
import { Title3 } from "./ui/Typography/Title";

export default function PhysicianCard({
  physician,
}: {
  physician: PhysicianBioType;
}) {
  return (
    <Card className="w-fit h-fit">
      <div className="flex flex-col items-center h-min px-5 py-5">
        <Image
          src={physician.physicianPortrait.fields.file.url}
          width={219}
          height={273}
          alt={physician.physicianPortrait.fields.description}
        />
        <Title3 className="leading-[30px]">{physician.physicianName}</Title3>
      </div>
    </Card>
  );
}
