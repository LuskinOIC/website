import React from "react";
import { getPhysicians, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { Document } from "@contentful/rich-text-types";
import { BioPageSectionType, AssetType } from "@/app/constants/types";
import Dropdown from "@/app/components/ui/Dropdown";
import Image from "next/image";
import phone from "@/public/phone.svg";
import renderRichTextToReactComponent, {
  ClassNames,
} from "@/app/utils/rich-text";
import BioPageSection from "@/app/components/BioPageSection";
// interface ClassNames {
//   ul?: string;
//   ol?: string;
//   li?: string;
//   paragraph?: string;
// }
// We need to export this function so that Next.js knows what pages to generate
// static HTML for.
export async function generateStaticParams() {
  const physicians = await getPhysicians();
  return physicians.map((evt) => ({ slug: evt.slug }));
}

const overviewClassNames: ClassNames = {
  paragraph: "pb-2",
};

export default async function PhysicianBio({
  params,
}: {
  params: { slug: string };
}) {
  const docBio = await getPhysicianBioBySlug(params.slug);
  const sectionTitles: string[] = [
    "Medical School",
    "Internship",
    "Board Certification",
    "Residency",
    "State License",
    "Fellowships",
    "Affiliations",
    "Awards and Recognitions",
  ];

  let educationAndCertificatesHeaderRendered = false;
  let researchInsightsAndPublicationsHeaderRendered = false;

  const isEducationAndCertificatesTitle = (title: string) =>
    !educationAndCertificatesHeaderRendered && sectionTitles.includes(title);

  const isResearchInsightsAndPublicationsTitle = (title: string) =>
    !researchInsightsAndPublicationsHeaderRendered &&
    (title === "Research Insights" || title === "Publications");

  const physicianName = docBio.physicianName;
  const physicianPortrait = docBio.physicianPortrait.fields.file.url;
  const portraitWidth =
    docBio.physicianPortrait.fields.file.details.image.width;
  const portraitHeight =
    docBio.physicianPortrait.fields.file.details.image.height;

  const generateTargetID = (title: string): string => {
    return `#${title.toLowerCase().split(" ").join("-")}`;
  };

  const options = [
    { value: "overview", label: "Overview", targetID: "#overview" },
    {
      value: "educationAndCertifications",
      label: "Education And Certifications",
      targetID: generateTargetID("Education And Certificates"),
    },
    {
      value: "researchInsightsAndPublications",
      label: "Research Insights And Publications",
      targetID: generateTargetID("Research Insights And Publications"),
    },
  ];

  return (
    <main className="m-10 lg:max-w-screen-xl lg:mx-auto">
      <div className="">
        <div className="lg:grid lg:grid-cols-3 gap-2">
          <div className="lg:h-96 h-72 mb-3">
            <Image
              src={physicianPortrait}
              alt={physicianName}
              width={portraitWidth}
              height={portraitHeight}
              style={{ objectPosition: "center 20%" }}
              className="object-none h-full sm:w-auto "
            />
          </div>

          <div className="NAME-AND-SPECIALTIES xl:-ml-24 lg:-ml-8 lg:mt-2">
            <h1 className="PHYSICIAN-NAME text-xl font-semibold mb-1 lg:mb-4 lg:text-3xl lg:pb-1 lg:font-medium">
              {physicianName}
            </h1>
            <h3 className="SPECIALIZE text-base lg:text-lg mb-1 lg:mb-2">
              Specializes in:
            </h3>
            <div className="SPECIALTIES">
              <div className="text-base pl-8 mb-4 lg:pl-0 lg:text-lg ">
                {renderRichTextToReactComponent(
                  docBio.specialties as unknown as Document,
                )}
              </div>
            </div>
          </div>
          <div className="CONTACTS">
            <div className="CONTACT-NUMBERS ">
              <div className="CONTACT-MOBILE lg:hidden mb-6">
                <p className="mb-2 text-base">To make an appointment:</p>
                <div className="flex text-lg">
                  <Image src={phone} alt="phone" className="mr-4" />
                  <p className="">{docBio.appointmentNumber}</p>
                </div>
              </div>
            </div>
            <div className="CONTACT-DESKTOP hidden lg:ml-20 lg:block lg:text-lg mt-16">
              <div className="row-span-2">
                <p className="PATIENT-NUMBER pb-2">Patient Appointment:</p>
                <p className="flex mb-4">
                  <Image src={phone} alt="phone" className="mr-4" />
                  {docBio.appointmentNumber}
                </p>
              </div>
              <div>
                <p className="PHYSICIAN-NUMBER pb-2">For Physician:</p>
                <p className="flex">
                  <Image src={phone} alt="phone" className="mr-4" />
                  {docBio.physicianNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden mb-6">
          <p className="pb-4 px-1">Choose a section you would like to review</p>
          <Dropdown placeHolder="Overview" options={options} />
        </div>
      </div>
      <div className="flex items-center mt-10 mb-2 hidden lg:block">
        <hr className="flex-grow border-[#99C221]"></hr>
      </div>
      <div id="overview mb-4">
        <h2 className="text-xl text-[#0076AD] mb-4" id="#overview">
          Overview
        </h2>
        <p className="text-lg pb-6">
          {renderRichTextToReactComponent(
            docBio.overview as unknown as Document,
            overviewClassNames,
          )}
        </p>
      </div>
      <div className="BIO-PAGE-SECTION">
        {docBio.bioPageSection.map(
          (section: BioPageSectionType): React.ReactNode => {
            const title = section.fields.title;

            if (
              isEducationAndCertificatesTitle(title) ||
              isResearchInsightsAndPublicationsTitle(title)
            ) {
              const headerText = isEducationAndCertificatesTitle(title)
                ? "Education and Certificates"
                : "Research Insights and Publications";

              const headerClassName = "text-xl text-[#0076AD] mb-6";

              const headerRenderedState = isEducationAndCertificatesTitle(title)
                ? (educationAndCertificatesHeaderRendered = true)
                : (researchInsightsAndPublicationsHeaderRendered = true);

              return (
                <div key={section.sys.id}>
                  <div className="flex items-center">
                    <hr className="flex-grow border-[#99C221] mb-2 hidden lg:block"></hr>
                  </div>

                  <h2
                    className={headerClassName}
                    id={generateTargetID(headerText)}
                  >
                    {headerText}
                  </h2>
                  {headerRenderedState}
                  <BioPageSection key={section.sys.id} section={section} />
                </div>
              );
            }
            if (
              title === "Awards and Recognition" &&
              Array.isArray(docBio.asset) &&
              docBio.asset.length > 0
            ) {
              return (
                <div key={`asset-container-${title}`} className="flex">
                  <div key={section.sys.id}>
                    <BioPageSection key={section.sys.id} section={section} />
                  </div>
                  {docBio.asset.map((asset: AssetType) => (
                    <div
                      key={asset.sys.id}
                      className="pb-8 pt-5 lg:pt-0 lg:pb-10"
                    >
                      <h3>{asset.fields.title}</h3>
                      <Image
                        src={asset.fields.file.url}
                        alt={asset.fields.description}
                        width={asset.fields.file.details.image.width}
                        height={asset.fields.file.details.image.height}
                        className="lg:w-3/5 lg:ml-24"
                      />
                    </div>
                  ))}
                  {/* <div key={section.sys.id}>
                    <BioPageSection key={section.sys.id} section={section} />
                  </div> */}
                </div>
              );
            }
            return (
              <div key={section.sys.id}>
                <BioPageSection key={section.sys.id} section={section} />
              </div>
            );
          },
        )}
      </div>
    </main>
  );
}
