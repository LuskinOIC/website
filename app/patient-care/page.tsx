import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getPatientCarePage } from "@/app/utils/contentful";
import TabsTextOrCardContent from "../components/TabsTextOrCardContent";

const placeholderCard = {
  header: "Header",
  body: "Considerate and respectful care, and to be made comfortable. You have the right to respect for your cultural, psychosocial, spiritual, and personal values, beliefs and preferences. Have family (or other representative of your choosing) be involved in care, treatment, or services decisions to the extent permitted by you or your surrogate decision maker, in accordance with laws and regulations.   Know the name of the licensed health care practitioner acting within the scope of his or her professional licensure who has primary relationship for coordinating you",
  buttonLink: "/",
  buttonText: "Button",
};

const placeHolderFields = {
  tabTitle: "",
  cardContent: [
    placeholderCard,
    placeholderCard,
    placeholderCard,
    placeholderCard,
    placeholderCard,
    placeholderCard,
  ],
};

export default async function PatientCare() {
  const patientCarePage = await getPatientCarePage();

  return (
    <main>
      <Tabs defaultValue="planning">
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="planning" className="ml-0">
            <h1>
              {/* NOTE we will be able to iterate instead of hardcoding */}
              {patientCarePage.tabSection.fields.tabs[0].fields.tabTitle}
            </h1>
          </TabsTrigger>
          <TabsTrigger value="billing">
            <h1>{patientCarePage.tabSection.fields.tabs[1].fields.tabTitle}</h1>
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
          <TabsTextOrCardContent
            fields={patientCarePage.tabSection.fields.tabs[0].fields}
          />
        </TabsContent>
        <TabsContent value="billing">
          <TabsTextOrCardContent
            fields={patientCarePage.tabSection.fields.tabs[1].fields}
          />
        </TabsContent>
        <TabsContent value="rights">
          <TabsTextOrCardContent fields={placeHolderFields} />
        </TabsContent>
        <TabsContent value="prep">
          <TabsTextOrCardContent fields={placeHolderFields} />
        </TabsContent>
        <TabsContent value="forms">
          <TabsTextOrCardContent fields={placeHolderFields} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
