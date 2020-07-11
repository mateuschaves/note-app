import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  background-color: rgb(21, 32, 43);
`;

export const Text = styled.Text`
  color: #fff;
`;

export const Section = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: rgb(21, 32, 43);
`;

export const EmptyTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: rgb(136, 153, 166);
  text-align: center;
  margin: 8px;
  transform: translateY(-200px);
`;

export const EmptySubtitle = styled.Text`
  font-size: 16px;
  color: rgb(136, 153, 166);
  text-align: center;
  margin: 8px;
  transform: translateY(-200px);
`;

export const EmptyContainer = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 17px;
`;
