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
      <div className="mx-auto w-10/12 md:w-4/5">
        <TwoColumnLayout section={memberBio.topSection} />
      </div>
    </main>
  );
}
