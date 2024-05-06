import { PhysicianBioType } from "@/app/constants/types";
import PhysicianCard from "@/app/providers/PhysicianComponents/PhysicianCard";
import { Title3 } from "@/app/components/ui/Typography/Title";

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
        <Title3 className="leading-10 uppercase text-luskin-blue font-medium">
          {specialistsTitle}
        </Title3>
      ) : null}
<<<<<<< Updated upstream
      <div className="grid grid-rows md:grid-cols-5 gap-y-2 md:gap-x-2">
=======
      <div className="grid grid-rows lg:grid-cols-3 gap-y-2 lg:gap-x-2">
>>>>>>> Stashed changes
        {physicians.map((phys, index) => (
          <PhysicianCard key={index} physician={phys.fields} />
        ))}
      </div>
    </div>
  );
}
