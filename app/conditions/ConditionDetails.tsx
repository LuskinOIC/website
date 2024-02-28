import { Title3 } from "@/app/components/ui/Typography/Title";
import Button from "@/app/components/ui/Button";
import RelatedSpecialtiesComponent from "@/app/conditions/RelatedSpecialties";
import { ConditionsType } from "@/app/constants/types";

const styles = {
  termBox: "grid grid-cols-5 border rounded px-[27px] py-[30px] my-3",
  detailsColumn: "col-span-4 flex flex-col gap-y-3 px-2",
  learnMore: "col-span-1 self-end",
  title: "text-[#0076AD] md:leading-0 py-0",
};

interface ConditionItemProps {
  condition: ConditionsType;
}

const ConditionItem = ({ condition }: ConditionItemProps) => {
  return (
    <div id={condition.term} className={styles.termBox}>
      <div className={styles.detailsColumn}>
        <Title3 className={styles.title}>{condition.term}</Title3>
        <p>{condition.definition}</p>
        {condition.relatedSpecialties && (
          <RelatedSpecialtiesComponent
            relatedSpecialties={condition.relatedSpecialties}
          />
        )}
      </div>

      <div className={styles.learnMore}>
        <Button
          text="Learn More"
          href={`/conditions/${condition.slug}/learn-more`}
          className="uppercase"
          variant="bluePrimary"
        />
      </div>
    </div>
  );
};

export default ConditionItem;
