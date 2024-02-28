import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType } from "@/app/constants/types";
import { getConditionBySlug, getConditionTerms } from "@/app/utils/contentful";
import RelatedSpecialtiesComponent from "@/app/conditions/RelatedSpecialties";
import { Title3 } from "@/app/components/ui/Typography/Title";

export async function generateStaticParams() {
  const conditions = await getConditionTerms();

  return conditions.map((c) => ({
    slug: c.slug,
  }));
}

export default async function LearnMorePage({
  params,
}: {
  params: { slug: string };
}) {
  const condition = await getConditionBySlug(params.slug);

  return (
    <section>
      {condition.fields.learnMore ? (
        <div>
          {condition.fields.learnMore.map((pageSection: PageSectionType) => (
            <PageSection key={pageSection.fields.title} section={pageSection} />
          ))}
        </div>
      ) : (
        <div className="grid grid-col gap-5 p-5">
          <Title3 className="text-[#0076AD]">{condition.fields.term}</Title3>
          <p>{condition.fields.definition}</p>
          {condition.fields.relatedSpecialties && (
            <RelatedSpecialtiesComponent
              relatedSpecialties={condition.fields.relatedSpecialties}
            />
          )}
        </div>
      )}
    </section>
  );
}
