import { PhysicianBioType } from "../constants/types";
import PhysicianCard from "./PhysicianCard";
import { Title3 } from "./ui/Typography/Title";

export default function PhysicianList({
  specialistsTitle,
  physicians,
  className,
}: {
  specialistsTitle?: string;
  physicians: Array<{
    fields: PhysicianBioType;
  }>;
  className?: string;
}) {
  return (
    <div className={className}>
      {specialistsTitle ? (
        <Title3 className="pl-[15%] ml-4 leading-10 uppercase text-luskin-blue font-medium">
          {specialistsTitle}
        </Title3>
      ) : null}
      <div className="w-full px-[15%] grid mb-5">
        {physicians.map((phys, index) => (
          <PhysicianCard key={index} physician={phys.fields} />
        ))}
      </div>
    </div>
  );
}
