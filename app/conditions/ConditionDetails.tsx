import { Title3 } from "@/app/components/ui/Typography/Title";

import { SpecialtyType } from "@/app/constants/types";

export type ConditionsType = {
  slug: string;
  term: string;
  definition: string;
  relatedSpecialties?: SpecialtyType[];
};

interface ConditionDetailsProps {
  condition: ConditionsType;
}
const ConditionDetails = ({ condition }: ConditionDetailsProps) => {
  return (
    <>
      <Title3 className="text-[#0076AD] md:leading-0 py-0">
        {condition.term}
      </Title3>
      <p>{condition.definition}</p>
    </>
  );
};

export default ConditionDetails;
