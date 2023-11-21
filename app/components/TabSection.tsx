import Image from "next/image";
import { TabSectionType, TabType } from "../constants/types";
import { renderRichTextToReactComponent } from "../utils/rich-text";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

export default function TabSection({ fields: { tabs } }: TabSectionType) {
  return (
    <Tabs defaultValue="planning">
      <TabsList className="grid grid-cols-5">
        <TabsTrigger value="planning" className="ml-0">
          <h1>
            {/* NOTE we will be able to iterate instead of hardcoding */}
            {tabs[0].fields.tabTitle}
          </h1>
        </TabsTrigger>
        <TabsTrigger value="billing">
          <h1>{tabs[1].fields.tabTitle}</h1>
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
        <TabsTextOrCardContent fields={tabs[0].fields} />
      </TabsContent>
      <TabsContent value="billing">
        <TabsTextOrCardContent fields={tabs[1].fields} />
      </TabsContent>
      <TabsContent value="rights">{placeholderContent}</TabsContent>
      <TabsContent value="prep">{placeholderContent}</TabsContent>
      <TabsContent value="forms">{placeholderContent}</TabsContent>
    </Tabs>
  );
}

function TabsTextOrCardContent({
  fields: { richTextContent, cardContent },
}: TabType) {
  if (cardContent != undefined) {
    // There's card content, so render cards
    return <div />;
  } else if (richTextContent != undefined) {
    // There's text content, so render text
    return <div>{renderRichTextToReactComponent(richTextContent)}</div>;
  } else return <div />;
}
