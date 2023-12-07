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
import PageSection from "@/app/components/PageSection/PageSection";

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
    <main className="">
      <div className="w-10/12 md:w-4/5 mx-auto">
        <div className="md:grid md:grid-cols-3 gap-2 pt-12">
          <div className="md:h-96 h-72 mb-3 md:mr-4">
            <Image
              src={physicianPortrait}
              alt={physicianName}
              width={portraitWidth}
              height={portraitHeight}
              style={{ objectPosition: "center 20%" }}
              className="object-none h-full sm:w-auto"
            />
          </div>

          <div className="NAME-AND-SPECIALTIES">
            <h1 className="PHYSICIAN-NAME text-xl font-semibold mb-1 md:mb-4 md:text-3xl md:pb-1 md:font-medium">
              {physicianName}
            </h1>
            <h3 className="SPECIALIZE text-base md:text-md mb-1 md:mb-2">
              Specializes in:
            </h3>

            <div className="text-base pl-1 mb-4 md:pl-4 md:text-md">
              {renderRichTextToReactComponent(
                docBio.specialties as unknown as Document
              )}
            </div>
          </div>

          <div className="CONTACT-MOBILE md:hidden mb-6">
            <p className="mb-2 text-base">To make an appointment:</p>
            <div className="flex text-lg">
              <Image src={phone} alt="phone" className="mr-4" />
              <p className="">{docBio.appointmentNumber}</p>
            </div>
          </div>

          <div className="CONTACT-DESKTOP hidden md:ml-20 md:block md:text-lg mt-16">
            <div className="row-span-2">
              <p className="PATIENT-NUMBER pb-2">Patient Appointment:</p>
              <p className="flex mb-4">
                <Image src={phone} alt="phone" className="mr-4" />
                {docBio.appointmentNumber}
              </p>
            </div>

            <p className="PHYSICIAN-NUMBER pb-2">For Physician:</p>
            <p className="flex">
              <Image src={phone} alt="phone" className="mr-4" />
              {docBio.physicianNumber}
            </p>
          </div>
        </div>

        <div className="md:hidden mb-6">
          <p className="pb-4 px-1">Choose a section you would like to review</p>
          <Dropdown placeHolder="Overview" options={options} />
        </div>

        <div className="flex items-center mt-10 mb-2 hidden md:block">
          <hr className="flex-grow border-[#99C221]"></hr>
        </div>

        <h2 className="text-xl text-[#0076AD] mb-4" id="#overview">
          Overview
        </h2>
        <div className="text-lg pb-6">
          {renderRichTextToReactComponent(
            docBio.overview as unknown as Document,
            overviewClassNames
          )}
        </div>

        <h2
          className="text-xl text-[#0076AD] mb-6"
          id="education-and-certificates">
          Education and Certificates
        </h2>

        <div className="flex items-center">
          <hr className="flex-grow border-[#99C221] mb-2 hidden md:block"></hr>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* docBio.educationAndCertificates */}
          {docBio.bioPageSection.map(
            (section: BioPageSectionType): React.ReactNode => {
              const title = section.fields.title;

              return <BioPageSection key={section.sys.id} section={section} />;
            }
          )}
        </div>

        <div>
          <h2 className="text-lg font-bold lg:mb-4">
            Affiliations
          </h2>
          <div className="text-lg pb-6">
            {renderRichTextToReactComponent(
              docBio.affiliations as unknown as Document,
              overviewClassNames
            )}
          </div>
        </div>
      </div>

      <PageSection section={docBio.awardsAndRecognition} />
    </main>
  );
}
