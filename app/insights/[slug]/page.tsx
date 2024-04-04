import type { Metadata } from "next";
import Image from "next/image";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import renderRichTextToReactComponent from "@/app/utils/rich-text";

import { getBlogPosts, getBlogPostBySlug } from "@/app/utils/contentful";
import PageSection from "@/app/components/PageSection/PageSection";
import { BlogCardsRowType, PageSectionType } from "@/app/constants/types";
import SocialMediaSection from "@/app/components/SocialMediaSection";
import BlogCardsRow from "@/app/components/BlogCardsRow";
import { Title1 } from "@/app/components/ui/Typography/Title";
import { SEO_DEFAULTS } from "@/app/constants/seo";

const styles = {
  sectionWrapper: "mx-auto w-4/5 py-1.5",
  postDetailsContainer: "flex flex-col md:flex-row md:gap-x-10 ",
  postDetailsWrapper: "flex flex-row md:flex-col gap-2 py-1.5 md:py-4",
  postDetailsFont: "font-normal md:font-bold",
  socialMediaWrapper: "flex flex-col md:flex-row gap-2 py-1.5 md:py-4",
};

interface PagePropsType {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PagePropsType): Promise<Metadata> {
  const blogPost = await getBlogPostBySlug(params.slug);

  return {
    title: `${blogPost.fields.title || SEO_DEFAULTS.TITLE} - LuskinOIC`,
    description: documentToPlainTextString(blogPost.fields.subTitle),
  };
}

export async function generateStaticParams() {
  const blogPost = await getBlogPosts();

  return blogPost.map((post) => ({ slug: post.slug }));
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost = await getBlogPostBySlug(params.slug);
  const insights = (await getBlogPosts(4)) as unknown as BlogCardsRowType[];

  const {
    title,
    subTitle,
    date,
    writtenBy,
    followOurStory,
    mainImage,
    pageSections,
  } = blogPost.fields;
  const { url, details, fileName } = mainImage.fields.file;
  const dateDate = new Date(date);
  const formattedDate =
    dateDate.getMonth() +
    1 +
    "/" +
    dateDate.getDate() +
    "/" +
    dateDate.getFullYear();

  return (
    <div className="flex flex-col">
      <section className={`${styles.sectionWrapper} py-1.5 md:py-4`}>
        <Title1 className="text-2xl md:text-[40px] py-2 md:py-6 font-normal md:leading-10">
          {title}
        </Title1>
        {renderRichTextToReactComponent(subTitle)}
      </section>
      <Image
        className="w-full -order-1 md:order-none"
        src={url}
        alt={fileName}
        width={details.image.width}
        height={details.image.height}
      />

      <section
        className={`${styles.postDetailsContainer}, ${styles.sectionWrapper}`}
      >
        <div className={`${styles.postDetailsWrapper}`}>
          <div className={`${styles.postDetailsFont}`}>Published On:</div>
          <div>{formattedDate}</div>
        </div>
        <div className={`${styles.postDetailsWrapper}`}>
          <div className={`${styles.postDetailsFont}`}>Written By:</div>
          <div>{writtenBy}</div>
        </div>
        {followOurStory && (
          <div className={`${styles.socialMediaWrapper}`}>
            <div className="font-bold">Follow Our Story</div>
            {followOurStory && <SocialMediaSection section={followOurStory} />}
          </div>
        )}
      </section>
      <section className="grid">
        {pageSections.map((section: PageSectionType) => (
          <PageSection key={section.fields.title} section={section} />
        ))}
      </section>
      <BlogCardsRow type="insights" cards={insights} />
    </div>
  );
}
