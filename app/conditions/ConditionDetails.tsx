import { Title3 } from "@/app/components/ui/Typography/Title";
import RelatedSpecialtiesComponent from "@/app/conditions/RelatedSpecialties";
import { ConditionsType } from "@/app/constants/types";
import Link from "next/link";

const styles = {
  desktopTermBox:
    "hidden md:grid grid-rows gap-y-3 h-full border rounded px-[27px] py-[30px] my-5",
  mobileTermBox:
    "flex justify-center text-center w-full bg-[#0076AD] my-4 p-6 rounded-xl md:hidden",
  learnMore: "underline underline-offset-4 hover:text-[#0076AD]",
  title: "text-white font-semibold md:text-[#0076AD] md:leading-0 py-0",
  definition: "line-clamp-2",
};

interface ConditionItemProps {
  condition: ConditionsType;
}

const ConditionItem = ({ condition }: ConditionItemProps) => {
  return (
    <>
      <div id={condition.term} className={styles.desktopTermBox}>
        <Title3 className={styles.title}>{condition.term}</Title3>
        <p className={styles.definition}>{condition.definition}</p>
        <p>
          <a
            href={`/conditions/${condition.slug}/learn-more`}
            className={styles.learnMore}
          >
            Learn More
          </a>
        </p>
        {condition.relatedSpecialties && (
          <RelatedSpecialtiesComponent
            relatedSpecialties={condition.relatedSpecialties}
          />
        )}
      </div>

      <Link
        href={`/conditions/${condition.slug}/learn-more`}
        className={styles.mobileTermBox}
      >
        <Title3 className={styles.title}>{condition.term}</Title3>
      </Link>
    </>
  );
};

export default ConditionItem;
