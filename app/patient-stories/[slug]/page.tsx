// Main landing page for the institute's blog.
// Lists a feature article news, events, and patient stories.
export default function PatientStory({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Patient Story - {params.slug}</h1>
    </main>
  );
}
