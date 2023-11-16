import React from "react";
import { getPhysicianBio, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BioPageSectionType, AssetType } from "@/app/constants/types";
import Image from "next/image";

export async function generateStaticParams() {
  const physicians = await getPhysicianBio();
  return physicians.map((evt) => ({ slug: evt.slug }));
}

// const Bold = ({ children }) => <span className="font-bold">{children}</span>;
// const Text = ({ children }) => <p className="align-center">{children}</p>;
// const List = ({ children }: { children: React.ReactNode }) => (
//   <li className="font-bold">{children}</li>
// );

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

//Separate component for rendering a single content item
const ContentItem = ({ nestedContent }: { nestedContent: any }) => (
  <span>{renderRichTextToReactComponent(nestedContent as Document)}</span>
);

// Separate component for rendering a single content paragraph
const ContentParagraph = ({ contentItem }: { contentItem: any }) => (
  <p>
    {contentItem.content.map((nestedContent: any, nestedIndex: number) => (
      <ContentItem key={nestedIndex} nestedContent={nestedContent} />
    ))}
  </p>
);

const Section = ({ section }: { section: BioPageSectionType }) => (
  <div key={section.sys.id}>
    <h2 className="text-xl">{section.fields.title}</h2>
    <div className="text-sm">
      {/* within a bio page section: fields {title, content} --> content: {content: [Array]} */}
      {section.fields.content.content.map(
        (contentItem: object, contentIndex: number) => (
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
  // console.log("DOC BIO", docBio);

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
        <p className="text-[#800080]"></p>
        {renderRichTextToReactComponent(docBio.specialties as Document)}
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
        <p>{renderRichTextToReactComponent(docBio.overview as Document)}</p>
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
            {/* Render header based on section title */}
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

            {/* Render the section content */}
            <Section key={section.sys.id} section={section} />
          </div>
        ))}
      </div>
    </main>
  );
}
{
  /* <div id="temp-bio-page-sections">
        {docBio.bioPageSection.map((section: BioPageSectionType) => (
          <Section key={section.sys.id} section={section} />
        ))}
      </div>
    </main>
  );
} */
}

// <main className="m-10">
//   <div>
//     <h1>HELLO WORLD</h1>
//     <Image
//       src={docBio.physicianPortrait.fields.file.url}
//       alt=""
//       width={docBio.physicianPortrait.fields.file.details.image.width}
//       height={docBio.physicianPortrait.fields.file.details.image.height}
//     />
//     <h1 className="text-lg text-[#800080]">{docBio.physicianName}</h1>
//     <h3 className="text-base">Specializes in:</h3>
//     <p className="text-[#800080]"></p>
//     {renderRichTextToReactComponent(docBio.specialties as Document)}
//     <div id="phone-numbers">
//       <p>Appointment Number: {docBio.appointmentNumber}</p>
//       <p>Physician Number: {docBio.physicianNumber}</p>
//     </div>
//   </div>
//   <div id="overview">
//     <h2 className="text-xl">Overview</h2>
//     <p>{renderRichTextToReactComponent(docBio.overview as Document)}</p>
//   </div>
//   <div id="temp-bio-page-sections">
//     <h1>
//       {docBio.bioPageSection.map(
//         (section: BioPageSectionType, index: number) => (
//           <div key={index}>
//             <h2 className="text-xl">{section.fields.title}</h2>
//             <div className="text-sm">
//               {section.fields.content.content.map(
//                 (contentItem: any, contentIndex: number) => (
//                   <p key={contentIndex}>
//                     {contentItem.content.map(
//                       (nestedContent: any, nestedIndex: number) => (
//                         <span key={nestedIndex}>
//                           {renderRichTextToReactComponent(
//                             nestedContent as Document
//                           )}
//                         </span>
//                       )
//                     )}
//                   </p>
//                 )
//               )}
//             </div>
//           </div>
//         )
//       )}
//     </h1>
//   </div>
// </main>

// DOCBIO {
//   physicianName: 'Anthony A. Scaduto, MD',
//   specialties: { nodeType: 'document', data: {}, content: [ [Object], [Object] ] },
//   physicianPortrait: {
//     metadata: { tags: [] },
//     sys: {
//       space: [Object],
//       id: '7ds4ZtVGtkB3RCHj5BG0Mb',
//       type: 'Asset',
//       createdAt: '2023-11-10T01:39:05.215Z',
//       updatedAt: '2023-11-10T02:46:46.662Z',
//       environment: [Object],
//       revision: 6,
//       locale: 'en-US'
//     },
//     fields: {
//       title: 'Anthony A. Scaduto, MD',
//       description: 'Dr. Scaduto',
//       file: [Object]
//     }
//   },
//   overview: {
//     data: {},
//     content: [ [Object], [Object], [Object], [Object], [Object] ],
//     nodeType: 'document'
//   },
//   asset: [ { metadata: [Object], sys: [Object], fields: [Object] } ],
//   appointmentNumber: '(213) 741-8330',
//   physicianNumber: '(213) 741-8330',
//   bioPageSection: [
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] },
//     { metadata: [Object], sys: [Object], fields: [Object] }
//   ],
//   slug: 'anthony-scaduto-md'
// }

// BIO PAGE SECTIONS {
//   metadata: { tags: [] },
//   sys: {
//     space: { sys: [Object] },
//     id: '4t4FfUt157j5AzZQwPezSH',
//     type: 'Entry',
//     createdAt: '2023-11-10T18:52:32.472Z',
//     updatedAt: '2023-11-10T18:52:32.472Z',
//     environment: { sys: [Object] },
//     revision: 1,
//     contentType: { sys: [Object] },
//     locale: 'en-US'
//   },
//   fields: {
//     title: 'State License',
//     content: { nodeType: 'document', data: {}, content: [Array] }
//   }

// BIO PAGE SECTIONS {
//   title: 'State License',
//   content: { nodeType: 'document', data: {}, content: [ [Object] ] }
// }

// ASSETS [
//   {
//     metadata: { tags: [] },
//     sys: {
//       space: [Object],
//       id: '4XFbnIzX9txiWkjKv95sdf',
//       type: 'Asset',
//       createdAt: '2023-11-10T02:00:33.561Z',
//       updatedAt: '2023-11-10T02:41:08.779Z',
//       environment: [Object],
//       revision: 2,
//       locale: 'en-US'
//     },
//     fields: {
//       title: 'Image Placeholder',
//       description: 'Dr. Scaduto and child patient',
//       file: [Object]
//     }
//   }
// ]
