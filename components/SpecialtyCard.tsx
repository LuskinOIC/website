type Specialty = {
  name: string;
  description: string;
};

type SpecialtyCardProps = {
  specialty: Specialty;
};

export default function SpecialtyCard({ specialty } : SpecialtyCardProps) {
  return (
    <div className="py-10">
      <h3>{specialty.name}</h3>
      <p>{specialty.description}</p>
    </div>
  )
}
