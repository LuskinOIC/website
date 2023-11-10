import PhysicianBio from './[slug]/page'

export default function PhysicianBiography() {
  const params = {
    slug: 'anthony-scaduto-md'
  }
  return (
    <main>
      <h1>Physician Biography</h1>
      <PhysicianBio params={params}/>
    </main>
  );
}
