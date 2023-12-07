import React from "react";
import localFont from "next/font/local";

type TitleProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  titleSize?: string;
  bold?: boolean;
  titleStyle?: boolean;
};

export const myFont = localFont({ src: "./Mathlete-Bulky.otf" });

export const LuskinHeader = ({ children, className = "" }: TitleProps) => {
  const classes = `${myFont.className} text-[#825AA4] text-[64px] md:text-[96px] leading-[60px] tracking-wide py-2 ${className}`;
  return <h1 className={classes}>{children}</h1>;
};

export const Title0 = ({ children, className = "" }: TitleProps) => {
  const classes = `text-base md:text-[32px] md:leading-[48px] py-2 `
}

export const Title1 = ({ children, className = "" }: TitleProps) => {
  const classes = `text-2xl md:text-[40px] md:leading-[30px]  lg:text-5xl lg:leading-[60px] font-bold md:leading-[60px] py-2 ${className}`;
  return <h1 className={classes}>{children}</h1>;
};

export const Title2 = ({ children, className = "" }: TitleProps) => {
  const classes = `text-xl md:text-2xl font-arial leading-[60px] py-2 ${className}`;
  return <h1 className={classes}>{children}</h1>;
};

export const Title3 = ({ children, className = "" }: TitleProps) => {
  const classes = `text-base font-arial leading-[60px] py-2 ${className}`;
  return <h1 className={classes}>{children}</h1>;
};

export function TitleComponent({
  title,
  titleSize,
  bold,
  titleStyle = false,
}: TitleProps) {
  const boldClass = bold ? "font-bold" : "font-normal";
  if (titleStyle) {
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
      return <Title1 className={boldClass}>{title}</Title1>;
  }
}
