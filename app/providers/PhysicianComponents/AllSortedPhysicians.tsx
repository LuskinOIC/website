import {
  AllPhysiciansProps,
  CardsRowType,
  PhysicianPageSectionType,
} from "@/app/constants/types";
import PhysiciansGridLayout from "@/app/providers/PhysicianComponents/PhysiciansGridLayoutSection";

export default function AllPhysicians({
  sortedPhysicians,
}: AllPhysiciansProps) {
  const extractBioCards = (physicianGroup: PhysicianPageSectionType) =>
    physicianGroup.fields.cardsLayout
      .flatMap(
        (cardLayout: { fields: { bioCards: CardsRowType[] } }) =>
          cardLayout.fields.bioCards,
      )
      .map((physician: any) => physician.fields);
  return (
    <>
      {sortedPhysicians.map((physicianGroup) => (
        <PhysiciansGridLayout
          key={physicianGroup.fields.title}
          title={physicianGroup.fields.title}
          physicians={extractBioCards(physicianGroup)}
        />
      ))}
    </>
  );
}
