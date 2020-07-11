import styled from "styled-components/native";

import { Dimensions } from "react-native";

export const Container = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  background-color: #1da1f2;
  width: 56px;
  height: 56px;
  border-radius: 90px;
  right: 17px;
  top: ${Dimensions.get("window").height - 180}px;
`;
