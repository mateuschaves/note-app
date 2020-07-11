import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      {
        title: `Blog Post#${blogPosts.length + 1}`,
        content:
          blogPosts.length % 2 == 0
            ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus tortor. Praesent enim magna, fringilla ut felis egestas, sagittis malesuada ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. `
            : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus tortor. `,
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
