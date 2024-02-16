import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType } from "@/app/constants/types";
import { getConditionBySlug, getConditionTerms } from "@/app/utils/contentful";
import ConditionDetails from "@/app/conditions/ConditionDetails";
import RelatedSpecialtiesComponent from "@/app/conditions/RelatedSpecialties";

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
    <main>
      {condition.fields.learnMore ? (
        <div>
          {condition.fields.learnMore.map((pageSection: PageSectionType) => (
            <PageSection key={pageSection.fields.title} section={pageSection} />
          ))}
        </div>
      ) : (
        <div className="grid grid-col gap-5">
          <ConditionDetails condition={condition.fields} />
          {condition.fields.relatedSpecialties && (
            <RelatedSpecialtiesComponent
              relatedSpecialties={condition.fields.relatedSpecialties}
            />
          )}
        </div>
      )}
    </main>
  );
}
