import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { Document } from "@contentful/rich-text-types";
import { getPatientCarePage } from "@/app/utils/contentful";
import { renderRichTextToReactComponent } from "@/app/utils/rich-text";

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
          {renderRichTextToReactComponent(
            patientCarePage.tabSection.fields.tabs[0].fields
              .richTextContent as unknown as Document,
          )}
        </TabsContent>
        <TabsContent value="billing">
          {renderRichTextToReactComponent(
            patientCarePage.tabSection.fields.tabs[1].fields
              .richTextContent as unknown as Document,
          )}
        </TabsContent>
        <TabsContent value="rights">{placeholderContent}</TabsContent>
        <TabsContent value="prep">{placeholderContent}</TabsContent>
        <TabsContent value="forms">{placeholderContent}</TabsContent>
      </Tabs>
    </main>
  );
}
