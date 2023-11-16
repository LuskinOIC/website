import React from "react";
import { getPhysicianBio, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { BLOCKS, MARKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ImageType, FileDetailsType } from "@/app/constants/types";
// import Image from "next/image";

export async function generateStaticParams() {
  const physicians = await getPhysicianBio();
  return physicians.map((evt) => ({ slug: evt.slug }));
}

// const Bold = ({ children }) => <span className="font-bold">{children}</span>;
// const Text = ({ children }) => <p className="align-center">{children}</p>;
const List = ({ children }: { children: React.ReactNode }) => (
  <li className="font-bold">{children}</li>
);

function renderRichTextToReactComponent(richText: Document, options = {}) {
  const defaultOptions = {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li className="list-disc">{children}</li>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p>{children}</p>
      ),
    },
  };

  return documentToReactComponents(richText, { ...defaultOptions, ...options });
}

export default async function PhysicianBio({
  params,
}: {
  params: { slug: string };
}) {
  const docBio = await getPhysicianBioBySlug(params.slug);
  const firstObject = docBio.specialties;
  console.log(docBio);
  console.log("physicianPortrait", docBio.physicianPortrait);

  return (
    <main className="m-10">
      <div>
        {/* <Image src={docBio.physicianPortrait} /> */}
        <h1 className="text-lg text-[#800080]">{docBio.physicianName}</h1>
        <h3 className="text-base">Specializes in:</h3>
        <p className="text-[#800080]"></p>
        {renderRichTextToReactComponent(docBio.specialties as Document)}
        <div id="phone-numbers">
          <p>Appointment Number: {docBio.appointmentNumber}</p>
          <p>Physician Number: {docBio.physicianNumber}</p>
        </div>
      </div>
      <div id="overview">
        <h2 className="text-xl">Overview</h2>
        <p>{renderRichTextToReactComponent(docBio.overview as Document)}</p>
      </div>
      <div id="certifications">
        <h2 className="text-xl">EDUCATION AND CERTIFICATES</h2>
        <h3>Medical School</h3>
        <p>
          {renderRichTextToReactComponent(docBio.medicalSchool as Document)}
        </p>
      </div>
    </main>
  );
}
