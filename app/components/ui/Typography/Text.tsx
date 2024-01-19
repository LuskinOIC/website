import React from "react";
import { cn } from "@/lib/utils";

export type TextSize = "regular" | "small" | undefined;

type TextProps = {
  children: React.ReactNode;
  className?: string;
  size?: TextSize;
};

const styles = {
  textSize: {
    regular: "text-base md:text-lg",
    small: "text-base",
  },
  font: "font-arial",
};

export function Text({
  children,
  className = "",
  size = "regular",
}: TextProps) {
  const classes = cn(styles.textSize[size], styles.font, className);
  return <p className={classes}>{children}</p>;
}
