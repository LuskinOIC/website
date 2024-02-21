import { getMemberBySlug, getMembers } from "@/app/utils/contentful";
import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";

export async function generateStaticParams() {
  const members = await getMembers();

  return members.map((m) => ({
    slug: m.slug,
  }));
}

export default async function MemberBio({
  params,
}: {
  params: { slug: string };
}) {
  const memberBio = await getMemberBySlug(params.slug);

  return (
    <main className="">
      <TwoColumnLayout columnLayout={memberBio.topSection} />
    </main>
  );
}
