import Image from "next/image";
import React from "react";

import { CardType } from "@/app/constants/types";

export default function QuadCard({ section }: { section: CardType[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {section.map((card, index) => (
        <div
          key={index}
          className="border-2 border-[#825AA4] rounded-lg flex p-6"
        >
          <Image
            className="object-cover"
            src={`https:${card.fields.image.fields.file.url}`}
            alt={card.fields.image.fields.description}
            style={{ width: "100%", height: "auto" }}
            width={500}
            height={400}
          />
        </div>
      ))}
    </div>
  );
}
