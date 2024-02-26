import React from "react";
import Link from "next/link";
import Image from "next/image";
// LOCAL COMPONENTS
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { PhysicianBioType } from "@/app/constants/types";
import { Document } from "@contentful/rich-text-types";

interface PhysiciansGridLayoutProps {
  title: string;
  physicians: PhysicianBioType[];
}
interface PhysicianCardProps {
  physician: PhysicianBioType;
}

const styles = {
  sectionTitle:
    "text-sky-700 text-xl font-normal font-['Arial'] leading-[30px] px-5 md:px-24 py-4 md:py-10",
  physicianGrid:
    "grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center px-5 md:px-24",
  clickableStyle: "shadow-lg hover:shadow-xl rounded-lg",
  physicianCard:
    "border rounded-lg p-4 border-zinc-500 md:border-black md:border-opacity-10 grid md:grid-cols-2 gap-12 md:h-full justify-items-center",
  physicianDetailsContainer: "flex flex-col gap-1 md:gap-4 place-self-start",
  physicianName: "text-lg font-bold",
  physicianDetails: "md:text-md md:mb-4 text-base",
};

const PhysicianCard = ({ physician }: PhysicianCardProps) => {
  return (
    <div className={styles.physicianCard}>
      <div className="max-w-[280px] h-auto">
        <Image
          src={physician.portrait.fields.file.url}
          alt={physician.name}
          width={physician.portrait.fields.file.details.image.width}
          height={physician.portrait.fields.file.details.image.height}
        />
      </div>
      <div className={styles.physicianDetailsContainer}>
        <h2 className={styles.physicianName}>{physician.name}</h2>
        <h5>Specializes in:</h5>
        <div className={styles.physicianDetails}>
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
  return (
    <>
      <div className={styles.sectionTitle}>{title}</div>
      <div className={styles.physicianGrid}>
        {physicians.map((physician) =>
          physician.topSummary || physician.pageSections ? (
            <Link
              key={physician.name}
              href={`/physicians/${physician.slug}`}
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
