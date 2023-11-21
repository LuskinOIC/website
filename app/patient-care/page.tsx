import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getPatientCarePage } from "@/app/utils/contentful";
import TabsTextOrCardContent from "../components/TabsTextOrCardContent";

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
      <Tabs
        defaultValue={patientCarePage.tabSection.fields.tabs[0].fields.tabTitle}
      >
        <TabsList
          className={
            "grid grid-cols-" + patientCarePage.tabSection.fields.tabs.length
          }
        >
          {patientCarePage.tabSection.fields.tabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.fields.tabTitle}
              className="ml-0"
            >
              <h1 className="uppercase">{tab.fields.tabTitle}</h1>
            </TabsTrigger>
          ))}
        </TabsList>
        {patientCarePage.tabSection.fields.tabs.map((tab, index) => (
          <TabsContent key={index} value={tab.fields.tabTitle}>
            <TabsTextOrCardContent fields={tab.fields} />
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
