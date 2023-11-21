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
