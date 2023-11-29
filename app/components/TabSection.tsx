// TODO: Change hardcoded grid-cols-5 to grid-cols-${tabCount} in styles.tabsList
"use client";

import { TabSectionType, TabType } from "../constants/types";
import Button from "./ui/Button";
import renderRichTextToReactComponent from "../utils/rich-text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { Title3 } from "./ui/Typography/Title";

const styles = {
  tabsList: (/* tabCount: number */) =>
    `grid grid-cols-5 h-16 min-w-fit w-[65rem] mt-[24px] mb-10 justify-items-stretch rounded-md bg-white border-b-[0.188rem] border-[#5F7A9D] p-[0]`,
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
  // Use state to switch tabs with the dropdown menu
  const [selectedTab, setSelectedTab] = useState(tabs[0].fields.tabTitle);
  // Use state to trigger component refresh once tabs fully load
  const [tabCount, setTabCount] = useState(tabs.length);
  if (tabCount != tabs.length) {
    setSelectedTab(tabs[0].fields.tabTitle);
    setTabCount(tabs.length);
  }

  return (
    <div>
      <DesktopTabSection
        styles={styles}
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabCount={tabCount}
      />
      <MobileTabSection
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
}

type DesktopTabSectionType = {
  styles: {
    tabsList: (/* tabCount: number */) => string;
    // eslint-disable-next-line no-unused-vars
    tabsTrigger: (index: number, tabCount: number) => string;
  };
  tabs: any[];
  selectedTab: string;
  setSelectedTab: any;
  tabCount: number;
};

function DesktopTabSection({
  styles,
  tabs,
  selectedTab,
  setSelectedTab,
  tabCount,
}: DesktopTabSectionType) {
  return (
    /* Only show on desktop */
    <div className="hidden md:block mt-6">
      <Tabs
        value={selectedTab}
        className="flex flex-col items-center w-full h-fit mb-12"
      >
        <TabsList className={styles.tabsList(/* tabCount */)}>
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.fields.tabTitle}
              onClick={() => setSelectedTab(tab.fields.tabTitle)}
              className={styles.tabsTrigger(index, tabCount)}
            >
              <Title3 className="uppercase">{tab.fields.tabTitle}</Title3>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab, index) => (
          <TabsContent
            key={index}
            value={tab.fields.tabTitle}
            className="flex flex-col items-center w-10/12"
          >
            <TabsTextOrCardContent fields={tab.fields} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

type MobileTabSectionType = {
  tabs: any[];
  selectedTab: string;
  setSelectedTab: any;
};

function MobileTabSection({
  tabs,
  selectedTab,
  setSelectedTab,
}: MobileTabSectionType) {
  return (
    /* Only show on mobile */
    <div className="flex md:hidden flex-col items-center w-full mt-6">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-[85vw] h-10 pl-5 border border-luskin-blue rounded-md">
          <div className="flex flex-row w-full">
            <Title3 className="grow self-start text-start align-middle uppercase text-sm text-gray-500">
              {selectedTab}
            </Title3>
            <Image
              src="/dropdownarrow.svg"
              width={20}
              height={10}
              alt=""
              className="justify-self-end self-center mr-4"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[85vw]">
          {tabs.map((tab, index) => (
            <DropdownMenuItem
              key={index}
              onSelect={() => setSelectedTab(tab.fields.tabTitle)}
            >
              <Title3 className="uppercase text-luskin-blue font-bold">
                {tab.fields.tabTitle}
              </Title3>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="pt-10 w-4/5">
        {tabs.map((tab, index) => (
          <div key={index}>
            <Title3
              key={index}
              className="mt-3 uppercase text-luskin-blue font-medium"
            >
              {tab.fields.tabTitle}
            </Title3>
            <TabsTextOrCardContent key={index} fields={tab.fields} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TabsTextOrCardContent({
  fields: { richTextContent, cardContent },
}: TabType) {
  if (cardContent != undefined) {
    // There's card content, so render cards
    return (
      <div className="grid grid-cols-1 md:grid-cols-2">
        {cardContent.map((card, index) => (
          <Card
            key={index}
            className="col-span-1 shadow-none border-none pb-3 pr-10"
          >
            <CardHeader className="p-0 pt-4 pb-5">
              <CardTitle className="font-medium">{card.header}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p>{card.body}</p>
            </CardContent>
            <CardFooter className="p-0 pt-6">
              <Button
                href={card.buttonLink}
                text={card.buttonText}
                className="font-bold align-middle p-2 px-4 mb-3"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  } else if (richTextContent != undefined) {
    // There's text content, so render text
    return (
      <div className="pb-7">
        {renderRichTextToReactComponent(richTextContent)}
      </div>
    );
  } else return <div />;
}
