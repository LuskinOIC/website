"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ozzie from "@/public/ozzie-wheelchair.png";
import arrow from "@/public/submit-arrow.png";
import { Title1 } from "./ui/Typography/Title";
import { Text } from "./ui/Typography/Text";
import { styles } from "./ui/Button";

export default function NewsletterSignup() {
  const desktopButtonClass = cn(
    styles.buttonAlignment,
    styles.buttonContainer,
    styles.buttonText,
    "bg-luskin-blue ml-[0.6rem] md:ml-4",
  );

  return (
    <div className="w-full flex flex-col items-center p-10 md:p-10">
      <div className="flex items-center h-[34vw] w-[34vw] md:h-[18vw] md:w-[18vw] lg:h-[10vw] lg:w-[10vw] border-2 border-luskin-green rounded-full mb-[-17vw] md:mb-[-9vw] lg:mb-[-5vw] px-[0.9rem] bg-white z-10">
        <Image src={ozzie} alt="Ozzie" className="mx-auto" />
      </div>
      <div className="flex flex-col justify-center items-center md:min-w-[40vw] h-fit border border-luskin-green rounded-[20px] shadow-[0_4px_8px_2px_hsla(0,0%,0%,0.1)] z-0 pt-[18vw] md:pt-[10vw] lg:pt-[5.5vw]">
        {/* <Title1 className="text-[24px] md:text-[32px] text-center font-medium">
          Thank You for
          <br />
          Unlocking the Magic!
        </Title1>
        <Text className="w-[70%] md:w-[75%] text-center mt-1 mb-16">
          Stay tuned for LuskinOIC&apos;s latest news and events.
        </Text> */}

        <>
          <Title1 className="text-[24px] md:text-[32px] font-medium">
            Join Our Newsletter!
          </Title1>
          <Text className="w-[70%] md:w-[75%] lg:w-[55%] text-center mt-1">
            To receive our latest news and events information join our
            newsletter today.
          </Text>
          <form
            action="https://luskinoic.us9.list-manage.com/subscribe/post?u=37e11b1c16da9aeab639769a6&amp;id=6ede087f13&amp;f_id=00dfece1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <input type="hidden" name="tags" value="2637372"></input>
            <div className="w-fit flex justify-center mt-8 mb-12 mx-3">
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                placeholder="Enter your email address"
                className="w-fit text-left md:text-center border border-luskin-blue rounded-[5px] pt-2 pb-3 px-3 md:px-6 placeholder:opacity-50 placeholder:text-black placeholder:text-[0.92rem] md:placeholder:text-base"
              />
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className={desktopButtonClass}
                value="Subscribe"
              >
                <span className="hidden md:block">Submit</span>
                <Image src={arrow} alt="Submit" className="md:hidden mx-3" />
              </button>
            </div>
          </form>
        </>
      </div>
    </div>
  );
}
