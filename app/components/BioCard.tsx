import Image from "next/image";
import { BioCardType } from "@/app/constants/types";
import { Title3 } from "./ui/Typography/Title";
import { cn } from "@/lib/utils";

const styles = {
  container:
    "bg-[#0076AD] rounded-lg md:border md:bg-card md:text-card-foreground flex flex-row md:flex-col justify-start",
  header:
    "md:pb-0 md:self-center md:text-center text-white md:text-black leading-0 md:leading-0 md:min-h-[50px] md:font-medium",
  paragraph:
    "text-sm md:flex md:min-h-[30px] md:text-lg md:text-center md:items-center md:mx-auto text-white md:text-black ",
  image: "w-28 h-28 md:w-full md:h-auto md:mx-auto p-2 md:p-6",
  textDesktop: "hidden md:flex flex-col justify-center pb-4 px-2",
  textMobile: "flex flex-col justify-center md:hidden",
};

export default function BioCard({
  name,
  portrait,
  leadershipRole,
  classNames,
}: BioCardType) {
  const desktopLeadershipRole = leadershipRole ? leadershipRole : "\u00A0";
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
      <div className={styles.textDesktop}>
        {name && <Title3 className={styles.header}>{name}</Title3>}
        {leadershipRole && (
          <p className={styles.paragraph}> {desktopLeadershipRole} </p>
        )}
      </div>
      <div className={styles.textMobile}>
        {name && <Title3 className={styles.header}>{name}</Title3>}
        {leadershipRole ? (
          <p className={`${styles.paragraph}`}>{leadershipRole}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
