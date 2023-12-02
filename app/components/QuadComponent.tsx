// import Image from "next/image";
import React from "react";
// import PatientVisits from "@/public/PatientVisits.png"
// import PTSessions from "@/public/PTsessions.png"
// import Braces from "@/public/Braces.png"
// import Casts from "@/public/Casts.png"

export default function QuadCard() {
  return (
    <div className="bg-red-200 grid grid-cols-2 gap-6 mx-40 my-10  ">
      <div className="border-2 border-[#825AA4] rounded-lg flex p-6 ">
        <div className="bg-blue-200 basis-1/2">Test</div>
        <div className="bg-green-300 basis-1/2">Test2</div>
      </div>
      <div className="border-2 border-[#825AA4] rounded-lg">Card</div>
      <div className="border-2 border-[#825AA4] rounded-lg">Card</div>
      <div className="border-2 border-[#825AA4] rounded-lg">Card</div>

      {/* <div className="">

                <Image src="http://placekitten.com/200/300" width={200} height={300} style={{
                    objectFit: "contain"
                }} alt="54,000 patient visits" />

            </div> */}
    </div>
  );
}
