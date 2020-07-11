import React from "react";

import { Container, Title, Content, Divider } from "./styles";

export default function Post({ title, content }) {
  return (
    <Container>
      <Title numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Title>
      <Content>{content}</Content>
    </Container>
  );
}
