import { getPages, getPageBySlug } from "@/app/utils/contentful";
import Page from "@/app/components/Page";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const pages = await getPages();

  return pages
    .filter((page) => page.slug !== undefined)
    .map((page) => ({ slug: page.slug }));
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
