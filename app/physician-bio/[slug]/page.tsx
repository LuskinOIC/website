import React from "react";
import { getPhysicianBio, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { BLOCKS, MARKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
        <li className="font-bold list-disc">{children}</li>
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

  return (
    <main className="m-10">
      <h1 className="text-lg text-[#800080]">
        Physician Bio - {docBio.physicianName}
      </h1>
      <h4 className="text-lg text-[#800080]">Specialties</h4>
      <p className="text-[#800080]"></p>
      {renderRichTextToReactComponent(docBio.specialties as Document)}
      <p>Appointment Number: {docBio.appointmentNumber}</p>
      <p>Physician Number: {docBio.physicianNumber}</p>
    </main>
  );
}
