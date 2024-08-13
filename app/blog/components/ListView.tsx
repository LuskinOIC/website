"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPostType } from "@/app/constants/types";
import ozzieInCircle from "@/public/ozzie-in-circle.svg";
import { TitleComponent } from "@/app/components/ui/Typography/Title";
import { styles } from "@/app/components/ui/Button";
import translations from "@/public/locales/en.json";
import { cn } from "@/lib/utils";
import fb from "@/public/fb.svg";
import linkedinBlack from "@/public/linkedinBlack.svg";
import youtubeBlack from "@/public/youtubeBlack.svg";
import igBlack from "@/public/igBlack.svg";
import yelpBlack from "@/public/yelpBlack.svg";
import xlogo from "@/public/xlogoBlack.svg";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "@/app/constants/links";
import BlogCard from "@/app/components/PageSection/CardsLayout/BlogCard";

interface Props {
  type: string;
  posts: BlogPostType[] | undefined;
}

const socialMediaLinks = [
  { url: FACEBOOK_URL, src: fb, alt: "facebook" },
  { url: LINKEDIN_URL, src: linkedinBlack, alt: "linkedin" },
  { url: TWITTER_URL, src: xlogo, alt: "twitter" },
  { url: YOUTUBE_URL, src: youtubeBlack, alt: "youtube" },
  { url: INSTAGRAM_URL, src: igBlack, alt: "instagram" },
  {
    url: "https://www.yelp.com/biz/luskin-orthopaedic-institute-for-children-los-angeles",
    src: yelpBlack,
    alt: "yelp",
  },
];

const ListView = ({ type, posts }: Props) => {
  const desktopButtonClass = cn(
    styles.buttonAlignment,
    styles.buttonContainer,
    styles.buttonText,
    "md:mx-10 md:w-72 bg-luskin-blue my-4 md:my-6 md:px-8",
  );

  // use conditional to check if there IS an article that is featured,
  // if it IS featured, it should display in 2nd div
  const overlayTitle = (type: string, post: any): string => {
    switch (type) {
      case "news":
        return post.featuredTitle ? post.featuredTitle : post.eventName;
      case "insights":
        return post.title;
      case "events":
        return post.eventName;
      case "patient-stories":
        return post.name;
      default:
        return "";
    }
  };

  return (
    <div className="flex gap-6">
      <div className="mt-6">
        {posts &&
          posts.map((post: any) => {
            return (
              <div
                key={post.slug}
                className="mt-4 flex flex-row-reverse justify-between border-b border-[#BBBBBB] pb-4"
              >
                <BlogCard
                  type={type}
                  cardContent={{
                    title: post.blogCard.fields.title,
                    cardPhoto: post.blogCard.fields.image,
                    summary: post.blogCard.fields.subTitle || "",
                    writtenBy: post.writtenBy || "",
                    date: post.date,
                  }}
                />
              </div>
            );
          })}
      </div>
      <div className="flex flex-col border-l border-[#BBBBBB]">
        <div className="mt-6 flex w-96 flex-col pl-4">
          <div className="flex justify-evenly">
            <Image
              src={ozzieInCircle}
              alt="ozzie in circle"
              width={60}
              height={100}
            />
            <TitleComponent
              title="STAY CONNECTED"
              titleSize="Small"
              luskinHeader={true}
            />
          </div>

          <a
            aria-label="Subscribe Button"
            id="mc-embedded-subscribe"
            className={desktopButtonClass}
            href="https://share.hsforms.com/1t977b2uBRnauBgzAZqGPfgqwu5b"
            target="_blank"
          >
            <span className="block">
              {translations.newsletter.joinOurNewsletter}
            </span>
          </a>
        </div>
        <>
          {/* prevent more than 1 featured article */}
          {posts &&
            posts.map((post: any) => {
              if (post.featuredArticle)
                return (
                  <div className="flex justify-center pb-3 pl-4">
                    {post.mainImage && (
                      <>
                        <Link
                          href={`/${post.eventName ? "events" : type}/${
                            post.slug
                          }`}
                          className="relative h-full overflow-hidden"
                        >
                          <Image
                            src={post.featuredImage.fields.file.url}
                            alt="featured article"
                            width={300}
                            height={300}
                          />

                          <div className="absolute bottom-0 right-0 w-40 pr-2 text-right text-3xl font-semibold text-[#FCE385]">
                            {overlayTitle(type, post)}
                          </div>
                        </Link>
                      </>
                    )}
                  </div>
                );
            })}
        </>
        <div className="flex flex-col pl-4">
          <div id="social-media">
            <ul className="flex justify-center pl-4 pt-3">
              {socialMediaLinks.map(({ url, src, alt }) => (
                <li key={alt} className="pr-3">
                  <a href={url} target="_blank">
                    <Image src={src} alt={alt} className="" width={44} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
