import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "blue" | "yellow" | "text" | "none" | undefined;

export interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  text?: string;
  children?: React.ReactNode;
  isExternal?: boolean;
}

const styles = {
  buttonContainer: "flex w-fit rounded-[10px]",
  buttonAlignment: "px-2 lg:px-4 py-3 justify-center items-center inline-flex",
  buttonText: "text-base text-white font-bold leading-[28.8px]",
};

const Button = ({
  href,
  variant = "none",
  className,
  children,
  text,
  isExternal = false,
}: ButtonProps) => {
  const classes = cn(
    styles.buttonContainer,
    styles.buttonAlignment,
    styles.buttonText,
    {
      blue: "bg-[#0076AD]",
      yellow: "bg-amber-200 text-neutral-900",
      text: "p-0 underline",
      none: "",
    }[variant],
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
