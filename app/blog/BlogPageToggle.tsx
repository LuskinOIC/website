"use client";

import { useState } from "react";
import BlogSelector from "./components/BlogSelector";
import Gallery from "./components/Gallery";
import ListView from "./components/ListView";
import { BlogPostType } from "@/app/constants/types";

interface BlogPageToggleProps {
  type: string;
  news: BlogPostType[];
  posts: BlogPostType[];
}

const BlogPageToggle: React.FC<BlogPageToggleProps> = ({
  type,
  news,
  posts,
}) => {
  const [isListView, setIsListView] = useState(false);
  const toggleView = () => {
    setIsListView(!isListView);
  };
  return (
    <div>
      <BlogSelector
        blogType={"news"}
        toggleView={toggleView}
        isListView={isListView}
      />
      {isListView ? (
        <ListView type={"news"} posts={posts} />
      ) : (
        <Gallery type={"news"} posts={posts} />
      )}
    </div>
  );
};

export default BlogPageToggle;
