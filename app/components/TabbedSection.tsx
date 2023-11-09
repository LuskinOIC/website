'use client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { TabbedSectionType } from "../constants/types";

export default function TabbedSection({
  keys,
  labels,
  contents
}: TabbedSectionType) {
  return (
    // <Tabs defaultValue={keys[0]} className="flex flex-col items-center w-full">
    <Tabs defaultValue={keys[0]}>
      <TabsList className={"grid grid-cols-5"}>
        {keys.map((key: string, index: number) => (
          <TabsTrigger key={key} value={key}>
            {labels[index]}
          </TabsTrigger>
        ))}
      </TabsList>
      {keys.map((key: string, index: number) => (
        <TabsContent key={key} value={key}>
          {contents[index]}
        </TabsContent>
      ))}
    </Tabs>
  );
}
