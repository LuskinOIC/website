import React from "react";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Title1, Title2, Title3 } from "../components/ui/Typography/Title";
import { cn } from "@/lib/utils";

export interface ClassNames {
  ul?: string;
  ol?: string;
  li?: string;
  paragraph?: string;
}

export default function renderRichTextToReactComponent(
  richText: Document,
  classNames?: ClassNames,
  options = {},
) {
  const defaultOptions = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => {
        return (
          <ul className={cn(classNames?.ul, "list-disc pl-6")}>{children}</ul>
        );
      },
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => {
        return (
          <ol className={cn(classNames?.ol, "list-decimal pl-6")}>
            {children}
          </ol>
        );
      },
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
        return (
          <li className={cn(classNames?.li, "py-0 md:py-0")}>{children}</li>
        );
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className={cn(classNames?.paragraph, "py-[0.16rem] md:py-1")}>
          {children}
        </p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
        <Title1 className="font-bold pb-5">{children}</Title1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <Title2 className="font-bold pb-5">{children}</Title2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <Title2 className="font-semibold pb-5">{children}</Title2>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
        <Title3 className="font-medium">{children}</Title3>
      ),
    },
  };
  return (
    <div className="rich-text-wrapper">
      {documentToReactComponents(richText, { ...defaultOptions, ...options })}
    </div>
  );
}

// more examples: https://github.com/contentful/rich-text/blob/master/packages/rich-text-react-renderer/src/index.tsx
