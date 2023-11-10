export function generateStaticParams() {
  return [{ slug: "place-holder" }];
}

export default async function PhysicianBio({
  params,
}: {
  params: { slug: string };
}) {
  const docBio = await getPhysicianBioBySlug(params.slug);
  console.log("DOC BIO", docBio);
  console.log("SLUG", docBio.slug);
  console.log("PHYSICIAN NAME", docBio.physicianName);
  return (
    <main>
      <h1>Physician Bio - {docBio.physicianName}</h1>
    </main>
  );
}
