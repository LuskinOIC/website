import Image from "next/image";
import { getNewsPosts, getNewsPostBySlug } from "@/app/utils/contentful";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import PageSection from "@/app/components/PageSection/PageSection";
import { BlogCardsRowType, PageSectionType } from "@/app/constants/types";
import SocialMediaSection from "@/app/components/SocialMediaSection";
import BlogCardsRow from "@/app/components/BlogCardsRow";

export async function generateStaticParams() {
  const newsPosts = await getNewsPosts();

  return newsPosts.map((post) => ({ slug: post.slug }));
}

const styles = {
  sectionWrapper: "mx-auto w-4/5 py-1.5",
  postDetailsContainer: "flex flex-col md:flex-row md:gap-x-10 ",
  postDetailsWrapper: "flex flex-row md:flex-col gap-2 py-1.5 md:py-4",
  postDetailsFont: "font-normal md:font-bold",
  socialMediaWrapper: "flex flex-col md:flex-row gap-2 py-1.5 md:py-4",
};

export default async function NewsArticle({
  params,
}: {
  params: { slug: string };
}) {
  const newsPost = await getNewsPostBySlug(params.slug);
  const news = (await getNewsPosts(4)) as unknown as BlogCardsRowType[];

  const {
    title,
    subTitle,
    date,
    writtenBy,
    followOurStory,
    mainImage,
    pageSections,
  } = newsPost.fields;
  const { url, details, fileName } = mainImage.fields.file;
  const newsSubTitle = renderRichTextToReactComponent(subTitle);
  const dateDate = new Date(date);
  const formattedDate =
    dateDate.getMonth() +
    1 +
    "/" +
    dateDate.getDate() +
    "/" +
    dateDate.getFullYear();

  return (
    <main className="flex flex-col">
      <section className={`${styles.sectionWrapper} py-1.5 md:py-4`}>
        <h1 className="text-2xl md:text-[40px] py-2 md:py-6">{title}</h1>
        {newsSubTitle}
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
      <section className="block mx-5 md:mx-[5%]">
        <BlogCardsRow type="news" cards={news} />
      </section>
    </main>
  );
}
