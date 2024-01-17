import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ozzie from "../../public/ozzie-wheelchair.png";
import { Title0 } from "./ui/Typography/Title";
import { Text4 } from "./ui/Typography/Text";
import { styles } from "./ui/Button";

export default function NewsletterSignup() {
  const buttonClass = cn(
    styles.buttonAlignment,
    styles.buttonContainer,
    styles.buttonText,
    "bg-luskin-blue ml-4",
  );

  return (
    <div className="w-full flex flex-col items-center m-14">
      <div className="flex items-center h-[227px] w-[227px] border-2 border-luskin-green rounded-full mb-[-110px] bg-white z-10">
        <Image src={ozzie} alt="Ozzie" className="mx-auto" />
      </div>
      <div className="flex flex-col justify-center items-center w-[55%] h-[30vw] border border-luskin-green rounded-[20px] shadow-[0_4px_8px_2px_hsla(0,0%,0%,0.1)] z-0 pt-[113px]">
        <Title0 className="">Join Our Newsletter!</Title0>
        <Text4 className="w-[60%] text-center">
          To receive our latest news and events information join our newsletter
          today.
        </Text4>
        <div className="w-full flex justify-center mt-8 mb-12">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-[40%] text-center border border-luskin-blue rounded-[5px] p-3 placeholder:opacity-50 placeholder:text-black placeholder:text-lg"
          />
          <button className={buttonClass}>Submit</button>
        </div>
      </div>
    </div>
  );
}
