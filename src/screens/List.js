import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const items = [
  { id: 1, name: "React Native" },
  { id: 2, name: "expo" },
  { id: 3, name: "React" },
];

const List = ({ navigation }) => {
  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map(({ id, name }) => (
        <Button key={id} title={name} />
      ))}
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </Container>
  );
};

export default List;
