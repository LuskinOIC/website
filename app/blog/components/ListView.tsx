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

const ListView = ({ type, posts }: Props) => {
  const desktopButtonClass = cn(
    styles.buttonAlignment,
    styles.buttonContainer,
    styles.buttonText,
    "md:mx-10 md:w-72 bg-luskin-blue my-4 md:my-6 md:px-8"
  );

  return (
    <div className="flex">
      <div>
        {posts &&
          posts.map((post: any) => {
            return (
              <div key={post.slug} className="flex flex-row-reverse">
                <Link
                  href={`/${post.eventName ? "events" : type}/${post.slug}`}>
                  {post.mainImage && (
                    <>
                      <Image
                        src={post.mainImage.fields.file.url}
                        alt={post.slug}
                        width={500}
                        height={300}
                      />
                    </>
                  )}
                </Link>
                {blogTitle(type, post)}
              </div>
            );
          })}
      </div>
      <div className="flex flex-col border-4 border-green-500">
        <div className="flex w-96 flex-col border-2 border-red-600">
          <div className="flex justify-evenly">
            <Image
              src={ozzieInCircle}
              alt="ozzie in circle"
              width={60}
              height={60}
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
        <div className="flex flex-col border-2 border-yellow-400">
          insert featured article
          <div>social media links</div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
