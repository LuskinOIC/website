"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPostType } from "@/app/constants/types";
import ozzieInCircle from "@/public/ozzie-in-Circle.svg";
import { TitleComponent } from "@/app/components/ui/Typography/Title";
import { styles } from "@/app/components/ui/Button";
import translations from "@/public/locales/en.json";
import { cn } from "@/lib/utils";
import renderRichTextToReactComponent from "@/app/utils/rich-text";
import fb from "@/public/fb.svg";
import linkedinBlack from "@/public/linkedinBlack.svg";
import youtubeBlack from "@/public/youtubeBlack.svg";
import igBlack from "@/public/igBlack.svg";
import yelpBlack from "@/public/yelpBlack.svg";
import xlogo from "@/public/XLogo.svg";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "@/app/constants/links";

interface Props {
  type: string;
  posts: BlogPostType[];
}

// styles

const blogTitle = (type: string, post: any): string => {
  switch (type) {
    case "news":
      return post.title ? post.title : post.eventName;
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

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
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
    "md:mx-10 md:w-72 bg-luskin-blue my-4 md:my-6 md:px-8"
  );

  return (
    <div className="flex gap-6">
      <div className="mt-6">
        {posts &&
          posts.map((post: any) => {
            return (
              <div
                key={post.slug}
                className="mt-4 flex flex-row-reverse justify-between">
                <Link
                  href={`/${post.eventName ? "events" : type}/${post.slug}`}>
                  {post.mainImage && (
                    <>
                      <Image
                        src={post.mainImage.fields.file.url}
                        alt={post.slug}
                        width={150}
                        height={50}
                      />
                    </>
                  )}
                </Link>
                <div className="w-3/4">
                  <div className="font-semibold text-luskin-blue">
                    <Link
                      href={`/${post.eventName ? "events" : type}/${
                        post.slug
                      }`}>
                      {blogTitle(type, post)}
                    </Link>
                  </div>
                  <div className="pb-3 text-sm">
                    {renderRichTextToReactComponent(post.subTitle)}
                  </div>
                  <div className="flex text-xs text-[#868787]">
                    <p className="pr-3">
                      {post.writtenBy ? post.writtenBy : ""}
                    </p>
                    <p>{post.date ? formatDate(post.date) : ""}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="mt-4 flex flex-col border-l border-[#BBBBBB]">
        <div className="flex w-96 flex-col pl-4">
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
            target="_blank">
            <span className="block">
              {translations.newsletter.joinOurNewsletter}
            </span>
          </a>
        </div>
        <div className="flex flex-col pl-4">
          insert featured article
          <div id="social-media">
            <ul className="flex pt-3">
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
