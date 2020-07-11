import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = ({ title, content }) => {
    setBlogPosts([
      ...blogPosts,
      {
        title,
        content,
      },
    ]);
  };

  return (
    <BlogContext.Provider
      value={{
        data: blogPosts,
        addBlogPost: addBlogPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
