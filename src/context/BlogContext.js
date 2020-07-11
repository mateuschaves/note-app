import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-community/async-storage";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getContextFromStorage().then((context) => setBlogPosts(context || []));
  }, []);

  useEffect(() => {
    saveContext();
  }, [blogPosts]);

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

  async function saveContext() {
    return await AsyncStorage.setItem(
      "@blog-app/context/blog",
      JSON.stringify(blogPosts)
    );
  }

  async function getContextFromStorage() {
    return JSON.parse(await AsyncStorage.getItem("@blog-app/context/blog"));
  }

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
