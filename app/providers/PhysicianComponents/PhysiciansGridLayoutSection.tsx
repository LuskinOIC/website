import React from "react";
import Link from "next/link";
import Image from "next/image";
// LOCAL COMPONENTS
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { PhysicianBioType } from "@/app/constants/types";
import { Document } from "@contentful/rich-text-types";
import translations from "@/public/locales/en.json";
import { getProviderFormattedPath } from "@/app/providers/PhysicianComponents/formattingProviderPath";

interface PhysiciansGridLayoutProps {
  title: string;
  physicians: PhysicianBioType[];
}
interface PhysicianCardProps {
  physician: PhysicianBioType;
}

const styles = {
  sectionTitle:
    "text-sky-700 text-2xl font-semibold font-['Arial'] leading-[30px] px-5 md:px-24 py-4 md:py-12",
  physicianGrid:
    "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 px-5 md:px-24",
  clickableStyle: "shadow-lg hover:shadow-xl rounded-lg",
  physicianCard:
    "border rounded-lg p-4 border-zinc-500 md:border-black md:border-opacity-10 grid md:grid-cols-2 gap-12 md:h-full justify-items-center",
  physicianDetailsContainer: "flex flex-col gap-1 md:gap-4 place-self-start",
  physicianName: "text-xl font-semibold",
  physicianDetails: "text-base md:text-lg md:mb-4",
};

const PhysicianCard = ({ physician }: PhysicianCardProps) => {
  return (
    <div className={styles.physicianCard}>
      <div className="max-w-[280px] h-auto">
        {physician.portrait && (
          <Image
            src={physician.portrait.fields.file.url}
            alt={physician.name}
            width={physician.portrait.fields.file.details.image.width}
            height={physician.portrait.fields.file.details.image.height}
          />
        )}
      </div>
      <div className={styles.physicianDetailsContainer}>
        <h2 className={styles.physicianName}>{physician.name}</h2>
        <div className={styles.physicianDetails}>
          <h2>{translations.physicians.gridLayoutSection.specialtyHeading}</h2>
          {renderRichTextToReactComponent(
            physician.specialties as unknown as Document,
          )}
        </div>
      </div>
    </div>
  );
};

const PhysiciansGridLayout: React.FC<PhysiciansGridLayoutProps> = ({
  title,
  physicians,
}) => {
  const filteredPhysicians = physicians.filter(
    (physician) => physician !== undefined,
  );
  return (
    <>
      <div className={styles.sectionTitle}>{title}</div>
      <div className={styles.physicianGrid}>
        {filteredPhysicians.map((physician) =>
          physician?.topSummary || physician?.pageSections ? (
            <Link
              key={physician.name}
              href={getProviderFormattedPath(
                physician.providerType,
                physician.slug,
              )}
              className={styles.clickableStyle}
            >
              <PhysicianCard physician={physician} />
            </Link>
          ) : (
            <div key={physician.name}>
              <PhysicianCard physician={physician} />
            </div>
          ),
        )}
      </div>
    </>
  );
};

export default PhysiciansGridLayout;
