import React from "react";
import Image from "next/image";
import phone from "@/public/phone.svg";
import email from "@/public/email.png";

export default function LegacyCard() {
  return (
    <div className=" grid md:grid-cols-2 sm:grid-cols-1  gap-4">
      <div className="bg-[#FFF2C0] rounded p-8">
        <h1>
          <b>Sponsor an Event</b>
        </h1>
        <p>
          Sponsoring or attending a LuskinOIC event is a fun way to support
          children and promote your company or organization.
        </p>
        <p>To find out more contact: Mary Beth Perrine</p>
        <Image src={phone} alt="phone" height={20} width={20} />
      </div>
      <div className="bg-[#FFF2C0] rounded p-8">
        <h1>
          <b>Donation of Stocks</b>
        </h1>
        <p>
          Stocks and securities are a great way to further LuskinOIC`&apos;`s
          mission.
        </p>
        <p>To find out more contact: Mary Beth Perrine</p>
        <Image src={phone} alt="phone" height={20} width={20} />
      </div>

      <div className="bg-[#FFF2C0] rounded p-8">
        <h1>
          <b>Naming Opportunities</b>
        </h1>
        <p>
          Naming opportunities create lasting connections to places you cherish.
          Whether it`&apos;`s exam rooms, equipment, or more, we`&apos;`ll find
          the perfect fit for you.
        </p>
        <p>To find out more contact: Mary Beth Perrine</p>
        <Image src={phone} alt="phone" height={20} width={20} />
      </div>
      <div className="bg-[#FFF2C0] rounded p-8">
        <h1>
          <b>Planned Legacy Gifts</b>
        </h1>
        <p>
          Leaving a legacy is easy. Include LuskinOIC in your will, set up a
          charitable trust, or donate property, and you`&apos;`ll be promptly
          recognized in our legacy society.
        </p>
        <p>To find out more contact: Mary Beth Perrine</p>
        <div className="flex space-x-4">
          <Image src={phone} alt="phone" height={20} width={20} />
          <span>(213) 742-1500</span>
        </div>
        <div className="flex space-x-4">
          <Image src={email} alt="phone" height={20} width={20} />
          <span>blah@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
