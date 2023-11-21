import { TabType } from "../constants/types";
import { renderRichTextToReactComponent } from "../utils/rich-text";

export default function TabsTextOrCardContent({
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
