import Image from "next/image";
import React from "react";
import weareluskin from "@/public/WeAreLuskin.svg";
import toptiercare from "@/public/toptiercare.svg"


export default function AboutBlurb() {
  return (
    <div className="grid grid-cols-2 gap-4 mx-60 my-10">
      <div className=" p-6 w-[500px] h-[300px] ">
       
      <h1>TOGETHER, <br></br>we are LuskinOIC</h1>
      <br></br>
      <p>Founded in 1911 as Los Angeles Orthopaedic Hospital, Luskin Orthopaedic Institute for Children (LuskinOIC) is solely focused on pediatric musculoskeletal orthopedics
      <br></br>
      <br></br>
      Our mission is to provide outstanding care for patients with musculoskeletal disorders and through the support of the Luskin Orthopaedic Institute for Children Foundation, to provide care for children regardless of ability to pay and advance care worldwide for all musculoskeletal patients through medical education and scientific research.
      </p>
      </div>
      <div className="flex p-6 w-[500px] h-[300px] ">
      <Image src={weareluskin} alt="Ozzie" />
      </div>
      <div className="flex p-6 w-[500px] h-[300px] ">
      <Image src={toptiercare} alt="Ozzie" />
      </div>
      <div className=" p-6 w-[500px] h-[300px] ">
        <h1>Top tiper care for all <br></br>children, no matter their <br></br>finances</h1>
        <p>No child should ever be turned away. Our community's philanthropic support to sustain our mission of safeguarding children's health and well-being through innovative family-centered care. Your generosity ensures no child is denied our services.</p>
        <button className="bg-[#0076AD]  text-white font-bold py-2 px-4  rounded">DONATE TODAY</button>
      </div>
      <div className="bg-[#0076AD] text-white p-6 w-[500px] h-[300px]">
        <h1>Explore the exceptional care <br></br>at LuskinOIC.</h1>
      </div>
      <div className="bg-white text-black p-6 w-[500px] h-[300px]">Test 2</div>
    </div>
  );
}
