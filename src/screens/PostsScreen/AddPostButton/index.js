import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Container } from "./styles";

export default function AddPostButton() {
  return (
    <Container>
      <MaterialCommunityIcons name="plus" size={30} color="#fff" />
    </Container>
  );
}
