import renderRichTextToReactComponent from "../utils/rich-text";
import { Document } from "@contentful/rich-text-types";
import { BioPageSectionType } from "../constants/types";

const ContentParagraph = ({ contentItem }: { contentItem: any }) => {
  return (
    <div className="pb-3">
      {renderRichTextToReactComponent(contentItem as Document)}
    </div>
  );
};

interface SectionProps {
  section: BioPageSectionType;
}

export default function BioPageSection({ section }: SectionProps) {
  return (
    <div key={section.sys.id}>
      <h2 className="text-lg font-bold lg:mb-4">{section.fields.title}</h2>
      <div className="text-base lg:pb-10">
        {section.fields.content.content.map(
          (
            contentItem: { content: Array<{ value: string }> },
            contentIndex: number
          ) => (
            <ContentParagraph key={contentIndex} contentItem={contentItem} />
          )
        )}
      </div>
    </div>
  );
}
