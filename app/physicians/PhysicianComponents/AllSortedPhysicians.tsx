import { AllPhysiciansProps } from "@/app/constants/types";
import PhysiciansGridLayout from "@/app/physicians/PhysicianComponents/PhysiciansGridLayoutSection";

export default function AllPhysicians({
  sortedPhysicians,
}: AllPhysiciansProps) {
  const mdPhysiciansBioCards = sortedPhysicians[0].fields.cardsLayout
    .flatMap((cardLayout) => cardLayout.fields.bioCards)
    .map((physician) => physician.fields);

  const paNpPhysiciansBioCards = sortedPhysicians[1].fields.cardsLayout
    .flatMap((cardLayout) => cardLayout.fields.bioCards)
    .map((physician) => physician.fields);
  return (
    <>
      <PhysiciansGridLayout
        title="OUR PHYSICIANS"
        physicians={mdPhysiciansBioCards}
      />
      <PhysiciansGridLayout
        title="OUR PHYSICIAN'S ASSISTANTS & NURSE PRACTIONERS"
        physicians={paNpPhysiciansBioCards}
      />
    </>
  );
}
