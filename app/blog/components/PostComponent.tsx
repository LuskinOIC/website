import Image from "next/image";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { BlogPostType, PageSectionType } from "@/app/constants/types";
import { Title1 } from "@/app/components/ui/Typography/Title";
import SocialMediaSection from "@/app/components/SocialMediaSection";
import PageSection from "@/app/components/PageSection/PageSection";

type PostComponentProps = {
  postData: BlogPostType;
};

const styles = {
  sectionWrapper: "mx-auto w-4/5 py-1.5",
  postDetailsContainer: "flex flex-col md:flex-row md:gap-x-10 ",
  postDetailsWrapper: "flex flex-row md:flex-col gap-2 py-1.5 md:py-4",
  postDetailsFont: "font-normal md:font-bold",
  socialMediaWrapper: "flex flex-col md:flex-row gap-2 py-1.5 md:py-4",
};

const PostComponent = ({ postData }: PostComponentProps) => {
  const {
    title,
    subTitle,
    date,
    writtenBy,
    followOurStory,
    mainImage,
    pageSections,
  } = postData.fields;

  const { url, details, fileName } = mainImage.fields.file;
  const newsSubTitle = renderRichTextToReactComponent(subTitle);
  const dateDate = new Date(date);
  const formattedDate = `${
    dateDate.getMonth() + 1
  }/${dateDate.getDate()}/${dateDate.getFullYear()}`;

  return (
    <>
      <section className={`${styles.sectionWrapper} py-1.5 md:py-4`}>
        <Title1 className="text-2xl md:text-[40px] py-2 md:py-6 font-normal md:leading-10">
          {title}
        </Title1>
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
    </>
  );
};

export default PostComponent;
