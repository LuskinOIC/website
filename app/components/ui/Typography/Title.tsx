import React from "react";

type TitleProps = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  titleSize?: string;
  bold?: string;
};

const Title1 = ({ children, className = "" }: TitleProps) => {
  const classes = `text-2xl md:text-[40px] lg:text-5xl font-bold leading-150 font-arial py-2 ${className}`;
  return <h1 className={classes}>{children}</h1>;
};

const Title2 = ({ children, className = "" }: TitleProps) => {
  const classes = `text-xl font-arial leading-150 py-2 ${className}`;
  return <h1 className={classes}>{children}</h1>;
};
const Title3 = ({ children, className = "" }: TitleProps) => {
  const classes = `text-base font-arial leading-150 py-2 ${className}`;
  return <h1 className={classes}>{children}</h1>;
};

export function TitleComponent({ title, titleSize, bold }: TitleProps) {
  switch (titleSize) {
    case "Title Large":
      return <Title1 className={bold}>{title}</Title1>;
    case "Title Medium":
      return <Title2 className={bold}>{title}</Title2>;
    case "Title Small":
      return <Title3 className={bold}>{title}</Title3>;
    default:
      return <Title1 className={bold}>{title}</Title1>;
  }
}
