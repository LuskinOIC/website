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
import { useRouter } from "next/navigation";
import { Text3 } from "./ui/Typography/Text";

const styles = {
  tabsList: (tabCount: number) => {
    // TODO: Refactor if possible
    const gridColCount =
      tabCount == 1
        ? "grid-cols-1"
        : tabCount == 2
        ? "grid-cols-2"
        : tabCount == 3
        ? "grid-cols-3"
        : tabCount == 4
        ? "grid-cols-4"
        : tabCount == 5
        ? "grid-cols-5"
        : tabCount == 6
        ? "grid-cols-6"
        : tabCount == 7
        ? "grid-cols-7"
        : tabCount == 8
        ? "grid-cols-8"
        : tabCount == 9
        ? "grid-cols-9"
        : tabCount == 10
        ? "grid-cols-10"
        : "grid-cols-0";
    return `grid ${gridColCount} h-16 min-w-fit w-4/5 mt-[24px] mb-4 justify-items-stretch rounded-none bg-white border-b-[0.188rem] border-[#5F7A9D] p-[0]`;
  },
  tabsTrigger: (index: number, tabCount: number) => {
    // Set left margin of first item and right margin of last item to 0
    let horizontalMargin: string = "";
    if (index == 0) {
      horizontalMargin = "ml-0 mr-1";
    } else if (index == tabCount - 1) {
      horizontalMargin = "ml-1 mr-0";
    } else {
      horizontalMargin = "mx-1";
    }

    return `flex flex-col h-[3.812rem] rounded-t-lg rounded-b-none ${horizontalMargin} px-2 text-[1rem] font-bold bg-slate-200 text-black data-[state=active]:bg-[#5F7A9D] data-[state=active]:text-white`;
  },
  dropdownSelectedItem:
    "py-4 grow self-start text-start align-middle overflow-hidden whitespace-nowrap text-ellipsis uppercase text-sm text-gray-400 font-medium",
  dropdownMenuItem:
    "w-full py-2 text-sm text-center overflow-hidden whitespace-nowrap text-ellipsis uppercase text-luskin-blue font-bold",
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
    // eslint-disable-next-line no-unused-vars
    tabsList: (tabCount: number) => string;
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
    <div className="hidden md:block mt-6 max-w-4/5 mx-[10%]">
      {" "}
      <Tabs
        value={selectedTab}
        className="flex flex-col items-center w-full h-fit mb-12"
      >
        <TabsList className={styles.tabsList(tabCount)}>
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab.fields.tabTitle}
              onClick={() => setSelectedTab(tab.fields.tabTitle)}
              className={styles.tabsTrigger(index, tabCount)}
            >
              <p className="max-w-full uppercase text-base two-line-ellipsis">
                {tab.fields.tabTitle}
              </p>{" "}
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
  const router = useRouter();

  return (
    /* Only show on mobile */
    <div className="relative flex md:hidden flex-col items-center w-full mt-6">
      <Text3 className="w-4/5]">
        Choose a section you would like to review
      </Text3>
      <div className="sticky top-0 flex flex-col items-center w-full pt-3 pb-1 bg-white">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-4/5 pl-4 border border-luskin-blue rounded-md">
            <div className="flex flex-row w-full">
              <p className={styles.dropdownSelectedItem}>{selectedTab}</p>
              <Image
                src="/dropdownarrow.svg"
                width={20}
                height={10}
                alt=""
                className="justify-self-end self-center mr-4"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-full w-[80vw]">
            {tabs.map((tab, index) => (
              <DropdownMenuItem
                key={index}
                onSelect={() => {
                  setSelectedTab(tab.fields.tabTitle);
                  router.push(
                    `/patient-care#${tab.fields.tabTitle.replace(
                      /[^A-z]/g,
                      "",
                    )}`,
                  );
                }}
              >
                <p className={styles.dropdownMenuItem}>{tab.fields.tabTitle}</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="pt-2 w-4/5">
        {tabs.map((tab, index) => (
          <div
            id={tab.fields.tabTitle}
            key={index}
            className="scroll-mt-[4.5rem]"
          >
            <Title3
              key={index}
              className="uppercase text-luskin-blue font-medium"
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
  fields: { richTextContent, tabContent },
}: TabType) {
  console.log(richTextContent);
  if (tabContent != undefined) {
    // There's card content, so render cards
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {tabContent.map((card, index) => (
          <Card
            key={index}
            className="col-span-1 shadow-none border-none pb-3 pr-10"
          >
            <CardHeader className="p-0 md:pt-4 pb-5">
              <CardTitle className="font-semibold">
                {card.fields.header}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 ">
              {renderRichTextToReactComponent(card.fields.body)}
            </CardContent>
            {card.fields.buttonLink && (
              <CardFooter className="p-0 pt-6">
                <Button
                  href={card.fields.buttonLink}
                  text={card.fields.buttonText}
                  className="mb-3 md:mb-8"
                />
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    );
  } else if (richTextContent != undefined) {
    // There's text content, so render text
    return (
      <div className="md:pt-7 pb-7">
        {renderRichTextToReactComponent(richTextContent)}
      </div>
    );
  } else return <div />;
}
