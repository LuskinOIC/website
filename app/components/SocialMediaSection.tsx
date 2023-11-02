type SocialMediaSectionType = {
  title: string;
  subtitle: string;
};

type SocialMediaSectionPropsType = {
  section: SocialMediaSectionType;
};

export default function SocialMediaSection({
  section,
}: SocialMediaSectionPropsType) {
  return (
    <div>
      <h3>{section.title}</h3>
      <p>{section.subtitle}</p>
      <div></div>
    </div>
  );
}
