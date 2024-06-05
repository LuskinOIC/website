"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPostType } from "@/app/constants/types";

interface Props {
  news: BlogPostType[];
}

const styles = {
  gridContainer: "grid grid-cols-3 gap-4",
  newsItem: "relative w-full h-[300px] rounded-xl",
  fullSpan: "col-span-3",
  oneColumn: "col-span-1",
  twoColumn: "col-span-2",
  imageOverlay: "absolute bottom-0 left-0 text-white text-2xl p-2 rounded",
  image:
    "w-full h-full object-cover rounded-xl opacity-[.89] hover:opacity-100 transform transition-transform duration-300 ease-in-out hover:scale-105",
};

const getImageSrc = (post: any, index: number) => {
  return index % 2 === 0
    ? post.mainImage.fields.file.url
    : post.blogCard.fields.image.fields.file.url;
};

const getClassNames = (index: number) => {
  switch (index % 5) {
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
    default:
      return "";
  }
};

const NewsGallery: React.FC<Props> = ({ news }) => {
  return (
    <div className={styles.gridContainer}>
      {news.map((post: any, index) => (
        <div
          key={post.slug}
          className={`${styles.newsItem} ${getClassNames(index)}`}
        >
          <Link href={`/news/${post.slug}`}>
            <Image
              src={getImageSrc(post, index)}
              alt={post.title}
              width={500}
              height={300}
              className={styles.image}
            />
            <div className={styles.imageOverlay}>{post.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsGallery;
