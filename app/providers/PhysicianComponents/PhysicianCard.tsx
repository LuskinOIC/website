import Image from "next/image";
import { PhysicianBioType } from "@/app/constants/types";
import { Title3 } from "@/app/components/ui/Typography/Title";
import Link from "next/link";
import { getProviderFormattedPath } from "@/app/providers/PhysicianComponents/formattingProviderPath";

const styles = {
  cardContainer:
    "lg:min-h-[273px] bg-[#0076AD] rounded-lg lg:border lg:bg-card lg:text-card-foreground py-2 px-4",
  interactiveStates: "shadow-md lg:shadow-sm hover:shadow-lg",
  contentContainer: "flex flex-row lg:flex-col items-center",
  image: "w-28 h-28 p-1.5 lg:w-auto lg:h-auto",
  title:
    "pl-4 lg:px-2 lg:py-4 text-center lg:leading-none text-white lg:text-black",
};

const CardContent = ({ physician }: { physician: PhysicianBioType }) => {
  return (
    <div className={styles.contentContainer}>
      <Image
        src={physician.portrait.fields.file.url}
        width={219}
        height={273}
        alt={physician.portrait.fields.description}
        className={styles.image}
      />
      <Title3 className={styles.title}>{physician.name}</Title3>
    </div>
  );
};

export default function PhysicianCard({
  physician,
}: {
  physician: PhysicianBioType;
}) {
  const shouldWrapWithLink = physician.topSummary;
  return shouldWrapWithLink ? (
    <Link
      href={getProviderFormattedPath(physician.providerType, physician.slug)}
      className={`${styles.cardContainer} ${styles.interactiveStates}`}
    >
      <CardContent physician={physician} />
    </Link>
  ) : (
    <div className={styles.cardContainer}>
      {" "}
      <CardContent physician={physician} />{" "}
    </div>
  );
}
