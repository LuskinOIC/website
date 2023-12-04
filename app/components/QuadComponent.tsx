import Image from "next/image";
import React from "react";
import Patients from "@/public/54000Patients.png";
import Braces from "@/public/Braces.png";
import Casts from "@/public/Casts.png";
import OTPT from "@/public/OTPTSessions.png";

export default function QuadCard() {
  return (
    <div className="grid grid-cols-2 gap-6 mx-40 my-10">
      <div className="border-2 border-[#825AA4] rounded-lg flex p-6 w-[500px] h-[300px] ">
        <Image
          src={Patients}
          width={500}
          height={300}
          alt="54,000 patient visits"
        />
      </div>
      <div className="border-2 border-[#825AA4] rounded-lg flex p-6 w-[500px] h-[300px] ">
        <Image
          src={OTPT}
          width={500}
          height={300}
          alt="54,000 patient visits"
        />
      </div>
      <div className="border-2 border-[#825AA4] rounded-lg flex p-6 w-[500px] h-[300px] ">
        <Image
          src={Braces}
          width={500}
          height={300}
          alt="54,000 patient visits"
        />
      </div>
      <div className="border-2 border-[#825AA4] rounded-lg flex p-6 w-[500px] h-[300px] ">
        <Image
          src={Casts}
          width={500}
          height={300}
          alt="54,000 patient visits"
        />
      </div>
    </div>
  );
}
