import PhysicianBio from "./[slug]/page";

export default function PhysicianBiography() {
  // const params = {
  //   slug: 'anthony-scaduto-md',
  // }
  const physicianSlugs = ["anthony-scaduto-md"];
  return (
    <main>
      {physicianSlugs.map((slug) => (
        <PhysicianBio key={slug} params={{ slug }} />
      ))}
    </main>
  );
}
