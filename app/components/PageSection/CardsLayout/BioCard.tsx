import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BioCardType } from "@/app/constants/types";
import { Title3 } from "../../ui/Typography/Title";
import { cn } from "@/lib/utils";

const styles = {
  container:
    "bg-[#0076AD] rounded-lg md:border md:bg-card md:text-card-foreground",
  header:
    "md:pb-0 md:self-center md:text-center text-white md:text-black leading-0 md:leading-0 md:min-h-[50px] md:font-medium",
  paragraph:
    "text-sm lg:flex lg:min-h-[30px] lg:text-lg lg:text-center lg:items-center lg:mx-auto text-white lg:text-black ",
  image: "w-28 h-28 lg:w-60 lg:h-auto lg:mx-auto p-2 lg:p-6",
  textDesktop: "hidden lg:flex flex-col justify-center pb-4 px-2",
  textMobile: "pl-2 flex flex-col justify-center lg:hidden self-center",
};

export function BioCardContainer({
  children,
  cardLink,
  className,
}: {
  children: React.ReactNode;
  cardLink?: string;
  className: string;
}) {
  if (cardLink) {
    return (
      <Link href={cardLink} className={className}>
        {children}
      </Link>
    );
  } else {
    return <div className={className}>{children}</div>;
  }
}

export default function BioCard({
  name,
  portrait,
  leadershipRole,
  classNames,
  cardLink,
}: BioCardType) {
  const desktopLeadershipRole = leadershipRole ? leadershipRole : "\u00A0";

  return (
    <BioCardContainer
      cardLink={cardLink}
      className={cn(styles.container, classNames)}
    >
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
    </BioCardContainer>
  );
}
