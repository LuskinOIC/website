import { SocialMediaSectionPropsType } from "@/app/constants/types";

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
