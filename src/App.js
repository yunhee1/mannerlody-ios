import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, Image } from "react-native";
import { images } from "./images";
import IconButton from "./components/IconButton";

const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: 20px;
  /*align-items: center;*/
  justify-content: flex-start;
`;

const Title = styled.Text`
  margin-top: 30px;
  margin-bottom: 30px;

  font-size: 30px;
  font-weight: 700;
`;

const SubTitle = styled.Text`
  font-size: 22px;
  color: #6635fa;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const TitleImg = styled.Image`
  border-radius: 15px;
  width: 120px;
  height: 120px;
  object-fit: cover;
  justify-content: flex-start;
`;

const App = () => {
  return (
    <Container>
      <Title>매너모드로 느끼는 멜로디{"\n"}매너로디입니다</Title>
      <SubTitle>오늘은 이 음악 어떤가요?</SubTitle>
      <TitleImg source={require("../assets/images/iam_album_img.jpg")} />
      <SubTitle>최근 들은 노래</SubTitle>
      <IconButton type={images.unlike} />
    </Container>
  );
};

export default App;
