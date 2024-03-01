"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ozzie from "@/public/ozzie-wheelchair.png";
import arrow from "@/public/submit-arrow.png";
import { Title1 } from "./ui/Typography/Title";
import { Text } from "./ui/Typography/Text";
import { styles } from "./ui/Button";
import { MAIL_CHIMP_URL } from "@/app/constants/mailchimp";

export default function NewsletterSignup() {
  const desktopButtonClass = cn(
    styles.buttonAlignment,
    styles.buttonContainer,
    styles.buttonText,
    "bg-luskin-blue ml-[0.6rem] md:ml-4"
  );

  useEffect(() => {
    window.fnames = new Array();
    window.ftypes = new Array();
    window.fnames[0] = "EMAIL";
    window.ftypes[0] = "email";
  }, []);

  return (
    <div className="w-full flex flex-col items-center p-6 pb-10 md:p-10">
      <div className="flex items-center h-[160px] w-[160px] md:h-[170px] md:w-[170px] lg:h-[190px] lg:w-[190px] border-2 border-luskin-green rounded-full mb-[-80px] md:mb-[-85px] lg:mb-[-95px] px-[0.9rem] bg-white z-10">
        <Image src={ozzie} alt="Ozzie" className="mx-auto" />
      </div>
      <div className="flex flex-col justify-center items-center md:min-w-[40vw] h-fit border border-luskin-green rounded-[20px] shadow-[0_4px_8px_2px_hsla(0,0%,0%,0.1)] z-0 pt-[88px] md:pt-[92px] lg:pt-[103px]">
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
            action={MAIL_CHIMP_URL}
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
                aria-required="true"
                aria-label="Email Address"
                placeholder="Enter your email address"
                className="w-fit text-left md:text-center border border-luskin-blue rounded-[5px] pt-2 pb-3 px-3 md:px-6 placeholder:opacity-50 placeholder:text-black placeholder:text-[0.92rem] md:placeholder:text-base"
              />
              <button
                type="submit"
                name="subscribe"
                aria-label="Subscribe Button"
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
