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
    <Tabs defaultValue={keys[0]} className="flex flex-col items-center w-full">
      <TabsList className={`h-[88px] w-[1050px] pt-[24px] grid grid-cols-${keys.length}`}>
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
