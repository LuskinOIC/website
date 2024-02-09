import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

type TitleProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  titleSize?: string;
  bold?: boolean;
  luskinHeader?: boolean;
};

export const myFont = localFont({ src: "./Mathlete-Bulky.otf" });

export const LuskinHeader = ({ children, className = "" }: TitleProps) => {
  const classes = cn(
    myFont.className,
    "text-[#825AA4] text-[64px] leading-[40px] leading-[60px] tracking-wide py-2 font-normal",
    className,
  );
  return <h1 className={classes}>{children}</h1>;
};

export const Title1 = ({ children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-[28px] md:text-[32px] leading-10 py-2 font-bold",
    className,
  );
  return <h1 className={classes}>{children}</h1>;
};

export const Title2 = ({ children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-xl md:text-2xl font-arial leading-[36px] py-2",
    className,
  );
  return <h1 className={classes}>{children}</h1>;
};

export const Title3 = ({ children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-xl font-arial leading-[40px] md:leading-[60px] py-2",
    className,
  );
  return <h1 className={classes}>{children}</h1>;
};

export function TitleComponent({
  title,
  titleSize = "Title Medium",
  bold = false,
  luskinHeader = false,
}: TitleProps) {
  const boldClass = bold ? "font-bold" : "font-normal";
  if (luskinHeader) {
    return <LuskinHeader className={boldClass}>{title}</LuskinHeader>;
  }

  switch (titleSize) {
    case "Title Large":
      return <Title1 className={boldClass}>{title}</Title1>;
    case "Title Medium":
      return <Title2 className={boldClass}>{title}</Title2>;
    case "Title Small":
      return <Title3 className={boldClass}>{title}</Title3>;
    default:
      return <Title2 className={boldClass}>{title}</Title2>;
  }
}
