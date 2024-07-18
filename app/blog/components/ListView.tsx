"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPostType } from "@/app/constants/types";

interface Props {
  type: string;
  posts: BlogPostType[];
}

// styles

const overlayTitle = (type: string, post: any): string => {
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
    <div>
      {/* <div>hello world</div> */}
      {posts &&
        posts.map((post: any) => {
          return (
            <div key={post.slug}>
              <Link href={`/${post.eventName ? "events" : type}/${post.slug}`}>
                {post.mainImage && (
                  <>
                    <Image
                      src={post.mainImage.fields.file.url}
                      alt={post.slug}
                      width={500}
                      height={300}
                    />
                    {/* <Image
                      src={post.mainImage.fields.file.url}
                      alt={post.slug}
                      width={500}
                      height={300}
                    /> */}
                  </>
                )}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default ListView;
