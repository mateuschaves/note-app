import React, { useContext } from "react";

import BlogContext from "../../context/BlogContext";

import { Container, Text } from "./styles";

export default function PostsScreen() {
  const value = useContext(BlogContext);

  return (
    <Container>
      <Text>{value}</Text>
    </Container>
  );
}
