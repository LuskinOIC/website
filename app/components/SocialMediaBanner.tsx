// import Link from "next/link";
import Ozzie from "../../public/Ozzie Crutches SVG 2.png"
import SocialIcons from "../../public/SocialMediaIcons.png"
import React from "react";
import Image from "next/image";

export default function SocialMediaBanner() {

    return (
        <div className="grid grid-rows-2 grid-flow-col gap-2 bg-[#FCE385] "> 
          <div className="row-span-3 ..."><div className="flex flex-row min-h-[75%] justify-center items-center"><Image src={Ozzie} alt="Ozzie" /></div></div>
          <div className="col-span-1 .."><div className="text-4xl flex flex-row min-h-[50%] justify-center items-center text-center"><h1>Follow our story on social media!</h1></div><div className="text-md text-center"><p>Join us in our mission to transform musculoskeletal care for all, one child at a time,</p> <p>through education, research, and unwavering support.</p></div></div>
          <div className="row-span-1  .. "><div className="flex flex-row min-h-[75%] justify-center items-center"><Image src={SocialIcons} alt="Social Icons" /></div></div>
      </div>
    );
  }