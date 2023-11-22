"use client";

import { TabSectionType, TabType } from "../constants/types";
import Button from "./ui/Button";
import { renderRichTextToReactComponent } from "../utils/rich-text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useState } from "react";

export default function TabSection({ fields: { tabs } }: TabSectionType) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].fields.tabTitle);
  // Trigger component refresh once tabs fully load
  const [tabCount, setTabCount] = useState(tabs.length);
  if (tabCount != tabs.length) {
    setTabCount(tabs.length);
  }

  return (
    <Tabs defaultValue={selectedTab}>
      <TabsList className={"grid grid-cols-" + tabCount}>
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={index}
            value={tab.fields.tabTitle}
            onClick={() => setSelectedTab(tab.fields.tabTitle)}
            className={
              /* Set left margin of first item and right margin of last item to 0 */
              index == 0 ? "ml-0" : index == tabCount - 1 ? "mr-0" : ""
            }
          >
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
