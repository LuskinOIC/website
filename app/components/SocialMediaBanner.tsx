// import Link from "next/link";
import Ozzie from "../../public/Ozzie Crutches SVG 2.png"
import React from "react";
import Image from "next/image";

export default function SocialMediaBanner() {

    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4 bg-[#FCE385] "> 
          <div className="row-span-3 ..."><div className="flex flex-row min-h-screen justify-center items-center"><Image src={Ozzie} alt="Ozzie" /></div></div>
          <div className="col-span-2 .."><div className="text-2xl flex flex-row min-h-screen justify-center items-center text-center"><h1>Follow our story on social media!</h1></div><div className="text-md text-center"><p>Join us in our mission to transform musculoskeletal care for all, one child at a time,</p> <p>through education, research, and unwavering support.</p></div></div>
          <div className="row-span-2 col-span-2 .. "><div className="text-center">Social Media Links</div></div>
      </div>
    );
  }