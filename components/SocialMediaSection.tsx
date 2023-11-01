type SocialMediaSection = {
  title: string;
  subtitle: string;
};

type SocialMediaSectionProps = {
  section: SocialMediaSection;
};

export default function SocialMediaSection({ section } : SocialMediaSectionProps) {
  return (
    <div>
      <h3>{section.title}</h3>
      <p>{section.subtitle}</p>
      <div>
      </div>
    </div>
  )
}
