import React, { useContext, useEffect } from "react";

import BlogContext from "../../context/BlogContext";

import Post from "./Post";
import AddPostButton from "./AddPostButton";

import { StatusBar } from "react-native";

import { Container, Section, ScrollView } from "./styles";

export default function PostsScreen() {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <>
      <ScrollView>
        <Container>
          <StatusBar
            barStyle="light-content"
            backgroundColor=" rgb(21, 32, 43)"
          />

          <Section>
            {data.slice(0, data.length / 2).map((blog, id) => (
              <Post
                key={id}
                title={blog.title}
                content={`${blog.content}${blog.content}`}
              />
            ))}
          </Section>

          <Section>
            {data.slice(data.length / 2).map((blog, id) => (
              <Post key={id} title={blog.title} content={blog.content} />
            ))}
          </Section>
        </Container>
      </ScrollView>
      <AddPostButton />
    </>
  );
}
