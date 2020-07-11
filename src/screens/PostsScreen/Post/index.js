import React, { useRef } from "react";

import * as Animatable from "react-native-animatable";

import { Container, Title, Content } from "./styles";

export default function Post({
  id,
  title,
  content,
  onLongPress,
  onPress,
  selected,
}) {
  const buttonRef = useRef(null);

  function handleButtonClick() {
    buttonRef.current.zoomIn(150, 10);
    onPress();
  }

  return (
    <Animatable.View ref={buttonRef} animation="flipInX">
      <Container
        onLongPress={() => onLongPress({ title, content, id })}
        onPress={handleButtonClick}
        selected={selected}
      >
        {title.length > 0 && (
          <Title numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Title>
        )}
        <Content>{content}</Content>
      </Container>
    </Animatable.View>
  );
}
