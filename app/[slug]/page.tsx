import { getPages, getPageBySlug } from "@/app/utils/contentful";
import Page from "@/app/components/Page";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const pages = await getPages();

  return pages
    .filter((page) => page.slug !== undefined)
    .map((page) => ({ slug: page.slug }));
}

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const pages = await getPages();
  const page = pages.find((page) => page.slug === params.slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.pageType,
  };
}

export default async function AppPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    redirect("/");
  }

  return <Page page={page} />;
}
