import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ozzie from "../../public/ozzie-wheelchair.png";
import { Title1 } from "./ui/Typography/Title";
import { Text } from "./ui/Typography/Text";
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
      <div className="flex items-center h-[13vw] w-[13vw] border-2 border-luskin-green rounded-full mb-[-6.5vw] px-[0.9rem] bg-white z-10">
        <Image src={ozzie} alt="Ozzie" className="mx-auto" />
      </div>
      <div className="flex flex-col justify-center items-center w-fit h-fit border border-luskin-green rounded-[20px] shadow-[0_4px_8px_2px_hsla(0,0%,0%,0.1)] z-0 pt-[7.5vw]">
        <Title1 className="">Join Our Newsletter!</Title1>
        <Text className="w-[60%] text-center">
          To receive our latest news and events information join our newsletter
          today.
        </Text>
        <div className="w-full flex justify-center mt-8 mb-12">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-fit text-center border border-luskin-blue rounded-[5px] py-3 px-6 placeholder:opacity-50 placeholder:text-black placeholder:text-base"
          />
          <button className={buttonClass}>Submit</button>
        </div>
      </div>
    </div>
  );
}
