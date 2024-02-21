import React from "react";
import renderRichTextToReactComponent from "../utils/rich-text";
import { Document } from "@contentful/rich-text-types";
import { GridSectionType } from "../constants/types";

const ContentParagraph = ({ contentItem }: { contentItem: any }) => {
  return (
    <div className="md:pb-6 pb-3">
      {renderRichTextToReactComponent(contentItem as Document)}
    </div>
  );
};

interface SectionProps {
  section: GridSectionType;
}

function GridSection({ section }: SectionProps) {
  return (
    <div key={section.sys.id}>
      <h2 className="text-xl lg:text-2xl font-bold pb-4">
        {section.fields.title}
      </h2>
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

export default function GridLayoutSection({ section }: any) {
  return (
    <div className="block mx-auto px-5">
      <div className="grid gap-6 pb-6 md:grid-cols-2">
        {section.fields.gridLayout &&
          section.fields.gridLayout.map(
            (grid: GridSectionType): React.ReactNode => {
              return <GridSection key={grid.sys.id} section={grid} />;
            },
          )}
      </div>
    </div>
  );
}
