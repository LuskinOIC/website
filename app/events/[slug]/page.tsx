import type { Metadata } from "next";
import { getEvents, getEventBySlug } from "@/app/utils/contentful";
import { BlogCardsRowType, PageSectionType } from "@/app/constants/types";
// Import components
import PageSection from "@/app/components/PageSection/PageSection";
import BlogCardsRow from "@/app/components/BlogCardsRow";
import { notFound } from "next/navigation";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((evt) => ({ slug: evt.slug }));
}

interface PagePropsType {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const orgEvent = await getEventBySlug(params.slug);

  if (!orgEvent) {
    return {};
  }

  return {
    title: `${orgEvent.eventName} - LuskinOIC`,
    description: "",
  };
}

export const dynamicParams = false;

// EVENT
export default async function Event({ params }: { params: { slug: string } }) {
  const orgEvent = await getEventBySlug(params.slug);
  const allEvents = (await getEvents(4)) as unknown as BlogCardsRowType[];

  if (!orgEvent) {
    notFound();
  }

  const pageSections = orgEvent.pageSections || [];

  return (
    <div>
      {pageSections.map((section: PageSectionType) => (
        <PageSection key={section.fields.title} section={section} />
      ))}
      <PageSectionContainer>
        <BlogCardsRow type="events" cards={allEvents} />
      </PageSectionContainer>
    </div>
  );
}
