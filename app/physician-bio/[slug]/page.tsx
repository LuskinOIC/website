import { getPhysicianBio, getPhysicianBioBySlug } from "@/app/utils/contentful";

export async function generateStaticParams() {
  const physicians = await getPhysicianBio();
  return physicians.map((evt) => ({ slug: evt.slug }));
}

export default async function PhysicianBio({
  params,
}: {
  params: { slug: string };
}) {
  const docBio = await getPhysicianBioBySlug(params.slug);
  const firstObject = docBio.specialties;
  console.log("DOC BIO", docBio);

  console.log("docBio.specialties", firstObject);
  console.log("docBio.specialties.content", firstObject.content);
  console.log("docBio.specialties.content[0]", firstObject.content[0]);
  console.log("docBio.specialties.content[0]", firstObject.content[1]);

  return (
    <main>
      <h1 className="text-lg text-[#800080]">
        Physician Bio - {docBio.physicianName}
      </h1>
      <h4 className="text-lg text-[#800080]">Specialties</h4>
      <p className="text-[#800080]">
        {docBio.specialties.content[0].content[0].value}
      </p>
      {/* <p>{docBio.specialties.content[1].content[0].content}</p> */}
      <p>Appointment Number: {docBio.appointmentNumber}</p>
      <p>Physician Number: {docBio.physicianNumber}</p>
    </main>
  );
}
