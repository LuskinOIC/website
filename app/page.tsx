import SocialMediaSection from '@/components/SocialMediaSection';
import SpecialtyCard from '@/components/SpecialtyCard';
import PageSection from '@/components/PageSection';
import {
  getPage,
  getSocialMediaSection,
  getSpecialty,
} from '@/utils/contentful';
import {
  LandingPageType,
  SocialMediaSectionType,
  SpecialtyType,
  PageSectionType,
} from '@/constants/types';

// This is the root page to the website.
export default async function Home() {
  const page = await getPage() as LandingPageType;

  console.log(JSON.stringify(page, null, 2));

  return (
    <main>
      {page.sections.map((section: PageSectionType) => (
        <PageSection key={section.fields.title} section={section} />
      ))}
    </main>
  );
}
