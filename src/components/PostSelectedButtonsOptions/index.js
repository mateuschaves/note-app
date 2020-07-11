import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Container } from "./styles";

export default function PostSelectedButtonsOptions({
  handleEditPost,
  handleRemovePost,
}) {
  return (
    <Container>
      <MaterialCommunityIcons
        color="#fff"
        size={25}
        name="pencil"
        onPress={handleEditPost}
      />
      <MaterialCommunityIcons
        color="#fff"
        size={25}
        name="trash-can"
        onPress={handleRemovePost}
      />
    </Container>
  );
}
