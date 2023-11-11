import { getPhysicianBio, getPhysicianBioBySlug } from "@/app/utils/contentful";

// export async function generateStaticParams() {
//   const physicians = await getPhysicianBioBySlug('anthony-scaduto-md');
//   // temp hard code

//   if (physicians.fields && physicians.fields.slug) {
//     console.log(physicians.fields.slug);
//     const slug = physicians.fields.slug;
//     return[{ slug }]
//   }
//   console.log('HELLO WORLD', physicians.fields)
//   return [];
// }

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
  // console.log("DOC BIO", docBio);
  // console.log("SLUG", docBio.slug);
  console.log("PHYSICIAN NAME", docBio.physicianName);
  return (
    <main>
      <h1>Physician Bio - {docBio.physicianName}</h1>
    </main>
  );
}
