export function generateStaticParams() {
  return [{ slug: "place-holder" }];
}

export default function PatientStory({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Patient Story - {params.slug}</h1>
    </main>
  );
}
