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
  id?: string;
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

export const Title1 = ({ id, children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-[28px] md:text-[32px] leading-10 py-2 font-bold",
    className,
  );
  return (
    <h1 id={id} className={classes}>
      {children}
    </h1>
  );
};

export const Title2 = ({ children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-xl lg:text-2xl font-arial leading-[36px] md:leading-[45px] pb-2",
    className,
  );
  return <h1 className={classes}>{children}</h1>;
};

export const Title3 = ({ children, className = "" }: TitleProps) => {
  const classes = cn(
    "text-xl font-arial leading-[40px] lg:leading-[60px] pb-2",
    className,
  );
  return <h1 className={classes}>{children}</h1>;
};

export function TitleComponent({
  title,
  titleSize = "Medium",
  bold = false,
  luskinHeader = false,
}: TitleProps) {
  const boldClass = bold ? "font-bold" : "font-normal";
  if (luskinHeader) {
    return <LuskinHeader className={boldClass}>{title}</LuskinHeader>;
  }

  switch (titleSize) {
    case "Large":
      return <Title1 className={boldClass}>{title}</Title1>;
    case "Medium":
      return <Title2 className={boldClass}>{title}</Title2>;
    case "Small":
      return <Title3 className={boldClass}>{title}</Title3>;
    default:
      return <Title2 className={boldClass}>{title}</Title2>;
  }
}
