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
  image: "w-full h-full object-cover rounded-xl",
  overlayGradient:
    "absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent z-0 rounded-xl hover:shadow-2xl pt-56",
};

const getClassNames = (index: number) => {
  switch (index % 7) {
    case 0:
      return styles.fullSpan;
    case 1:
      return styles.oneColumn;
    case 2:
      return styles.twoColumn;
    case 3:
      return styles.twoColumn;
    case 4:
      return styles.oneColumn;
    case 5:
      return styles.oneColumn;
    case 6:
      return styles.twoColumn;
    default:
      return "";
  }
};

const Gallery = ({ type, posts }: Props) => {
  return (
    <div className={styles.gridContainer}>
      {posts &&
        posts.map((post: any, index: number) => (
          <div
            key={post.slug}
            className={`${styles.postsItem} ${getClassNames(index)}`}
          >
            <Link
              href={`/${type}/${post.slug}`}
              className={styles.imageContainer}
            >
              <Image
                src={post.mainImage.fields.file.url}
                alt={post.title}
                width={500}
                height={300}
                className={styles.image}
              />
              <div className={styles.overlayGradient}></div>
              <div className={styles.imageOverlay}>{post.title}</div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Gallery;
