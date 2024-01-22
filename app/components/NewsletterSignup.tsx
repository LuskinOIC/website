import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ozzie from "../../public/ozzie-wheelchair.png";
import arrow from "../../public/submit-arrow.png";
import { Title1 } from "./ui/Typography/Title";
import { Text } from "./ui/Typography/Text";
import { styles } from "./ui/Button";

export default function NewsletterSignup() {
  const desktopButtonClass = cn(
    styles.buttonAlignment,
    styles.buttonContainer,
    styles.buttonText,
    "bg-luskin-blue ml-[0.6rem] md:ml-4",
    // "hidden md:flex bg-luskin-blue ml-4",
  );

  const mobileButtonClass = cn(
    styles.buttonAlignment,
    styles.buttonContainer,
    "md:hidden bg-luskin-blue ml-4", // flex already included in buttonAlignment
  );

  return (
    <div className="w-full flex flex-col items-center p-10 md:p-10">
      <div className="flex items-center h-[36vw] w-[36vw] md:h-[13vw] md:w-[13vw] border-2 border-luskin-green rounded-full mb-[-18vw] md:mb-[-6.5vw] px-[0.9rem] bg-white z-10">
        <Image src={ozzie} alt="Ozzie" className="mx-auto" />
      </div>
      <div className="flex flex-col justify-center items-center w-fit h-fit border border-luskin-green rounded-[20px] shadow-[0_4px_8px_2px_hsla(0,0%,0%,0.1)] z-0 pt-[20vw] md:pt-[7.5vw]">
        <Title1 className="font-medium">Join Our Newsletter!</Title1>
        <Text className="w-[70%] md:w-[75%] text-center mt-1">
          To receive our latest news and events information join our newsletter
          today.
        </Text>
        <div className="w-fit flex justify-center mt-8 mb-12 mx-3">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-fit text-left md:text-center border border-luskin-blue rounded-[5px] py-3 px-3 md:px-6 placeholder:opacity-50 placeholder:text-black placeholder:text-[0.92rem] md:placeholder:text-base"
          />
          <button className={desktopButtonClass}>
            <span className="hidden md:block">Submit</span>
            <Image src={arrow} alt="Submit" className="md:hidden mx-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
