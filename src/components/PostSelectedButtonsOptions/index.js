import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Container } from "./styles";

export default function PostSelectedButtonsOptions() {
  return (
    <Container>
      <MaterialCommunityIcons color="#fff" size={25} name="pencil" />
      <MaterialCommunityIcons color="#fff" size={25} name="trash-can" />
    </Container>
  );
}
