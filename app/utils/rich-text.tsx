import React from "react";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
          <ul className={classNames?.ul || "list-disc pl-6"}>{children}</ul>
        );
      },
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => {
        return (
          <ol className={classNames?.ol || "list-decimal pl-6"}>{children}</ol>
        );
      },
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
        return <li className={classNames?.li || ""}>{children}</li>;
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className={classNames?.paragraph || ""}>{children}</p>
      ),
    },
  };
  return documentToReactComponents(richText, { ...defaultOptions, ...options });
}

// more examples: https://github.com/contentful/rich-text/blob/master/packages/rich-text-react-renderer/src/index.tsx
