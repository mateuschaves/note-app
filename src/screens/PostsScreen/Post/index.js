import React from "react";

import { Container, Title, Content } from "./styles";

export default function Post({ title, content }) {
  return (
    <Container>
      {title.length > 0 && (
        <Title numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Title>
      )}
      <Content>{content}</Content>
    </Container>
  );
}
