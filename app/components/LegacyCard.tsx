import React from "react";
import Image from "next/image";
import phone from "@/public/phone.svg";
import email from "@/public/email.png";

const cardContents = [
  {
    title: "Sponsor an Event",
    description:
      "Sponsoring or attending a LuskinOIC event is a fun way to support children and promote your company or organization.",
    contact: "To find out more contact: Mary Beth Perrine",
  },
  {
    title: "Donation of Stocks",
    description:
      "Stocks and securities are a great way to further LuskinOIC's mission.",
    contact: "To find out more contact: Mary Beth Perrine",
  },
  {
    title: "Naming Opportunities",
    description:
      "Naming opportunities create lasting connections to places you cherish. Whether it's exam rooms, equipment, or more, we'll find the perfect fit for you.",
    contact: "To find out more contact: Mary Beth Perrine",
  },
  {
    title: "Planned Legacy Gifts",
    description:
      "Leaving a legacy is easy. Include LuskinOIC in your will, set up a charitable trust, or donate property, and you'll be promptly recognized in our legacy society.",
    contact: "To find out more contact: Mary Beth Perrine",
  },
];

export default function LegacyCard() {
  return (
    <section className="flex justify-center">
      <div className="grid md:grid-cols-2 gap-6 justify-items-center p-5 md:p-10">
        {cardContents.map((card, index) => (
          <div key={index} className="bg-[#FFF2C0] rounded p-4">
            <h1>
              <b>{card.title}</b>
            </h1>
            <p>{card.description}</p>
            <p>{card.contact}</p>
            <div className="flex space-x-4">
              <Image src={phone} alt="phone" height={20} width={20} />
              <span>(213) 742-1500</span>
            </div>
            <div className="flex space-x-4">
              <Image src={email} alt="email" height={10} width={20} />
              <span>mperrine@mednet.edu</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
