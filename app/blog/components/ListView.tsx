"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPostType } from "@/app/constants/types";
import ozzieInCircle from "@/public/ozzie-in-Circle.svg";
import { TitleComponent } from "@/app/components/ui/Typography/Title";

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
        <div className="flex flex-col border-2 border-red-600">
          <div className="flex w-96 justify-evenly">
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
          <div>Join our newsletter</div>
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
