import Image from "next/image";
import { BlogPostType, PageSectionType } from "@/app/constants/types";
import { Title1 } from "@/app/components/ui/Typography/Title";
import PageSection from "@/app/components/PageSection/PageSection";
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";
import translations from "@/public/locales/en.json";
import { formatDate } from "@/app/utils/formatDate";

type PostComponentProps = {
  postData: BlogPostType;
};

const styles = {
  sectionWrapper: "px-5 md:px-32 md:mx-auto md:w-10/12 py-1.5 md:py-4",
  postDetailsContainer: "flex flex-col md:flex-row px-5 md:px-32",
  postDetailsWrapper: "flex flex-row md:flex-col py-1.5 md:py-2.5",
  postPublishedFont: "font-bold",
  postDetailsFont: "font-regular md:text-[20px] text-[#868787]",
  postTitle:
    "py-0 text-2xl md:text-[36px] md:leading-10 md:pt-6 md:pb-0 font-bold",
  postImage: "w-full -order-1 md:order-none",
  postPadding: "",
};

const PostComponent = ({ postData }: PostComponentProps) => {
  const { title, date, writtenBy, mainImage, pageSections } =
    postData?.fields ?? {};

  const { url, details, fileName } = mainImage.fields.file;
  const formattedDate = formatDate(date);

  const shouldDisplayMainImage =
    pageSections.length > 0 && pageSections[0].fields.type !== "Images Layout";
  return (
    <>
      <PageSectionContainer showTopMargin={true}>
        <Title1 className={styles.postTitle}>{title}</Title1>
      </PageSectionContainer>
      <PageSectionContainer>
        <div className={`${styles.postDetailsWrapper}`}>
          <div className={`${styles.postDetailsFont}`}>
            <span className={`${styles.postPublishedFont}`}>
              {translations.blog.publishedBy}
            </span>
            {` ${writtenBy}`}
            <span> &#x2022;</span>
            {` ${formattedDate}`}
          </div>
        </div>
      </PageSectionContainer>
      {shouldDisplayMainImage && (
        <PageSectionContainer showTopPadding={true} showBottomPadding={true}>
          <Image
            className={styles.postImage}
            src={url}
            alt={fileName}
            width={details.image.width}
            height={details.image.height}
          />
        </PageSectionContainer>
      )}

      {pageSections.map((section: PageSectionType, i: number) => (
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
