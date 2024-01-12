import React from "react";
// Components
import { Text } from "./ui/Typography/Text";
import { Title1 } from "./ui/Typography/Title";
// Icons + Images
import FB from "../../public/fb.svg";
import Image from "next/image";
import LinkedIN from "../../public/libanner.svg";
import Ozzie from "../../public/ozzie-crutches.png";
import OzzieMobile from "../../public/ozzie-peeking-in.png";
import TwitterX from "../../public/TwitterX.svg";
import Yelp from "../../public/yelpbanner.svg";
import Youtube from "../../public/youtubebanner.svg";
// Links
import {
  FACEBOOK_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YELP_URL,
  YOUTUBE_URL,
} from "../constants/links";

export default function SocialMediaBanner() {
  return (
    <div className="bg-[#FCE385]">
      <div className="md:py-4 flex flex-row justify-center">
        <DesktopBanner />
        <MobileBanner />
      </div>
    </div>
  );
}

function DesktopBanner() {
  return (
    <div className="hidden md:grid grid-rows-2 md:gap-x-6 md:grid-flow-col w-[65%] px-3 py-2">
      <div className="self-center row-span-3">
        <div className="flex flex-row min-h-[75%] justify-center items-center">
          <Image src={Ozzie} alt="Ozzie" />
        </div>
      </div>
      <div className="hidden md:block col-span-1">
        <div className="text-4xl flex flex-row min-h-[50%] justify-center items-center text-center">
          <h1>Follow our story on social media!</h1>
        </div>
        <div className="flex items-center justify-center text-md text-center">
          <p className="w-5/6">
            Join us in our mission to transform musculoskeletal care for all,
            one child at a time, through education, research, and unwavering
            support.
          </p>
        </div>
      </div>
      <SocialMediaIcons />
    </div>
  );
}

function MobileBanner() {
  return (
    <div className="block md:hidden min-h-[75%]">
      <div className="flex flex-row items-center justify-between">
        <Title1 className="pl-10 pt-4">
          Follow our story on social media!
        </Title1>
        <Image src={OzzieMobile} alt="Ozzie" />
      </div>
      <Text className="px-10">
        Join us in our mission to transform musculoskeletal care for all, one
        child at a time, through education, research, and unwavering support.
      </Text>
      <SocialMediaIcons />
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="row-span-1 pt-8 pb-10 md:pt-0 md:pb-0 px-10 md:px-3">
      <div className="flex flex-row min-h-[75%] justify-center items-center space-x-4">
        <a href={FACEBOOK_URL}>
          <Image src={FB} alt="Facebook Logo" />
        </a>
        <a href={LINKEDIN_URL}>
          <Image src={LinkedIN} alt="LinkedIn Logo" />
        </a>
        <a href={TWITTER_URL}>
          <Image src={TwitterX} alt="Twitter Logo" />
        </a>
        <a href={YOUTUBE_URL}>
          <Image src={Youtube} alt="Youtube Logo" />
        </a>
        <a href={YELP_URL}>
          <Image src={Yelp} alt="Yelp Logo" />
        </a>
      </div>
    </div>
  );
}
