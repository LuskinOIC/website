import React from "react";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export function Text1({ children, className = "" }: TextProps) {
  const classes = `text-base md:text-2xl font-arial leading-150 ${className}`;
  return <p className={classes}>{children}</p>;
}

export function Text2({ children, className = "" }: TextProps) {
  const classes = `text-base md:text-xl font-arial leading-150  ${className}`;
  return <p className={classes}>{children}</p>;
}
