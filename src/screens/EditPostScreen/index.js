import React, { useState, useContext } from "react";

import BlogContext from "../../context/BlogContext";

import Button from "../../components/Button";

import { useNavigationState } from "@react-navigation/native";

import { Container, TextInput, Inputs } from "./styles";

export default function EditPostScreen({ navigation, route }) {
  console.log(route.params);
  const [title, setTitle] = useState(route.params.title || "");
  const [id, setId] = useState(route.params.id || "");
  const [content, setContent] = useState(route.params.content || "");

  const { editBlogPost } = useContext(BlogContext);

  function handleEditPost() {
    if (content) editBlogPost({ id, title, content });
    navigation.navigate("Posts");
  }

  return (
    <Container>
      <Inputs>
        <TextInput
          value={title}
          placeholder="Título"
          placeholderTextColor="#6f7682"
          onChangeText={setTitle}
          multiline
          keyboardType="twitter"
          autoFocus
        />
        <TextInput
          value={content}
          onChangeText={setContent}
          placeholder="Sobre o que vamos falar hoje ?"
          placeholderTextColor="#6f7682"
          multiline
          keyboardType="twitter"
        />
      </Inputs>

      <Button title="Editar" onPress={handleEditPost} />
    </Container>
  );
}
