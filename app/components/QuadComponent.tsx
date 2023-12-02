import Image from "next/image";
import React from "react";
// import PatientVisits from "@/public/PatientVisits.png"
// import PTSessions from "@/public/PTsessions.png"
// import Braces from "@/public/Braces.png"
// import Casts from "@/public/Casts.png"

export default function QuadCard() {
  return (
    <div className=" grid grid-cols-2 gap-6 mx-40 my-10  ">
      <div className="border-2 border-[#825AA4] rounded-lg flex p-6 w-[500px] h-[300px] ">
        <Image
          src="http://placekitten.com/200/300"
          width={500}
          height={300}
          alt="54,000 patient visits"
        />
      </div>
      <div className="border-2 border-[#825AA4] rounded-lg flex p-6 w-[500px] h-[300px] ">
        <Image
          src="http://placekitten.com/200/300"
          width={500}
          height={300}
          alt="54,000 patient visits"
        />
      </div>
      <div className="border-2 border-[#825AA4] rounded-lg flex p-6 w-[500px] h-[300px] ">
        <Image
          src="http://placekitten.com/200/300"
          width={500}
          height={300}
          alt="54,000 patient visits"
        />
      </div>
      <div className="border-2 border-[#825AA4] rounded-lg flex p-6 w-[500px] h-[300px] ">
        <Image
          src="http://placekitten.com/200/300"
          width={500}
          height={300}
          alt="54,000 patient visits"
        />
      </div>
    </div>
  );
}
