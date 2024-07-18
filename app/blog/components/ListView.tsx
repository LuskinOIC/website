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
      <div></div>
    </div>
  );
};

export default ListView;
