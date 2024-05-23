import React, { useEffect, useState } from "react";
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

const isExternalLink = (url: string) => {
  try {
    const link = new URL(url);
    return link.hostname !== window.location.hostname;
  } catch (e) {
    return false;
  }
};

export const ClickableCardWrapper = ({
  cardLink = "/",
  children,
  className = "",
}: ClickableCardWrapperProps) => {
  // NOTE: using useState b/c there is an issue where invoking the method initially on page load
  // does not behave as expected.
  const [isExternal, setIsExternal] = useState(false);
  const combinedClassNames = cn(styles.cardShadow, className);

  useEffect(() => {
    setIsExternal(isExternalLink(cardLink));
  }, [cardLink]);

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
