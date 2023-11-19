// import Link from "next/link";
import Ozzie from "../../public/Ozzie Crutches SVG 2.png";
import FB from "../../public/fb.svg";
import Yelp from "../../public/yelp.svg";
import LinkedIN from "../../public/linkedin.svg";
import TwitterX from "../../public/TwitterX.svg";
import Youtube from "../../public/youtube.svg";
import React from "react";
import Image from "next/image";

export default function SocialMediaBanner() {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-2 bg-[#FCE385] ">
      <div className="row-span-3 ...">
        <div className="flex flex-row min-h-[75%] justify-center items-center">
          <Image src={Ozzie} alt="Ozzie" />
        </div>
      </div>
      <div className="col-span-1 ..">
        <div className="text-4xl flex flex-row min-h-[50%] justify-center items-center text-center">
          <h1>Follow our story on social media!</h1>
        </div>
        <div className="text-md text-center">
          <p>
            Join us in our mission to transform musculoskeletal care for all,
            one child at a time,
          </p>{" "}
          <p>through education, research, and unwavering support.</p>
        </div>
      </div>
      <div className="row-span-1  .. ">
        <div className="flex flex-row min-h-[75%] justify-center items-center space-x-4 ..">
          <a href="https://www.instagram.com/orthokids_losangeles/ ..">
            <Image src={FB} alt="Facebook Logo"/>
          </a>
          <a href="https://www.linkedin.com/school/luskin-orthopaedic-institute-for-children/">
            <Image src={LinkedIN} alt="LinkedIn Logo"/>
          </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%3FLuskinOIC">
            <Image src={TwitterX} alt="X Logo" />
          </a>
          <a href="https://www.youtube.com/channel/UC3JqUFKs4TmQUGa9ekOYePA">
            <Image src={Youtube} alt="Youtube Logo" />
          </a>
          <a href="https://www.yelp.com/biz/luskin-orthopaedic-institute-for-children-los-angeles">
            <Image src={Yelp} alt="Yelp Logo " />
          </a>
        </div>
      </div>
    </div>
  );
}
