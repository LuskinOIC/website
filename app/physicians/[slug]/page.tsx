import React from "react";
import { getPhysicians, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BioPageSectionType, AssetType } from "@/app/constants/types";
import Image from "next/image";

// We need to export this function so that Next.js knows what pages to generate
// static HTML for.
export async function generateStaticParams() {
  const physicians = await getPhysicians();

  return physicians.map((evt) => ({ slug: evt.slug }));
}

// TODO: Move into utils
function renderRichTextToReactComponent(richText: Document, options = {}) {
  const defaultOptions = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => {
        return <ul className="list-disc">{children}</ul>;
      },
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => {
        return <ol className="list-decimal">{children}</ol>;
      },
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
        return <li className="">{children}</li>;
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p>{children}</p>
      ),
    },
  };
  return documentToReactComponents(richText, { ...defaultOptions, ...options });
}

// TODO: Move into components
const ContentParagraph = ({ contentItem }: { contentItem: any }) => {
  return <div>{renderRichTextToReactComponent(contentItem as Document)}</div>;
};

// TODO: Move into components
const Section = ({ section }: { section: BioPageSectionType }) => (
  <div key={section.sys.id}>
    <h2 className="text-xl">{section.fields.title}</h2>
    <div className="text-sm">
      {section.fields.content.content.map(
        (
          contentItem: { content: Array<{ value: string }> },
          contentIndex: number,
        ) => (
          <ContentParagraph key={contentIndex} contentItem={contentItem} />
        ),
      )}
    </div>
  </div>
);

export default async function PhysicianBio({
  params,
}: {
  params: { slug: string };
}) {
  const docBio = await getPhysicianBioBySlug(params.slug);

  let educationAndCertificatesHeaderRendered = false;
  let researchInsightsAndPublicationsHeaderRendered = false;
  return (
    <main className="m-10">
      <div>
        <Image
          src={docBio.physicianPortrait.fields.file.url}
          alt=""
          width={docBio.physicianPortrait.fields.file.details.image.width}
          height={docBio.physicianPortrait.fields.file.details.image.height}
        />
        <h1 className="text-lg text-[#800080]">{docBio.physicianName}</h1>
        <h3 className="text-base">Specializes in:</h3>
        <div>
          {renderRichTextToReactComponent(
            docBio.specialties as unknown as Document,
          )}
        </div>
        <div id="phone-numbers">
          <p>Appointment Number: {docBio.appointmentNumber}</p>
          <p>Physician Number: {docBio.physicianNumber}</p>
        </div>
      </div>
      <div className="flex items-center">
        <hr className="flex-grow border-[#99C221]"></hr>
      </div>
      <div id="overview">
        <h2 className="text-xl text-[#0076AD]">Overview</h2>
      </div>
      <div id="asset-container">
        {Array.isArray(docBio.asset) && docBio.asset.length > 0 && (
          <div>
            {docBio.asset.map((asset: AssetType) => (
              <div key={asset.sys.id}>
                <h3>{asset.fields.title}</h3>
                <Image
                  src={asset.fields.file.url}
                  alt={asset.fields.description}
                  width={asset.fields.file.details.image.width}
                  height={asset.fields.file.details.image.height}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div id="temp-bio-page-sections">
        {docBio.bioPageSection.map((section: BioPageSectionType) => (
          <div key={section.sys.id}>
            {!educationAndCertificatesHeaderRendered &&
              (section.fields.title === "Medical School" ||
                section.fields.title === "Internship" ||
                section.fields.title === "Board Certification" ||
                section.fields.title === "Residency" ||
                section.fields.title === "State License" ||
                section.fields.title === "Fellowships" ||
                section.fields.title === "Affiliations" ||
                section.fields.title === "Awards and Recognitions") && (
                <>
                  <div className="flex items-center">
                    <hr className="flex-grow border-[#99C221]"></hr>
                  </div>
                  <h2 className="text-lg text-[#0076AD]">
                    Education and Certificates
                  </h2>
                  {(educationAndCertificatesHeaderRendered = true)}
                </>
              )}

            {!researchInsightsAndPublicationsHeaderRendered &&
              (section.fields.title === "Research Insights" ||
                section.fields.title === "Publications") && (
                <>
                  <div className="flex items-center">
                    <hr className="flex-grow border-[#99C221]"></hr>
                  </div>
                  <h2 className="text-lg text-[#0076AD]">
                    Research Insights and Publications
                  </h2>
                  {(researchInsightsAndPublicationsHeaderRendered = true)}
                </>
              )}
            <Section key={section.sys.id} section={section} />
          </div>
        ))}
      </div>
    </main>
  );
}
