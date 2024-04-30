import type { Metadata } from "next";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import {
  getInsightsPosts,
  getInsightsPostBySlug,
} from "@/app/utils/contentful";
import { BlogCardsRowType } from "@/app/constants/types";
import BlogCardsRow from "@/app/components/BlogCardsRow";
import { SEO_DEFAULTS } from "@/app/constants/seo";
import PostComponent from "@/app/blog/components/PostComponent";
import { redirect } from "next/navigation";

interface PagePropsType {
  params: { slug: string };
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const blogPost = await getInsightsPostBySlug(params.slug);

  return {
    title: `${blogPost.fields.title || SEO_DEFAULTS.TITLE} - LuskinOIC`,
    description: documentToPlainTextString(blogPost.fields.subTitle),
  };
}

export async function generateStaticParams() {
  const blogPost = await getInsightsPosts();

  return blogPost.map((post) => ({ slug: post.slug }));
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost = await getInsightsPostBySlug(params.slug);
  const insights = (await getInsightsPosts(4)) as unknown as BlogCardsRowType[];

  if (!blogPost) {
    redirect("/insights");
  }

  return (
    <div className="flex flex-col">
      <PostComponent postData={blogPost} />
      <BlogCardsRow type="insights" cards={insights} />
    </div>
  );
}
