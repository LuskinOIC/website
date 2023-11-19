import PhysicianBio from "./[slug]/page";

export default function PhysicianBiography() {
  const physicianSlugs = ["anthony-scaduto-md"];
  return (
    <main>
      {physicianSlugs.map((slug) => (
        <PhysicianBio key={slug} params={{ slug }} />
      ))}
    </main>
  );
}
