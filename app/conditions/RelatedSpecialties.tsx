"use client";
import { useState } from "react";
import Link from "next/link";
import {
  SPECIALTY_COLORS,
  HOVER_COLORS,
} from "@/app/constants/specialtyColors";
import { SpecialtyType } from "@/app/constants/types";
import translations from "@/public/locales/en.json";

const styles = {
  container:
    "flex flex-col gap-4 md:gap-0 md:flex-row md:items-center pt-6 md:space-x-2",
  defaultBgColor: "#D3D3D3",
  linkContainer: "px-4 py-1 text-black rounded-full",
};

const RelatedSpecialtiesComponent = ({
  relatedSpecialties,
}: {
  relatedSpecialties: SpecialtyType[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <p>{translations.healthInformationLibrary.relatedSpecialtiesHeading}</p>
      {relatedSpecialties.map((specialty, index) => {
        const backgroundColor =
          SPECIALTY_COLORS[specialty.fields.slug] || styles.defaultBgColor;
        const hoverColor =
          HOVER_COLORS[specialty.fields.slug] || styles.defaultBgColor;
        const isHovered = index === hoveredIndex;
        return (
          <Link
            key={specialty.fields.name}
            href={`/patient-care/specialties/${specialty.fields.slug}`}
            passHref
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              backgroundColor: isHovered ? hoverColor : backgroundColor,
            }}
            className={styles.linkContainer}
          >
            {specialty.fields.name}
          </Link>
        );
      })}
    </div>
  );
};

export default RelatedSpecialtiesComponent;
