import React from "react";
import { getPhysicians, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { Document } from "@contentful/rich-text-types";
import { BioPageSectionType } from "@/app/constants/types";
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

const richTextClassNames: ClassNames = {
  paragraph: "text-base md:text-lg pb-8",
};

const researchPubClassNames: ClassNames = {
  paragraph: "text-base md:text-lg",
};

export default async function PhysicianBio({
  params,
}: {
  params: { slug: string };
}) {
  const docBio = await getPhysicianBioBySlug(params.slug);

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
      <div className="mx-auto w-10/12 md:w-4/5">
        <div className="gap-2 pt-12 md:grid md:grid-cols-3">
          <div className="mb-3 h-72 md:mr-4 md:h-96">
            <Image
              src={physicianPortrait}
              alt={physicianName}
              width={portraitWidth}
              height={portraitHeight}
              style={{ objectPosition: "center 20%" }}
              className="h-full object-none sm:w-auto md:rounded-md"
            />
          </div>

          <div className="NAME-AND-SPECIALTIES">
            <h1 className="PHYSICIAN-NAME mb-4 text-2xl font-semibold md:pb-1 md:text-3xl md:font-medium">
              {physicianName}
            </h1>
            <h3 className="SPECIALIZE md:text-md mb-2 text-base">
              Specializes in:
            </h3>

            <div className="md:text-md mb-4 pl-4 text-base">
              {renderRichTextToReactComponent(
                docBio.specialties as unknown as Document
              )}
            </div>
          </div>

          <div className="CONTACT-MOBILE mb-6 md:hidden">
            <p className="mb-5 text-base md:mb-2">To make an appointment:</p>
            <div className="flex text-lg">
              <Image src={phone} alt="phone" className="mb-6 mr-4 md:mb-0" />
              <p className="">{docBio.appointmentNumber}</p>
            </div>
          </div>

          <div className="CONTACT-DESKTOP mt-16 hidden md:ml-20 md:block md:text-lg">
            <div className="row-span-2">
              <p className="PATIENT-NUMBER pb-2">Patient Appointment:</p>
              <p className="mb-4 flex">
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

        <div className="mb-12 md:hidden">
          <p className="px-1 pb-4">Choose a section you would like to review</p>
          <Dropdown placeHolder="Overview" options={options} />
        </div>

        <div className="mb-2 mt-10 flex hidden items-center md:block">
          <hr className="flex-grow border-[#99C221]"></hr>
        </div>

        <h2 className="mb-8 text-xl text-[#0076AD]" id="#overview">
          OVERVIEW
        </h2>
        <div className="pb-6 text-lg">
          {renderRichTextToReactComponent(
            docBio.overview as unknown as Document,
            richTextClassNames
          )}
        </div>

        <div className="flex items-center">
          <hr className="mb-2 hidden flex-grow border-[#99C221] md:block"></hr>
        </div>
        <h2
          className="mb-6 text-xl text-[#0076AD]"
          id="#education-and-certificates">
          EDUCATION AND CERTIFICATES
        </h2>

        <div className="grid gap-6 pb-6 md:grid-cols-2">
          {docBio.bioPageSection.map(
            (section: BioPageSectionType): React.ReactNode => {
              return <BioPageSection key={section.sys.id} section={section} />;
            }
          )}
        </div>

        <div>
          <h2 className="pb-4 text-xl font-bold lg:text-2xl">Affiliations</h2>
          <div className="pb-6 text-lg">
            {renderRichTextToReactComponent(
              docBio.affiliations as unknown as Document,
              richTextClassNames
            )}
          </div>
        </div>
      </div>
      <div className="md:pr-20">
        <PageSection section={docBio.awardsAndRecognition} />
      </div>
      <div className="mx-auto w-10/12 md:w-4/5">
        <div className="flex items-center">
          <hr className="mb-2 hidden flex-grow border-[#99C221] md:block"></hr>
        </div>
        <h2
          className="mb-6 text-xl text-[#0076AD] md:pb-6"
          id="#research-insights-and-publications">
          RESEARCH INSIGHTS & PUBLICATIONS
        </h2>
        <div id="RESEARCH-INSIGHTS" className="pb-10">
          <h2 className="pb-4 text-xl font-bold lg:text-2xl">
            Research Insights
          </h2>
          {renderRichTextToReactComponent(
            docBio.researchInsights as unknown as Document,
            researchPubClassNames
          )}
        </div>
        <div id="PUBLICATIONS" className="pb-14">
          <h2 className="pb-4 text-xl font-bold lg:text-2xl">Publications</h2>
          {renderRichTextToReactComponent(
            docBio.publications as unknown as Document,
            researchPubClassNames
          )}
        </div>
      </div>
    </main>
  );
}
