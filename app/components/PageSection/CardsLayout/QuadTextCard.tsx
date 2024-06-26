import React from "react";
import Image from "next/image";
import phone from "@/public/phone.svg";
import email from "@/public/email.svg";
import { CardType } from "@/app/constants/types";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { TitleComponent } from "@/app/components/ui/Typography/Title";

export default function QuadTextCard({ section }: { section: CardType[] }) {
  return (
    <section className="flex justify-center">
      <div className="grid md:grid-cols-2 gap-6 justify-items-center">
        {section.map((card, index) => {
          const cardContent = card.fields.cardContent;
          const cardLocation = cardContent ? cardContent.fields.location : null;
          return (
            <div
              key={index}
              className="flex flex-col flex-grow w-full h-full bg-[#FFF2C0] rounded p-7"
            >
              <TitleComponent
                title={card.fields.title}
                bold={card.fields.bold}
                titleSize={
                  card.fields.titleSize ? card.fields.titleSize : "Title Medium"
                }
              />
              {cardContent &&
                cardContent.fields.content &&
                renderRichTextToReactComponent(cardContent.fields.content)}
              <div className="flex grow" />
              {cardLocation && cardLocation.fields.phoneNumber && (
                <div className="flex space-x-4 my-2">
                  <Image src={phone} alt="phone" height={20} width={20} />
                  <span>{cardLocation.fields.phoneNumber}</span>
                </div>
              )}
              {cardLocation && cardLocation.fields.emailAddress && (
                <div className="justify-self-end flex space-x-4">
                  <Image src={email} alt="email" height={10} width={20} />
                  <span>
                    <a href={`mailto:${cardLocation.fields.emailAddress}`}>
                      {cardLocation.fields.emailAddress}
                    </a>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
