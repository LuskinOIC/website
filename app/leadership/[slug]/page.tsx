import type { Metadata } from "next";
import { getMemberBySlug, getMembers } from "@/app/utils/contentful";
import TwoColumnLayout from "@/app/components/PageSection/ColumnsLayout/TwoColumnLayout";
import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType } from "@/app/constants/types";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";

export const dynamicParams = false;

export async function generateStaticParams() {
  const members = await getMembers("leadership");
  return members.map((m) => ({
    slug: m.slug,
  }));
}

interface PagePropsType {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const memberBio = await getMemberBySlug(params.slug);

  return {
    title: `LuskinOIC Researcher - ${memberBio.name}`,
    description: "",
  };
}

export default async function MemberBio({
  params,
}: {
  params: { slug: string };
}) {
  const memberBio = await getMemberBySlug(params.slug);

  return (
    <div className="">
      {memberBio.topSection && (
        <PageSectionContainer showBottomPadding={true} showTopPadding={true}>
          <TwoColumnLayout
            section={memberBio.topSection}
            imageClass="mx-auto w-3/4"
          />
        </PageSectionContainer>
      )}
      {memberBio.pageSections &&
        memberBio.pageSections.map((pageSection: PageSectionType) => (
          <PageSection key={pageSection.fields.title} section={pageSection} />
        ))}
    </div>
  );
}
