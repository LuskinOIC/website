"use client";

import { TabSectionType, TabType } from "../constants/types";
import Button from "./ui/Button";
import renderRichTextToReactComponent from "../utils/rich-text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useState } from "react";

const styles = {
  tabsList: (tabCount: number) =>
    `grid grid-cols-${tabCount} h-16 min-w-fit w-[65rem] mt-[24px] mb-10 justify-items-stretch rounded-md bg-white border-b-[0.188rem] border-[#5F7A9D] p-[0]`,
  tabsTrigger: (index: number, tabCount: number) => {
    // Set left margin of first item and right margin of last item to 0
    let horizontalMargin: string = "";
    if (index == 0) {
      horizontalMargin = "ml-0 mr-1";
    } else if (index == tabCount - 1) {
      horizontalMargin = "ml-1 mr-1";
    } else {
      horizontalMargin = "mx-1";
    }

    return `flex flex-col h-[3.812rem] min-w-fit rounded-t-lg ${horizontalMargin} px-[30px] pt-[16px] pb-[13px] text-[1rem] font-bold bg-slate-200 text-black data-[state=active]:bg-[#5F7A9D] data-[state=active]:text-white`;
  },
};

export default function TabSection({ fields: { tabs } }: TabSectionType) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].fields.tabTitle);
  // Trigger component refresh once tabs fully load
  const [tabCount, setTabCount] = useState(tabs.length);
  if (tabCount != tabs.length) {
    setTabCount(tabs.length);
  }

  return (
    <Tabs
      defaultValue={selectedTab}
      className="flex flex-col items-center w-full h-fit pb-15"
    >
      <TabsList className={styles.tabsList(tabCount)}>
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={index}
            value={tab.fields.tabTitle}
            onClick={() => setSelectedTab(tab.fields.tabTitle)}
            className={styles.tabsTrigger(index, tabCount)}
          >
            <h1 className="uppercase">{tab.fields.tabTitle}</h1>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabsContent
          key={index}
          value={tab.fields.tabTitle}
          className="w-10/12"
        >
          <TabsTextOrCardContent fields={tab.fields} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function TabsTextOrCardContent({
  fields: { richTextContent, cardContent },
}: TabType) {
  if (cardContent != undefined) {
    // There's card content, so render cards
    return (
      <div className="grid grid-cols-2">
        {cardContent.map((card, index) => (
          <Card key={index} className="col-span-1 shadow-none border-none pb-5">
            <CardHeader>
              <CardTitle>{card.header}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{card.body}</p>
            </CardContent>
            <CardFooter>
              <Button
                href={card.buttonLink}
                text={card.buttonText}
                className="font-bold align-middle"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  } else if (richTextContent != undefined) {
    // There's text content, so render text
    return <div>{renderRichTextToReactComponent(richTextContent)}</div>;
  } else return <div />;
}
