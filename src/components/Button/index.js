import React from "react";

import { Container, Text } from "./styles";

export default function Button({ title, onPress }) {
  return (
    <Container onPress={onPress}>
      <Text>{title}</Text>
    </Container>
  );
}
