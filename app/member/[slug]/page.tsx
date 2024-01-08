import Image from "next/image";
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

  // const memberName = memberBio.name;
  // const memberPortrait = memberBio.portrait.fields.file.url;
  // const portraitWidth = memberBio.portrait.fields.file.details.image.width;
  // const portraitHeight = memberBio.portrait.fields.file.details.image.height;
  const topSection = memberBio.topSection;

  return (
    <main className="">
      <div className="mx-auto w-10/12 md:w-4/5">
        {/* <div className="gap-2 pt-12 md:grid md:grid-cols-3">
          <div className="mb-3 h-72 md:mr-4 md:h-96">
            <Image
              src={memberPortrait}
              alt={memberName}
              width={portraitWidth}
              height={portraitHeight}
              style={{ objectPosition: "center 20%" }}
              className="h-full object-none sm:w-auto"
            />
          </div>

          <div className="">
            <h1 className="mb-4 text-2xl font-semibold md:pb-1 md:text-3xl md:font-medium">
              {memberName}
            </h1>
          </div>
        </div> */}

        <ColumnsLayout
          section={{
            map: null,
            fields: {
              columnLayout: topSection,
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
          }}
        />
      </div>
    </main>
  );
}
