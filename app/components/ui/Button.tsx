// Next components
import Link from "next/link";
import { Text2 } from "./Typography/Text";

// Types
import { ButtonProps } from "@/app/constants/types";
import { cn } from "@/lib/utils";

const Button = ({ href, text, className = "" }: ButtonProps) => {
  const classes = cn(
    "flex w-fit max-h-[43px] md:max-h-[53px] lg:max-h-[63px] px-6 py-3 bg-[#0076AD] rounded-[10px] items-center text-white md:font-bold",
    className,
  );
  return (
    <Link className={classes} href={href}>
      <Text2>{text}</Text2>
    </Link>
  );
};

export default Button;
