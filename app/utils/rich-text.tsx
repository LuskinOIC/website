import { BLOCKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


function renderRichTextToReactComponent(richText: Document, options = {}) {
  const defaultOptions = {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li className="list-disc">{children}</li>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p>{children}</p>
      ),
    },
  };
  return documentToReactComponents(richText, {...defaultOptions, ...options});
}

// more examples: https://github.com/contentful/rich-text/blob/master/packages/rich-text-react-renderer/src/index.tsx
