import Image from "next/image";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import { BlogPostType, PageSectionType } from "@/app/constants/types";
import { Title1 } from "@/app/components/ui/Typography/Title";
import SocialMediaSection from "@/app/components/SocialMediaSection";
import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
import translations from "@/public/locales/en.json";

type PostComponentProps = {
  postData: BlogPostType;
};

const styles = {
  sectionWrapper: "px-5 md:px-32 md:mx-auto md:w-10/12 py-1.5 md:py-4",
  postDetailsContainer: "flex flex-col md:flex-row md:gap-12 px-5 md:px-32",
  postDetailsWrapper: "flex flex-row md:flex-col gap-2 py-1.5 md:py-4 ",
  postDetailsFont: "font-bold",
  socialMediaWrapper: "flex flex-col md:flex-row gap-2 py-1.5 md:py-4",
  postTitle:
    "text-2xl md:text-[40px] py-2 md:py-6 font-normal md:leading-relaxed",
  postSubTitle:
    "text-xl md:text-2xl font-arial leading-[36px] md:leading-[40px] py-2",
  postImage: "w-full -order-1 md:order-none",
  postPadding: "",
  dividerStyle: "block md:hidden h-[4px] bg-[#99C221] mx-4 mt-3",
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
      <PageSectionContainer showBottomMargin={true}>
        <Title1 className={styles.postTitle}>{title}</Title1>
        <div className={styles.postSubTitle}>{newsSubTitle}</div>
      </PageSectionContainer>
      <Image
        className={styles.postImage}
        src={url}
        alt={fileName}
        width={details.image.width}
        height={details.image.height}
      />
      <PageSectionContainer>
        <div className="grid grid-cols-3">
          <div className={`${styles.postDetailsWrapper}`}>
            <div className={`${styles.postDetailsFont}`}>
              {translations.blog.publishedOn}
            </div>
            <div>{formattedDate}</div>
          </div>
          <div className={`${styles.postDetailsWrapper}`}>
            <div className={`${styles.postDetailsFont}`}>
              {translations.blog.writtenBy}
            </div>
            <div>{writtenBy}</div>
          </div>
          {followOurStory && (
            <div className={`${styles.socialMediaWrapper}`}>
              <div className="font-bold">
                {translations.blog.followOurStory}
              </div>
              {followOurStory && (
                <SocialMediaSection section={followOurStory} />
              )}
            </div>
          )}
        </div>
      </PageSectionContainer>

      <hr className={styles.dividerStyle} />

      {pageSections.map((section: PageSectionType, i: string) => (
        <div
          key={i}
          className={`${
            section.fields.columnLayout &&
            section.fields.columnLayout.fields.columnType === "Full Column"
              ? `${styles.postPadding}`
              : ""
          }`}
        >
          <PageSection key={section.fields.title} section={section} />
        </div>
      ))}
    </>
  );
};

export default PostComponent;
