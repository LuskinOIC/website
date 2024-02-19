import Image from "next/image";
import { BioCardType } from "@/app/constants/types";
import { Title3 } from "./ui/Typography/Title";
import { cn } from "@/lib/utils";

const styles = {
  container:
    "md:min-h-[273px] bg-[#0076AD] rounded-lg md:border md:bg-card md:text-card-foreground shadow-sm hover:shadow-lg flex flex-col justify-between",
  header: " text-center text-white md:text-black md:leading-0",
  paragraph: "text-center pb-2",
  image: "w-28 h-28 md:w-auto md:h-auto mx-auto p-3",
  textContainer: "flex flex-col py-4 px-2",
};

export default function BioCard({
  name,
  portrait,
  leadershipRole,
  classNames,
}: BioCardType) {
  leadershipRole ? { leadershipRole } : (leadershipRole = "\u00A0");
  return (
    <div id="BioCard" className={cn(styles.container, classNames)}>
      {portrait && (
        <Image
          alt={`portrait-${name}`}
          src={portrait.fields.file.url}
          width={219}
          height={273}
          className={styles.image}
        />
      )}
      {name && <Title3 className={styles.header}>{name}</Title3>}
      {leadershipRole && <p className={styles.paragraph}>{leadershipRole}</p>}
    </div>
  );
}
