import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "bluePrimary"
  | "yellowPrimary"
  | "text"
  | "none"
  | "purple"
  | "blueSecondary"
  | "physicians"
  | undefined;

export interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  text?: string;
  children?: React.ReactNode;
  isExternal?: boolean;
}

export const styles = {
  buttonContainer: "flex w-fit rounded-[10px]",
  buttonAlignment: "px-2 lg:px-4 py-3 justify-center items-center inline-flex",
  buttonText:
    "text-base text-white font-bold leading-[20px] uppercase tracking-wide",
};

const convertVariant = (variantFromContentful: string) => {
  switch (variantFromContentful) {
    case "primary blue":
      return "bluePrimary";
    case "secondary blue":
      return "blueSecondary";
    case "primary yellow":
      return "yellowPrimary";
    case "blue":
      return "bluePrimary";
    case "yellow":
      return "yellowPrimary";
    case "save my spot":
      return "purple";
    default:
      return variantFromContentful ? variantFromContentful : "none";
  }
};

const Button = ({
  href,
  variant = "none",
  className,
  children,
  text,
  isExternal = false,
}: ButtonProps) => {
  const convertedVariant = convertVariant(variant);
  const classes = cn(
    styles.buttonContainer,
    styles.buttonAlignment,
    styles.buttonText,
    {
      bluePrimary: "bg-[#0076AD]",
      purple: "bg-[#825AA4]",
      yellowPrimary: "bg-amber-200 text-neutral-900",
      text: "p-0 underline",
      none: "",
      blueSecondary: "bg-[#FFFFFF] text-[#0076AD] border-2 border-[#0076AD]",
      physicians: "bg-[#FFFFFF] text-[#171515] border-2 border-[#99C221]",
    }[convertedVariant],
    className,
  );
  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children || text}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children || text}
    </Link>
  );
};

export default Button;
