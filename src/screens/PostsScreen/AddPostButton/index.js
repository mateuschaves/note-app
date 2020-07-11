import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";

export default function AddPostButton() {
  const navigation = useNavigation();

  function handleAddPostClick() {
    navigation.navigate("CreatePost");
  }

  return (
    <Container onPress={handleAddPostClick}>
      <MaterialCommunityIcons name="plus" size={30} color="#fff" />
    </Container>
  );
}
