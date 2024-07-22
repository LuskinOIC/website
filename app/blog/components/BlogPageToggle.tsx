"use client";

import React, { useState } from "react";
import BlogSelector from "./BlogSelector";
import Gallery from "./Gallery";
import ListView from "./ListView";
import { BlogPostType } from "@/app/constants/types";

interface BlogPageToggleProps {
  type: string;
  posts: BlogPostType[];
}

const BlogPageToggle: React.FC<BlogPageToggleProps> = ({ type, posts }) => {
  const [isListView, setIsListView] = useState(false);
  const toggleView = () => {
    setIsListView(!isListView);
  };
  return (
    <div>
      <BlogSelector
        blogType={type}
        toggleView={toggleView}
        isListView={isListView}
      />
      {isListView ? (
        <ListView type={type} posts={posts} />
      ) : (
        <Gallery type={type} posts={posts} />
      )}
    </div>
  );
};

export default BlogPageToggle;
