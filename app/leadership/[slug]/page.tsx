import type { Metadata } from "next";
import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";
import { getLeadershipBioBySlug, getMembers } from "@/app/utils/contentful";

export async function generateStaticParams() {
  const members = await getMembers();
  return members.map((evt) => ({ slug: evt.slug }));
}
interface PagePropsType {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const member = await getLeadershipBioBySlug(params.slug);

  return {
    title: `${member.name} - LuskinOIC Leadership Team`,
    description: "",
  };
}

export default async function LeadershipMember({
  params,
}: {
  params: { slug: string };
}) {
  const member = await getLeadershipBioBySlug(params.slug);
  return (
    <div>
      {member.topSection && <TwoColumnLayout section={member.topSection} />}
    </div>
  );
}
