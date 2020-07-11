import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = ({ title, content }) => {
    setBlogPosts([
      ...blogPosts,
      {
        id: new Date().getTime(),
        title,
        content,
      },
    ]);
  };

  const removeBlogPost = ({ id }) => {
    console.log(`deletando post com id ${id}`);
    const blogPostFiltered = blogPosts.filter((post) => post.id !== id);
    setBlogPosts(blogPostFiltered);
  };

  return (
    <BlogContext.Provider
      value={{
        data: blogPosts,
        addBlogPost,
        removeBlogPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
