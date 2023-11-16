import { BLOCKS, MARKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Bold = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold">{children}</span>
);
const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="align-center">{children}</p>
);
const List = ({ children }: { children: React.ReactNode }) => (
  <li className="list-disc">{children}</li>
);

function renderRichTextToReactComponent(richText: Document, options = {}) {
  const defaultOptions = {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li>{children}</li>
      ),
    },
  };
}
