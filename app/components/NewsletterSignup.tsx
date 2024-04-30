"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ozzie from "@/public/ozzie-wheelchair.png";
// import arrow from "@/public/submit-arrow.png";
import { Title1 } from "./ui/Typography/Title";
import { Text } from "./ui/Typography/Text";
import { styles } from "./ui/Button";
// import { NEWSLETTER_URL } from "../constants/links";
import translations from "@/public/locales/en.json";

export default function NewsletterSignup() {
  const desktopButtonClass = cn(
    styles.buttonAlignment,
    styles.buttonContainer,
    styles.buttonText,
    "bg-luskin-blue ml-[0.6rem] md:ml-4 md:my-6"
  );

  useEffect(() => {
    window.fnames = new Array();
    window.ftypes = new Array();
    window.fnames[0] = "EMAIL";
    window.ftypes[0] = "email";
  }, []);

  return (
    <div className="flex w-full flex-col items-center p-6 pb-10 md:p-10">
      <div className="z-10 mb-[-80px] flex h-[160px] w-[160px] items-center rounded-full border-2 border-luskin-green bg-white px-[0.9rem] md:mb-[-85px] md:h-[170px] md:w-[170px] lg:mb-[-95px] lg:h-[190px] lg:w-[190px]">
        <Image src={ozzie} alt="Ozzie" className="mx-auto" />
      </div>
      <div className="z-0 flex h-fit flex-col items-center justify-center rounded-[20px] border border-luskin-green pt-[88px] shadow-[0_4px_8px_2px_hsla(0,0%,0%,0.1)] md:pt-[92px] lg:pt-[103px]">
        <>
          <Title1 className="text-[24px] font-medium md:text-[32px]">
            {translations.newsletter.joinOurNewsletter}
          </Title1>
          <Text className="mt-1 w-[70%] text-center md:w-[75%] lg:w-[55%]">
            {translations.newsletter.joinOurNewsletterDescription}
          </Text>
          <a href="https://share.hsforms.com/1t977b2uBRnauBgzAZqGPfgqwu5b">
            <button
              type="button"
              name="subscribe"
              aria-label="Subscribe Button"
              id="mc-embedded-subscribe"
              className={desktopButtonClass}
              value="JoinNewsletter">
              <span className="hidden md:block">
                {translations.newsletter.joinOurNewsletter}
              </span>
            </button>
          </a>

          {/* <form
            action={NEWSLETTER_URL}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <input type="hidden" name="tags" value="2637372"></input>
            <div className="mx-3 mb-12 mt-8 flex w-fit justify-center">
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                aria-required="true"
                aria-label="Email Address"
                placeholder="Enter your email address"
                className="w-fit rounded-[5px] border border-luskin-blue px-3 pb-3 pt-2 text-left placeholder:text-[0.92rem] placeholder:text-black placeholder:opacity-50 md:px-6 md:placeholder:text-base"
              />
              <button
                type="submit"
                name="subscribe"
                aria-label="Subscribe Button"
                id="mc-embedded-subscribe"
                className={desktopButtonClass}
                value="Subscribe"
              >
                <span className="hidden md:block">
                  {translations.newsletter.submit}
                </span>
                <Image src={arrow} alt="Submit" className="mx-3 md:hidden" />
              </button>
            </div>
          </form> */}
        </>
      </div>
    </div>
  );
}
