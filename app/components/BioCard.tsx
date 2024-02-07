import Image from "next/image";
import { BioCardType } from "@/app/constants/types";
import { Title3 } from "./ui/Typography/Title";
import { cn } from "@/lib/utils";

const styles = {
  container:
    "md:min-h-[273px] bg-[#0076AD] rounded-lg md:border md:bg-card md:text-card-foreground shadow-sm hover:shadow-lg",
  header: "pl-3 md:px-2 text-center leading-[30px] text-white md:text-black",
  image: "w-28 h-28 p-1.5 md:w-auto md:h-auto",
  wrapperDiv: "flex flex-row md:flex-col items-center",
};

export default function BioCard({ name, portrait, classNames }: BioCardType) {
  return (
    <div className={cn(styles.container, styles.wrapperDiv, classNames)}>
      <Image
        alt={`portrait-${name}`}
        src={portrait.fields.file.url}
        width={219}
        height={273}
        className={styles.image}
      />
      <Title3 className={styles.header}>{name}</Title3>
    </div>
  );
}
