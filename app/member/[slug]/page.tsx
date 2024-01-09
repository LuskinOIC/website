import { getMemberBySlug, getMembers } from "@/app/utils/contentful";
import ColumnsLayout from "@/app/components/PageSection/ColumnsLayout/ColumnsLayout";

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
  const topPageSection = {
    map: null,
    fields: {
      columnLayout: memberBio.topSection,
      type: "Column Layout",
      title: "",
      infoCards: [],
      quadCards: [],
      specialty: [],
      cardsLayout: [],
      imagesLayout: {
        fields: {
          type: "",
          images: [],
        },
      },
    },
  };

  return (
    <main className="">
      <div className="mx-auto w-10/12 md:w-4/5">
        <ColumnsLayout section={topPageSection} />
      </div>
    </main>
  );
}
