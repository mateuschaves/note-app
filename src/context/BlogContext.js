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
    const blogPostFiltered = blogPosts.filter((post) => post.id !== id);
    setBlogPosts(blogPostFiltered);
  };

  const editBlogPost = ({ id, title, content }) => {
    const newBlogPosts = blogPosts.map((post) => {
      if (post.id === id)
        return {
          ...post,
          title,
          content,
        };
      else return post;
    });

    setBlogPosts(newBlogPosts);
  };

  return (
    <BlogContext.Provider
      value={{
        data: blogPosts,
        addBlogPost,
        removeBlogPost,
        editBlogPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
