import Image from "next/image";
import { PhysicianBioType } from "@/app/constants/types";
import { Title3 } from "@/app/components/ui/Typography/Title";
import Link from "next/link";
import { getProviderFormattedPath } from "@/app/providers/PhysicianComponents/formattingProviderPath";

const styles = {
  cardContainer:
    "md:min-h-[273px] bg-[#0076AD] rounded-lg md:border md:bg-card md:text-card-foreground",
  interactiveStates: "shadow-md md:shadow-sm hover:shadow-lg",
  contentContainer: "flex flex-row md:flex-col items-center",
  image: "w-28 h-28 p-1.5 md:w-auto md:h-auto",
  title: "md:px-2 md:py-4 text-center md:leading-none text-white md:text-black",
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