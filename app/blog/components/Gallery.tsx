"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPostType } from "@/app/constants/types";

interface Props {
  type: string;
  posts: BlogPostType[];
}

const styles = {
  gridContainer: "grid lg:grid-cols-3 gap-4 pt-6 lg:pt-10",
  postsItem: "relative w-full h-[300px] rounded-xl",
  fullSpan: "lg:col-span-3",
  oneColumn: "lg:col-span-1",
  twoColumn: "lg:col-span-2",
  imageOverlay: "absolute bottom-0 left-0 text-white text-2xl p-2 rounded",
  imageContainer: "w-full h-full overflow-hidden rounded-xl",
  imageDesktop: "hidden lg:block w-full h-full object-cover rounded-xl",
  imageMobileTablet: "block lg:hidden w-full h-full object-cover rounded-xl",
  overlayGradient:
    "absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent z-0 rounded-xl hover:shadow-2xl pt-56",
};

const pattern = [
  styles.twoColumn,
  styles.oneColumn,
  styles.oneColumn,
  styles.twoColumn,
  styles.twoColumn,
  styles.oneColumn,
  styles.fullSpan,
];

// const getClassNames = (index: number, isFirst: Boolean) => {

//   if (isFirst && pattern[index % pattern.length] != styles.fullSpan ) {
//     return styles.fullSpan
//   }

//   return pattern[index % pattern.length];
// };

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

const getImageSource = (post: any, className: string) => {
  if (className === styles.oneColumn && post.blogCard?.fields.image) {
    return post.blogCard.fields.image.fields.file.url;
  } else if (post.mainImage) {
    return post.mainImage.fields.file.url;
  }
  return "";
};

function skewedImageStyle(style: string, postsLength: number) {
  if ((postsLength % 7) % 2 != 0) {
    return styles.fullSpan;
  }
  return style;
}

const getPatternForIndex = (index: number) => {
  const patternLength = pattern.length;
  return pattern[index % patternLength];
};

const Gallery = ({ type, posts }: Props) => {
  const reversedPictures = [...posts].reverse();

  const postsLength = posts.length;
  const styledPictures = reversedPictures.map((picture, index) => ({
    ...picture,
    style: getPatternForIndex(index),
  }));

  const finalStyledPictures = styledPictures.reverse();

  return (
    <div className={styles.gridContainer}>
      {posts &&
        finalStyledPictures.map((post: any, index: number) => {
          return (
            <div
              key={post.slug}
              className={`${styles.postsItem} ${
                index === 0
                  ? skewedImageStyle(post.style, postsLength)
                  : post.style
              }`}
            >
              <Link
                href={`/${post.eventName ? "events" : type}/${post.slug}`}
                className={styles.imageContainer}
              >
                {post.mainImage && (
                  <>
                    <Image
                      className={styles.imageDesktop}
                      src={getImageSource(post, post.style)}
                      alt={post.slug}
                      width={500}
                      height={300}
                    />
                    <Image
                      className={styles.imageMobileTablet}
                      src={post.mainImage.fields.file.url}
                      alt={post.slug}
                      width={500}
                      height={300}
                    />
                  </>
                )}

                <div className={styles.overlayGradient}></div>
                <div className={styles.imageOverlay}>
                  {overlayTitle(type, post)}
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
