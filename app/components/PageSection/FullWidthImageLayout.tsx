"use client";

// Dependencies
import { useState, useEffect } from "react";
// Next components
import Image from "next/image";
// Types
import { CarouselImageType } from "@/app/constants/types";
// Components
import Slider from "@/app/components/Slider";

type CarouselImageLayoutProps = {
  section: CarouselImageType["fields"]["images"];
};

export default function FullWidthImageLayout({
  section,
}: CarouselImageLayoutProps) {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768);
      };

      // ATtach event listener for window resize
      handleResize();

      // Cleanup event listener on component unmount
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section>
      <div className="w-full overflow-hidden">
        <Slider
          slides={
            section.map((image, i) => (
              <Image
                key={i}
                src={image.fields.file.url}
                alt={image.fields.file.fileName}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                className="mb-6 max-h-40 w-full object-cover object-top md:mb-10 md:max-h-96"
              />
            )) as any
          }
          displayArrows={!isMobileView}
        />
      </div>
    </section>
  );
}
