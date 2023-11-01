export default function PhysicianBio({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Physician Bio - {params.slug} </h1>
    </main>
  );
}
