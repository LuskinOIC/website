import React from "react";
import Image from "next/image";
// Components
import { Text } from "@/app/components/ui/Typography/Text";
import { Title1 } from "@/app/components/ui/Typography/Title";
// Icons + Images
import FB from "@/public/fb.svg";
import LinkedIN from "@/public/libanner.svg";
import Ozzie from "@/public/ozzie-crutches.png";
import OzzieMobile from "@/public/ozzie-peeking-in.png";
import TwitterX from "@/public/TwitterX.svg";
import Yelp from "@/public/yelpbanner.svg";
import Youtube from "@/public/youtubebanner.svg";
// Links
import {
  FACEBOOK_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YELP_URL,
  YOUTUBE_URL,
} from "@/app/constants/links";

const socialMediaLinks = [
  { url: FACEBOOK_URL, src: FB, alt: "Facebook Logo" },
  { url: LINKEDIN_URL, src: LinkedIN, alt: "LinkedIn Logo" },
  { url: TWITTER_URL, src: TwitterX, alt: "Twitter Logo" },
  { url: YOUTUBE_URL, src: Youtube, alt: "Youtube Logo" },
  { url: YELP_URL, src: Yelp, alt: "Yelp Logo" },
];

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
        <div className="flex flex-row min-h-[75%] justify-center items-center scale-[85%]">
          <Image src={Ozzie} alt="Ozzie" />
        </div>
      </div>
      <div className="hidden md:flex flex-col min-h-[90%] justify-evenly items-center self-center row-span-2">
        <div className="flex items-center justify-center text-center text-[32px] ">
          <h1>Follow our story on social media!</h1>
        </div>
        <div className="flex items-center justify-center text-md text-center">
          <p className="w-5/6">
          Join us in our mission to provide outstanding services for all kids, one child at a time, through education and patient center care.
          </p>
        </div>
        <SocialMediaIcons />
      </div>
    </div>
  );
}

function MobileBanner() {
  return (
    <div className="block md:hidden min-h-[75%]">
      <div className="flex flex-row items-center justify-between">
        <Title1 className="pl-6 pt-4">Follow our story on social media!</Title1>
        <Image src={OzzieMobile} alt="Ozzie" />
      </div>
      <Text className="px-6">
        Join us in our mission to transform musculoskeletal care for all kids,
        one child at a time, through education, research, and unwavering
        support.
      </Text>
      <SocialMediaIcons />
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="row-span-1 pt-8 pb-10 md:pt-0 md:pb-0 px-10 md:px-3">
      <div className="flex flex-row min-h-[75%] justify-center items-center space-x-4 scale-[85%]">
        {socialMediaLinks.map(({ url, src, alt }) => (
          <a key={url} href={url} target="blank">
            <Image src={src} alt={alt} />
          </a>
        ))}
      </div>
    </div>
  );
}
