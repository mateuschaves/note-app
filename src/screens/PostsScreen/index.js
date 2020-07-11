import React, { useContext, useEffect } from "react";

import BlogContext from "../../context/BlogContext";

import Post from "./Post";

import { FlatList, StatusBar, ScrollView } from "react-native";

import { Container } from "./styles";

export default function PostsScreen() {
  const { data, addBlogPost } = useContext(BlogContext);

  useEffect(() => {
    addBlogPost();
  }, []);

  return (
    <ScrollView>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor=" rgb(21, 32, 43)"
        />
        {data.map((blog, id) => (
          <Post key={id} title={blog.title} content={blog.content} />
        ))}
      </Container>
    </ScrollView>
  );
}
