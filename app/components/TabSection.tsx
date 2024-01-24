"use client";

import { TabType } from "../constants/types";
import Button from "@/app/components/ui/Button";
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
} from "../../components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { Title2, Title3 } from "./ui/Typography/Title";
import { usePathname, useRouter } from "next/navigation";
import { Text } from "./ui/Typography/Text";

const styles = {
  tabsList: (tabCount: number) => {
    // TODO: Refactor if possible
    let gridColCount: string;
    switch (tabCount) {
      case 1:
        gridColCount = "grid-cols-1";
        break;
      case 2:
        gridColCount = "grid-cols-2";
        break;
      case 3:
        gridColCount = "grid-cols-3";
        break;
      case 4:
        gridColCount = "grid-cols-4";
        break;
      case 5:
        gridColCount = "grid-cols-5";
        break;
      case 6:
        gridColCount = "grid-cols-6";
        break;
      case 7:
        gridColCount = "grid-cols-7";
        break;
      case 8:
        gridColCount = "grid-cols-8";
        break;
      case 9:
        gridColCount = "grid-cols-9";
        break;
      case 10:
        gridColCount = "grid-cols-10";
        break;
      default:
        gridColCount = "grid-cols-0";
    }
    return `grid ${gridColCount} h-16 min-w-fit mt-[24px] mb-4 justify-items-stretch rounded-none bg-white border-b-[0.188rem] border-[#5F7A9D] p-[0]`;
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

export default function TabSection({
  tabs,
  className = "",
}: {
  tabs: TabType[];
  className?: string;
}) {
  // Use state to switch tabs with the dropdown menu
  const [selectedTab, setSelectedTab] = useState(tabs[0].fields.tabTitle);
  // Use state to trigger component refresh once tabs fully load
  const [tabCount, setTabCount] = useState(tabs.length);
  if (tabCount != tabs.length) {
    setSelectedTab(tabs[0].fields.tabTitle);
    setTabCount(tabs.length);
  }

  return (
    <div className={className}>
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
      <Tabs value={selectedTab} className="">
        <TabsList className={styles.tabsList(tabCount)}>
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={`TabsTrigger.${index}`}
              value={tab.fields.tabTitle}
              onClick={() => setSelectedTab(tab.fields.tabTitle)}
              className={styles.tabsTrigger(index, tabCount)}
            >
              <p className="uppercase text-base two-line-ellipsis">
                {tab.fields.tabTitle}
              </p>{" "}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="">
          {tabs.map((tab, index) => (
            <TabsContent
              key={`TabsContent.${index}`}
              value={tab.fields.tabTitle}
              className="tab-container"
            >
              <TabsTextOrCardContent fields={tab.fields} />
            </TabsContent>
          ))}
        </div>
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
  const pathname = usePathname();

  return (
    /* Only show on mobile */
    <div className="relative flex md:hidden flex-col items-center w-full mt-6">
      <Text className="w-4/5" size="regular">
        Choose a section you would like to review
      </Text>
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
                key={`DropdownMenuItem.${index}`}
                onSelect={() => {
                  setSelectedTab(tab.fields.tabTitle);
                  router.push(
                    `${pathname}#${tab.fields.tabTitle.replace(/[^A-z]/g, "")}`,
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
            key={`MobileTabsContent.${index}`}
            className="scroll-mt-[4.5rem]"
          >
            <Title3
              key={`MobileTabsTitle.${index}`}
              className="uppercase text-luskin-blue font-medium"
            >
              {tab.fields.tabTitle}
            </Title3>
            <TabsTextOrCardContent
              key={`TabsTextOrCardContent.${index}`}
              fields={tab.fields}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TabsTextOrCardContent({
  fields: { type, richTextContent, cardContent },
}: TabType) {
  if (type == "Double Column" && cardContent) {
    // Render two columns of cards
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:pt-7 pb-7">
        {cardContent.map((card, index) => (
          <Card
            key={`Card.${index}`}
            className="col-span-1 shadow-none border-none pb-3 pr-10"
          >
            <CardHeader className="p-0 pb-5">
              <Title2 className="font-semibold">{card.fields.title}</Title2>
            </CardHeader>
            <CardContent className="p-0">
              {card.fields.richContent &&
                renderRichTextToReactComponent(card.fields.richContent)}
            </CardContent>
            {card.fields.button && (
              <CardFooter className="p-0 pt-6">
                <Button
                  href={card.fields.button.fields.buttonUrl}
                  text={card.fields.button.fields.text}
                  className="mb-3 md:mb-8"
                  isExternal={card.fields.button.fields.externalLink}
                />
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    );
  } else if (type == "Single Column" && richTextContent) {
    // Render one column of rich text
    return (
      <div className="md:pt-7 pb-7">
        {renderRichTextToReactComponent(richTextContent)}
      </div>
    );
  } else return <div />;
}
