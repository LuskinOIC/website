import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContentData,
} from "@/components/ui/tabs";
import Image from "next/image";
import { BLOCKS, Document } from "@contentful/rich-text-types";

const placeholderContent = (
  <div className="flex flex-col items-center">
    <Image
      src="/tabbed-placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
      className="mb-10"
    />
    <Image
      src="/tabbed-placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
      className="mb-10"
    />
    <Image
      src="/tabbed-placeholder-content.svg"
      alt="Placeholder content"
      width={1144}
      height={339}
      className="mb-10"
    />
  </div>
);

export default async function PatientCare() {
  // const patientCarePage = await getPatientCarePage();

  return (
    <main>
      <Tabs defaultValue="planning">
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="planning" className="ml-0">
            <h1>PLAN</h1>
            <h1>YOUR VISIT</h1>
          </TabsTrigger>
          <TabsTrigger value="billing">
            <h1>BILLING &</h1>
            <h1>INSURANCE</h1>
          </TabsTrigger>
          <TabsTrigger value="rights">
            <h1>PATIENT RIGHTS &</h1>
            <h1>RESPONSIBILITIES</h1>
          </TabsTrigger>
          <TabsTrigger value="prep">
            <h1>APPOINTMENT</h1>
            <h1>PREPARATION</h1>
          </TabsTrigger>
          <TabsTrigger value="forms" className="mr-0">
            <h1>PATIENT FORMS</h1>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="planning">
          <TabsContentData
            cardContent={[
              {
                header: "test",
                body: "test",
                buttonText: "button",
                buttonLink: "/",
              },
            ]}
          />
        </TabsContent>
        <TabsContent value="billing">
          <TabsContentData
            textContent={[
              {
                header: "test",
                richTextBody: richTextDocument,
              },
            ]}
          />
        </TabsContent>
        <TabsContent value="rights">{placeholderContent}</TabsContent>
        <TabsContent value="prep">{placeholderContent}</TabsContent>
        <TabsContent value="forms">{placeholderContent}</TabsContent>
      </Tabs>
    </main>
  );
}

const richTextDocument: Document = {
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [
    {
      nodeType: BLOCKS.OL_LIST,
      data: {},
      content: [
        {
          nodeType: BLOCKS.LIST_ITEM,
          data: {},
          content: [
            {
              nodeType: 'text',
              data: {},
              value: "Considerate and respectful care, and to be made comfortable. You have the right to respect for your cultural, psychosocial, spiritual, and personal values, beliefs and preferences.",
              marks: [],
            },
            {
              nodeType: 'text',
              data: {},
              value: "Have family (or other representative of your choosing) be involved in care, treatment, or services decisions to the extent permitted by you or your surrogate decision maker, in accordance with laws and regulations.",
              marks: [],
            },
            {
              nodeType: 'text',
              data: {},
              value: "Know the name of the licensed health care practitioner acting within the scope of his or her professional licensure who has primary relationship for coordinating your care, and the names and professional relationships of physicians and nonphysicians who will see you.",
              marks: [],
            },
          ]
        },
      ],
    }
  ],
};

// `
// 1. Considerate and respectful care, and to be made comfortable. You have the right to respect for your cultural, psychosocial, spiritual, and personal values, beliefs and preferences.
// 2. Have family (or other representative of your choosing) be involved in care, treatment, or services decisions to the extent permitted by you or your surrogate decision maker, in accordance with laws and regulations.
// 3. Know the name of the licensed health care practitioner acting within the scope of his or her professional licensure who has primary relationship for coordinating your care, and the names and professional relationships of physicians and nonphysicians who will see you.
// 4. Receive information about health status, diagnosis, prognosis course of treatment, prospects for recovery and outcomes (including unanticipated outcomes) in terms you can understand. Receive information in a manner tailored to your level of understanding, including provision of interpretive assistance or assistive devices. You have the right to effective communication and to participate in the development and implementation of your plan of care.
// 5. Make decisions regarding medical care, and receive as much information about any proposed treatment or procedure as you may need in order to give informed consent or to refuse a course of treatment. Except in emergencies, this information shall include a description of the procedure or treatment, the medically significant risks involved, alternate courses of treatment or no treatment and the risks involved in each, and the name of the person who will carry out the procedure or treatment. Receive assistance when requesting a change in physician if other qualified physicians are available.
// 6. Give or withhold informed consent to produce or use recordings, film, or other images for purposes other than care, and to request cessation of production of the recordings, films or other images at any time.
// 7. Request or refuse treatment, to the extent permitted by law. However, you do not have the right to demand inappropriate or medically unnecessary treatment or services. You have the right to leave the facility even against the advice of members of the medical staff, to the extent permitted by law.
// 8. Be advised if the facility/licensed healthcare practitioner acting within the scope of his or her professional licensure proposes to engage in or perform human experimentation affecting your care or treatment. You have the right to refuse to participate in such research projects.
// 9. Appropriate assessment and management of pain, information about pain, pain relief measures and participation in pain management decisions.

// If a patient is adjudged incompetent under applicable State Laws by a court of proper jurisdiction, the rights of the patient are exercised by the person appointed under State Law to act on the patient’s behalf.
// If a State court has not adjudged a patient incompetent, any legal representative or surrogate designated by the patient in accordance with State law may exercise the patient’s rights to the extent allowed by State law.
// File a grievance. If you want to file a grievance with this facility, you may do so by writing or by calling:Patient Relations OfficerOICPatientRelations@mednet.ucla.edu213.742.1336403 West Adams Boulevard, Los Angeles CA 90007The grievance committee will review each grievance and provide you with a written response within 10 business days. The written response will contain the name of a person to contact at the facility, the steps taken to investigate the grievance, the results of the grievance process. Concerns regarding quality of care or premature discharge will also be referred to the appropriate Quality Assurance and Performance Improvement (QAPI) committee.
// You may also contact the following entities to express any concerns, complaints or grievances you may have:Medical Board of California Central Complaint Unit2005 Evergreen Street, Suite 1200, Sacramento, CA 95815Toll-Free: 800.633.2322Phone: 916.263.2382 Fax: 916.263.2435https://www.mbc.ca.gov/Breeze/Complaints.aspxMedicare: Office of Medicare Ombudsmanhttp://www.medicare.gov/claims-and-appeals/medicare-rights/get-help/ ombudsman.html800.MEDICARE
// `
