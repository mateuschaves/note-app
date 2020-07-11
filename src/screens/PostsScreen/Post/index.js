import React from "react";

import { Container, Title, Content } from "./styles";

export default function Post({
  id,
  title,
  content,
  onLongPress,
  onPress,
  selected,
}) {
  return (
    <Container
      onLongPress={() => onLongPress({ title, content, id })}
      onPress={onPress}
      selected={selected}
    >
      {title.length > 0 && (
        <Title numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Title>
      )}
      <Content>{content}</Content>
    </Container>
  );
}
