import React, { useState, useContext } from "react";

import BlogContext from "../../context/BlogContext";

import Button from "../../components/Button";

import { Container, TextInput, Inputs } from "./styles";

export default function CreatePostScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(BlogContext);

  function handlePublishClick() {
    if (content) addBlogPost({ title, content });
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

      <Button title="Publicar" onPress={handlePublishClick} />
    </Container>
  );
}
