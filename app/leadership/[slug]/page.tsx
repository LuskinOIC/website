import TwoColumnLayout from "@/app/components/PageSection/TwoColumnLayout";
import { getLeadershipBioBySlug, getMembers } from "@/app/utils/contentful";

export async function generateStaticParams() {
  const members = await getMembers();
  return members.map((evt) => ({ slug: evt.slug }));
}

export default async function LeadershipMember({ params }: { params: { slug: string } }) {
  const member = await getLeadershipBioBySlug(params.slug);

  console.log(member.socialMedia)

  return (
    <main>
      <TwoColumnLayout section={member.topSection}/>
    </main>
  );
}
