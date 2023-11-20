// Next components
import Link from "next/link";
import { Text1 } from "./Typography/Text";

// Types
import { ButtonProps } from "@/app/constants/types";

const Button = ({ href, text, className = "" }: ButtonProps) => {
  const classes = `block w-fit h-[43px] md:h-[53px] px-6 py-3 text-center bg-[#0076AD] rounded-[10px] items-center text-white p-2 ${className}`;
  return (
    <Link className={classes} href={href}>
      <Text1>{text}</Text1>
    </Link>
  );
};

export default Button;
