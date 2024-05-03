import type { Metadata } from "next";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import { getNewsPosts, getNewsPostBySlug } from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
import BlogCardsRow from "@/app/components/BlogCardsRow";
import { SEO_DEFAULTS } from "@/app/constants/seo";
import PostComponent from "@/app/blog/components/PostComponent";
// import { notFound } from "next/navigation";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";

interface PagePropsType {
  params: { slug: string };
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const newsPost = await getNewsPostBySlug(params.slug);

  if (newsPost === undefined) {
    return {};
  }

  return {
    title: `${newsPost.fields.title || SEO_DEFAULTS.TITLE} - LuskinOIC`,
    description: documentToPlainTextString(newsPost.fields.subTitle),
  };
}

export async function generateStaticParams() {
  let newsPosts = await getNewsPosts();

  newsPosts = newsPosts.filter((newsPost) => newsPost.slug);

  return newsPosts.map((post) => ({ slug: post.slug }));
}

export default async function NewsArticle({
  params,
}: {
  params: { slug: string };
}) {
  const newsPost = await getNewsPostBySlug(params.slug);
  const news = (await getNewsPosts(4)) as unknown as BlogCardsRowType[];

  return (
    <div className="flex flex-col">
      <PostComponent postData={newsPost} />
      <PageSectionContainer>
        <BlogCardsRow type="news" cards={news} />
      </PageSectionContainer>
    </div>
  );
}
