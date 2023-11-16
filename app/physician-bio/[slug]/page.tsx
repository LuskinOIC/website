import { getPhysicianBio, getPhysicianBioBySlug } from "@/app/utils/contentful";
import { BLOCKS, MARKS, DOCUMENT } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
  const physicians = await getPhysicianBio();
  return physicians.map((evt) => ({ slug: evt.slug }));
}

// const Bold = ({ children }) => <span className="font-bold">{children}</span>;

// const Text = ({ children }) => <p className="align-center">{children}</p>;

// const List = ({ children }) => <li className="font-bold">{children}</li>;

// const optdefaultOptionsions = {
//   // renderMark: {
//   //   [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
//   // },
//   // renderNode: {
//   //   [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
//   // },
//   renderNode: {
//     [BLOCKS.LIST_ITEM]: (node, children) => <List>{children}</List>,
//   },
// };

// function renderRichTextToReactComponent(richText, options = {});
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
