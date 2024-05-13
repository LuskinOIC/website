import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ClickableCardWrapperProps = {
  cardLink?: string;
  children: React.ReactNode;
  className?: string;
};

const styles = {
  cardShadow: "shadow-lg hover:shadow-2xl",
};

const isExternalLink = (url: string): boolean => {
  if (
    // eslint-disable-next-line no-useless-escape
    /^\/[^\/]?/.test(url) ||
    url.includes("luskin.org") ||
    url.includes("luskinoic.org")
  ) {
    return false;
  }
  if (/^(http|https):\/\//.test(url)) {
    return !url.includes("luskin.org") && !url.includes("luskinoic.org");
  }
  return true;
};

export const ClickableCardWrapper = ({
  cardLink = "/",
  children,
  className = "",
}: ClickableCardWrapperProps) => {
  const combinedClassNames = cn(styles.cardShadow, className);

  const isExternal = isExternalLink(cardLink);

  return isExternal ? (
    <a
      href={cardLink}
      target="_blank"
      rel="noopener noreferrer"
      className={combinedClassNames}
    >
      {children}
    </a>
  ) : (
    <Link href={cardLink} className={combinedClassNames}>
      {children}
    </Link>
  );
};
