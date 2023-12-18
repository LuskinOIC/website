import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PhysicianBioType } from "../constants/types"
import { Title3 } from "./ui/Typography/Title";

export default function PhysicianCard({
  physician,
}: {
  physician: PhysicianBioType;
}) {
  console.dir(physician);
  console.dir(physician.physicianPortrait);

  return (
    <Card>
      <div className="flex flex-col">
        <Image
          src={physician.physicianPortrait.fields.file.url}
          width={219}
          height={273}
          alt={physician.physicianPortrait.fields.description}
        />
        <Title3>{physician.physicianName}</Title3>
      </div>
    </Card>
  );
}
