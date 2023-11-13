import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Image from 'next/image';

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
)

export default async function PatientCare() {
  // const patientCarePage = await getPatientCarePage();

  return (
    <main>
      <Tabs defaultValue="planning">
      <TabsList className="grid grid-cols-5">
          <TabsTrigger value="planning" className="ml-0"> {/* Overwrite left margin */}
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
          <TabsTrigger value="forms" className="mr-0">  {/* Overwrite right margin */}
            <h1>PATIENT FORMS</h1>
          </TabsTrigger>
      </TabsList>
      <TabsContent value="planning">
        {placeholderContent}
      </TabsContent>
      <TabsContent value="billing">
        {placeholderContent}
      </TabsContent>
      <TabsContent value="rights">
        {placeholderContent}
      </TabsContent>
      <TabsContent value="prep">
        {placeholderContent}
      </TabsContent>
      <TabsContent value="forms">
        {placeholderContent}
      </TabsContent>
    </Tabs>
    </main>
  );
}
