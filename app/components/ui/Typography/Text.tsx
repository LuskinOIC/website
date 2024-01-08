import React from "react";
import { cn } from "@/lib/utils";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export function Text1({ children, className = "" }: TextProps) {
  const classes = cn("text-base md:text-2xl font-arial leading-150", className);
  return <p className={classes}>{children}</p>;
}

export function Text2({ children, className = "" }: TextProps) {
  const classes = cn("text-base md:text-lg font-arial leading-150 ", className);
  return <p className={classes}>{children}</p>;
}

export function Text3({ children, className = "" }: TextProps) {
  const classes = cn("text-base md:text-lg font-arial leading-150 ", className);
  return <p className={classes}>{children}</p>;
}

export function Text4({ children, className = "" }: TextProps) {
  const classes = cn(
    "text-base md:text-base font-arial leading-150 ",
    className,
  );
  return <p className={classes}>{children}</p>;
}
