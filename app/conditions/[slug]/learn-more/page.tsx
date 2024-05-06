import type { Metadata } from "next";
import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType } from "@/app/constants/types";
import { getConditionBySlug, getConditionTerms } from "@/app/utils/contentful";
import RelatedSpecialtiesComponent from "@/app/conditions/RelatedSpecialties";
import { Title3 } from "@/app/components/ui/Typography/Title";
import { SEO_DEFAULTS } from "@/app/constants/seo";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";

export async function generateStaticParams() {
  const conditions = await getConditionTerms();

  return conditions.map((c) => ({
    slug: c.slug,
  }));
}

interface PagePropsType {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const condition = await getConditionBySlug(params.slug);

  return {
    title: `${
      condition.fields.term || SEO_DEFAULTS.TITLE
    } - Orthopaedic Institute for Children`,
    description: condition.fields.definition || SEO_DEFAULTS.DESCRIPTION,
  };
}

export default async function LearnMorePage({
  params,
}: {
  params: { slug: string };
}) {
  const condition = await getConditionBySlug(params.slug);

  return (
    <>
      {condition.fields.learnMore ? (
        <div className="mt-10">
          {condition.fields.learnMore.map((pageSection: PageSectionType) => (
            <PageSection key={pageSection.fields.title} section={pageSection} />
          ))}
        </div>
      ) : (
        <PageSectionContainer>
          <div className="grid grid-col gap-5 p-5">
            <Title3 className="text-[#0076AD]">{condition.fields.term}</Title3>
            <p>{condition.fields.definition}</p>
            {condition.fields.relatedSpecialties && (
              <RelatedSpecialtiesComponent
                relatedSpecialties={condition.fields.relatedSpecialties}
              />
            )}
          </div>
        </PageSectionContainer>
      )}
    </>
  );
}
