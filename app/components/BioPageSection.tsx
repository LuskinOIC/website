import renderRichTextToReactComponent from "../utils/rich-text";
import { Document } from "@contentful/rich-text-types";
import { BioPageSectionType } from "../constants/types";

const ContentParagraph = ({ contentItem }: { contentItem: any }) => {
  return (
    <div className="md:pb-6 pb-3">
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
      <h2 className="text-xl font-bold pb-4">{section.fields.title}</h2>
      <div className="md:text-lg">
        {section.fields.content.content.map(
          (
            contentItem: { content: Array<{ value: string }> },
            contentIndex: number,
          ) => (
            <ContentParagraph key={contentIndex} contentItem={contentItem} />
          ),
        )}
      </div>
    </div>
  );
}
