import { getPhysicianBio, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { BLOCKS, MARKS, DOCUMENT } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Bold = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold">{children}</span>
);
const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="align-center">{children}</p>
);
const List = ({ children }: { children: React.ReactNode }) => (
  <li className="font-bold">{children}</li>
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
export default async function PhysicianBio({
  params,
}: {
  params: { slug: string };
}) {
  const docBio = await getPhysicianBioBySlug(params.slug);
  const firstObject = docBio.specialties;

  return (
    <main>
      <h1 className="text-lg text-[#800080]">
        Physician Bio - {docBio.physicianName}
      </h1>
      <h4 className="text-lg text-[#800080]">Specialties</h4>
      <p className="text-[#800080]"></p>
      {documentToReactComponents(docBio.specialties, options)}
      <p>Appointment Number: {docBio.appointmentNumber}</p>
      <p>Physician Number: {docBio.physicianNumber}</p>
    </main>
  );
}
