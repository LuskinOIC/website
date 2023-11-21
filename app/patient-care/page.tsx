import { getPatientCarePage } from "@/app/utils/contentful";
import TabSection from "../components/TabsSection";

/* Here to next comment can be removed once values are in Contentful */
const placeholderCard = {
  header: "Header",
  body: "Considerate and respectful care, and to be made comfortable. You have the right to respect for your cultural, psychosocial, spiritual, and personal values, beliefs and preferences. Have family (or other representative of your choosing) be involved in care, treatment, or services decisions to the extent permitted by you or your surrogate decision maker, in accordance with laws and regulations.   Know the name of the licensed health care practitioner acting within the scope of his or her professional licensure who has primary relationship for coordinating you",
  buttonLink: "/",
  buttonText: "Button",
};

const placeholderCardContent = [
  placeholderCard,
  placeholderCard,
  placeholderCard,
  placeholderCard,
  placeholderCard,
  placeholderCard,
];
/* */

export default async function PatientCare() {
  const patientCarePage = await getPatientCarePage();

  /* Here to next comment can be removed once values are in Contentful */
  if (patientCarePage.tabSection.fields.tabs.length == 2) {
    patientCarePage.tabSection.fields.tabs.push(
      {
        fields: {
          tabTitle: "Patient Rights & Responsibilities",
          cardContent: placeholderCardContent,
        },
      },
      {
        fields: {
          tabTitle: "Appointment Preparation",
          cardContent: placeholderCardContent,
        },
      },
      {
        fields: {
          tabTitle: "Patient Forms",
          cardContent: placeholderCardContent,
        },
      },
    );
  }
  /* */

  return (
    <main>
      <TabSection fields={patientCarePage.tabSection.fields} />
    </main>
  );
}
