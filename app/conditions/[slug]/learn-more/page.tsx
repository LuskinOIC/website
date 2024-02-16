import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionType } from "@/app/constants/types";
import { getConditionBySlug, getConditionTerms } from "@/app/utils/contentful";

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
  const detailedCondition = await getConditionBySlug(params.slug);
  return (
    <main>
      {detailedCondition.fields.learnMore ? (
        <div>
          {detailedCondition.fields.learnMore.map(
            (pageSection: PageSectionType) => (
              <PageSection
                key={pageSection.fields.title}
                section={pageSection}
              />
            ),
          )}
        </div>
      ) : (
        <div>You can learn MORE {detailedCondition.fields.term}</div>
      )}
    </main>
  );
}
