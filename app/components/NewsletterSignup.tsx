"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ozzie from "@/public/ozzie-wheelchair.png";
import { Title1 } from "./ui/Typography/Title";
import { Text } from "./ui/Typography/Text";
import { styles } from "./ui/Button";
import translations from "@/public/locales/en.json";

export default function NewsletterSignup() {
  const desktopButtonClass = cn(
    styles.buttonAlignment,
    styles.buttonContainer,
    styles.buttonText,
    "bg-luskin-blue ml-[0.6rem] my-4 px-4 md:ml-4 md:my-6",
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
          <a
            aria-label="Subscribe Button"
            id="mc-embedded-subscribe"
            className={desktopButtonClass}
            href="https://share.hsforms.com/1t977b2uBRnauBgzAZqGPfgqwu5b"
            target="_blank"
          >
            <span className="block">
              {translations.newsletter.joinOurNewsletter}
            </span>
          </a>
        </>
      </div>
    </div>
  );
}
