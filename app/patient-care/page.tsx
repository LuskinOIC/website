import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Image from 'next/image';

export default async function PatientCare() {
  // const patientCarePage = await getPatientCarePage();

  return (
    <main>
      <Tabs defaultValue="planning">
      <TabsList className={"grid grid-cols-5"}>
          <TabsTrigger value="planning">PLAN YOUR VISIT</TabsTrigger>
          <TabsTrigger value="billing">BILLING & INSURANCE</TabsTrigger>
          <TabsTrigger value="rights"><h1>PATIENT RIGHTS & RESPONSIBILITIES</h1></TabsTrigger>
          <TabsTrigger value="prep">APPOINTMENT PREPARATION</TabsTrigger>
          <TabsTrigger value="forms">PATIENT FORMS</TabsTrigger>
      </TabsList>
      <TabsContent value="planning">
        <div>
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
        </div>
      </TabsContent>
      <TabsContent value="billing">
        <div>
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
        </div>
      </TabsContent>
      <TabsContent value="rights">
        <div>
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
        </div>
      </TabsContent>
      <TabsContent value="prep">
        <div>
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
        </div>
      </TabsContent>
      <TabsContent value="forms">
        <div>
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
          <Image
            src="/placeholder-content.svg"
            alt="Placeholder content"
            width={1144}
            height={339}
          />
        </div>
      </TabsContent>
    </Tabs>
    </main>
  );
}
