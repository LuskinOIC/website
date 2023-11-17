import React from "react";
import { getPhysicianBio, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BioPageSectionType, AssetType } from "@/app/constants/types";
import Image from "next/image";

// asynchronous function, uses getPhysicianBio function to fetch Physician Bio data, maps over results to create array of objects, each containing slug property
export async function generateStaticParams() {
  const physicians = await getPhysicianBio();
  return physicians.map((evt) => ({ slug: evt.slug }));
}

// console.log(
//   "PUBLICATIONS-CONTENT-NODETYPE",
//   docBio.bioPageSection[docBio.bioPageSection.length - 1].fields.content
//     .content[0].nodeType
// );
// Function takes 2 parameters, 'richText' (Document type) and 'options' (optional, so it comes with default value)
function renderRichTextToReactComponent(richText: Document, options = {}) {
  // Declares constant variable 'defaultOptions' with object structure. Contains 'renderNode' property which is also an object. Inside 'renderNode', defines how specific Contentful block types should be rendered
  const defaultOptions = {
    renderNode: {
      // Provides rendering function that takes a node and children, returning React <li> elements with list-disc styling class
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
        return <li className="list-disc">{children}</li>;
      },
      // Provides rendering function, returns React <p> element
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p>{children}</p>
      ),
    },
  };
  // Calls 'documentToReactComponents' function, passing in richText and options object merging `defaultOptions` and provided `options`. Converts Contentful rich text into React component tree based on provided rendering options
  return documentToReactComponents(richText, { ...defaultOptions, ...options });
}

//Functional React component. Takes single prop 'nestedContent', which can have any type. Inside component, renders <span> element containing result of calling 'renderRichTextToReactComponent' with 'nestedContent' cast as 'Document'
const ContentItem = ({ nestedContent }: { nestedContent: any }) => (
  <ol>{renderRichTextToReactComponent(nestedContent as Document)}</ol>
);

// Functional React component. Renders <p> element. Maps over contentItem.content array, array should contain objects with 'content' property
const ContentParagraph = ({ contentItem }: { contentItem: any }) => (
  <p>
    {contentItem.content.map((nestedContent: any, nestedIndex: number) => (
      <ContentItem key={nestedIndex} nestedContent={nestedContent} />
    ))}
  </p>
);

// Functional React component. Renders <div> element with 'key' attribute based on 'section.sys.id'. Renders <h2> element with text content based on 'section.fields.title'. Renders nested <div> element--within which maps over 'section.fields.content.content', each element should be an object with a 'content' property. For each element, renders 'ContentParagraph' component with 'contentItem' as prop
const Section = ({ section }: { section: BioPageSectionType }) => (
  <div key={section.sys.id}>
    <h2 className="text-xl">{section.fields.title}</h2>
    <div className="text-sm">
      {section.fields.content.content.map(
        (
          contentItem: { content: Array<{ value: string }> },
          contentIndex: number
        ) => (
          <ContentParagraph key={contentIndex} contentItem={contentItem} />
        )
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
  // console.log(
  //   "RENDER",
  //   renderRichTextToReactComponent(docBio.specialties as Document)
  // );
  // console.log(
  //   "RENDERING BIOSECTION",
  //   docBio.bioPageSection[docBio.bioPageSection.length - 1]
  // );
  // console.log(
  //   "RESEARCH",
  //   docBio.bioPageSection[docBio.bioPageSection.length - 2].fields.content
  // );
  // console.log(
  //   "RESEARCH-CONTENT-NODETYPE",
  //   docBio.bioPageSection[docBio.bioPageSection.length - 2].fields.content
  //     .content[0].nodeType
  // );
  console.log(
    "PUBLICATIONS",
    docBio.bioPageSection[docBio.bioPageSection.length - 1].fields.content
  );
  console.log(
    "PUBLICATIONS-CONTENT-NODETYPE",
    docBio.bioPageSection[docBio.bioPageSection.length - 1].fields.content
      .content[0].nodeType
  );

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
      <div id="test-div text-xl">
        {/* console.log( "PUBLICATIONS-CONTENT-NODETYPE",
        docBio.bioPageSection[docBio.bioPageSection.length - 1].fields.content
        .content[0].nodeType ); */}
        <p>
          {
            docBio.bioPageSection[docBio.bioPageSection.length - 1].fields
              .content.content[0].nodeType
          }
        </p>
      </div>

      {/* Following code block resopnsible for rendering section with dynamic header based on section title and then renders the content of said section using 'Section' component */}
      <div id="temp-bio-page-sections">
        {docBio.bioPageSection.map((section: BioPageSectionType) => (
          <div key={section.sys.id}>
            {/* Render header based on section title */}
            {/* If 'educationAndCertificatesHeaderRendered' not true, and 'section.fields.title' matches following values, will render education and certificates header */}
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

// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
// {
//   nodeType: 'list-item',
//   data: {},
//   content: [ { nodeType: 'paragraph', data: {}, content: [Array] } ]
// }
