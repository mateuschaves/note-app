import React, { useContext, useState } from "react";

import BlogContext from "../../context/BlogContext";

import { Empty } from "../../assets/animations";

import LottieView from "lottie-react-native";

import Post from "./Post";
import AddPostButton from "./AddPostButton";

import PostSelectedButtonsOptions from "../../components/PostSelectedButtonsOptions";
import PostSelectedBackButton from "../../components/PostSelectedBackButton";

import { StatusBar } from "react-native";

import {
  Container,
  Section,
  ScrollView,
  EmptyTitle,
  EmptySubtitle,
  EmptyContainer,
} from "./styles";

export default function PostsScreen({ navigation }) {
  const { data } = useContext(BlogContext);
  const [postSelected, setPostSelected] = useState({});

  function handleLongPress({ id, title, content }) {
    setPostSelected({
      id,
      title,
      content,
    });
    navigation.setOptions({
      headerTitle: title ? title : "Publicações",
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "rgb(21, 32, 43)",
      },
      headerRight: () => <PostSelectedButtonsOptions />,
      headerLeft: () => (
        <PostSelectedBackButton handleBackClick={() => handleUndoLongPress()} />
      ),
    });
  }

  function handleUndoLongPress() {
    setPostSelected({});
    navigation.setOptions({
      headerTitle: "Publicações",
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "rgb(21, 32, 43)",
      },
      headerRight: () => {},
      headerLeft: () => {},
    });
  }

  function renderContent() {
    if (!data.length) {
      return (
        <Container>
          <EmptyContainer>
            <EmptyTitle>
              Parece que não há sinal de publicações por aqui
            </EmptyTitle>
            <EmptySubtitle>
              Mas você pode criar uma a qualquer momento !
            </EmptySubtitle>
            <LottieView source={Empty} autoPlay />
          </EmptyContainer>
        </Container>
      );
    } else {
      return (
        <ScrollView>
          <Container>
            <Section>
              {data.slice(0, data.length / 2).map((blog) => (
                <Post
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  content={`${blog.content}${blog.content}`}
                  onLongPress={handleLongPress}
                  selected={blog.id === postSelected.id}
                  onPress={blog.id ? handleUndoLongPress : null}
                />
              ))}
            </Section>

            <Section>
              {data.slice(data.length / 2).map((blog) => (
                <Post
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  content={blog.content}
                  onLongPress={handleLongPress}
                  selected={blog.id === postSelected.id}
                  onPress={blog.id ? handleUndoLongPress : null}
                />
              ))}
            </Section>
          </Container>
        </ScrollView>
      );
    }
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor=" rgb(21, 32, 43)" />
      {renderContent()}
      <AddPostButton />
    </>
  );
}
