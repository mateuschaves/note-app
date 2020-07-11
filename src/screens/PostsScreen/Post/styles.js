import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-basis: 40%;
  border-color: ${(props) =>
    props.selected ? "#1da1f2" : "rgb(136, 153, 166)"};
  border-width: 0.6px;
  border-radius: 8px;
  padding: 8px 8px 17px 17px;
  margin: 8px;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: #fff;
`;

export const Content = styled.Text`
  font-size: 14px;
  text-align: left;
  color: #fff;
  margin-top: 8px;
`;
