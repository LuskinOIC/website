import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsTextOrCardContent from "./TabsTextOrCardContent";
import { TabSectionType } from "../constants/types";

export default function TabSection({ fields: { tabs } }: TabSectionType) {
  return (
    <Tabs defaultValue={tabs[0].fields.tabTitle}>
      <TabsList className={"grid grid-cols-" + tabs.length}>
        {tabs.map((tab, index) => (
          <TabsTrigger key={index} value={tab.fields.tabTitle} className="ml-0">
            <h1 className="uppercase">{tab.fields.tabTitle}</h1>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent key={index} value={tab.fields.tabTitle}>
          <TabsTextOrCardContent fields={tab.fields} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
